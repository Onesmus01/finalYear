import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        // Check if JWT_SECRET is set
        if (!process.env.JWT_SECRET) {
            console.error('Error: JWT_SECRET is not set in environment variables');
            return res.status(500).json({ success: false, message: "Internal server error" });
        }

        // Extract token from the Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: "Not authorized" });
        }
        const token = authHeader.split(' ')[1]; // Extract the actual token

        // Verify the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Ensure the decoded token contains the admin email
        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: "Forbidden: Admin access required" });
        }

        next(); // Proceed to the next middleware or route
    } catch (error) {
        console.error('Error during admin authentication:', error);
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

export default adminAuth;
