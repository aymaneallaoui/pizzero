import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  pizza: String,
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;