import nodemailer from 'nodemailer';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import dotenv from 'dotenv';
dotenv.config();

// Configure the email transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Function to create a JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

// Function to send confirmation email
const sendConfirmationEmail = async (email) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to Our Service',
            text: 'Thank you for registering with us! We are happy to have you onboard.',
        };

        await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent successfully');
    } catch (error) {
        console.error('Error sending confirmation email:', error);
    }
};

// Route for user login
const loginUser = async (req, res) => {
    try {
        console.log('Received login request:', req.body);
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, msg: 'Email and password are required' });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, msg: 'User does not exist' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            return res.json({ success: true, token });
        } else {
            return res.status(401).json({ success: false, msg: 'Invalid password' });
        }
    } catch (error) {
        console.error('Error during user login:', error);
        return res.status(500).json({ success: false, msg: 'Internal server error' });
    }
};

// Route for user registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, msg: 'All fields are required' });
        }

        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(409).json({ success: false, msg: 'User already exists' });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, msg: 'Please enter a valid email' });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, msg: 'Please enter a stronger password' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        await sendConfirmationEmail(newUser.email); // Send confirmation email

        const token = createToken(newUser._id);
        return res.status(201).json({ success: true, token });
    } catch (error) {
        console.error('Error during user registration:', error);
        return res.status(500).json({ success: false, msg: 'Internal server error' });
    }
};

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({ success: false, msg: 'All fields required' });
        }

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '3d' });
            return res.json({ success: true, token });
        } else {
            return res.status(401).json({ success: false, msg: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during admin login:', error);
        return res.status(500).json({ success: false, msg: 'An error occurred during login' });
    }
};

export { loginUser, registerUser, adminLogin };
