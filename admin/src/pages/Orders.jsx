import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import assets from '../assets/admin_assets/assets.js';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:7000/api/order/list',
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const statusHandler = async(e,orderId)=> {
    try {
      const response = await axios.post('http://localhost:7000/api/order/status',{orderId,status:e.target.value},{headers: {token}})
      if(response.data.success){
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="orders-container">
      <h3 className="order-title">Orders</h3>
      <div className="orders-list">
        {orders.map((order, index) => (
          <div key={index} className="order-card">
            <img src={assets.parcel_icon} alt="Parcel Icon" className="order-icon" />
            <div className="order-info">
              <div className="order-items">
                {order.items.map((item, idx) => (
                  <p key={idx} className="order-item">
                    {item.name} X {item.quantity} <span>{item.size}</span>
                  </p>
                ))}
              </div>
              <p className="order-name">{order.address.firstName} {order.address.lastName}</p>
              <div className="order-address">
                <p>{order.address.street},</p>
                <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
              </div>
              <p className="order-phone">{order.address.phone}</p>
            </div>
            <div className="order-summary">
              <p>Items: {order.items.length}</p>
              <p>Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="order-amount">$ {order.amount}</p>
            <select onChange={(e)=>statusHandler(e,order._id)} className="order-status">
              <option value="OrderPlaced">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
