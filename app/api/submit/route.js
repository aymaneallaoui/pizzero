
import connectDB from '../../utils/db';
import Order from '../../utils/models/pizza_orders';
import { NextResponse } from 'next/server';

connectDB(); 


export async function POST(req, res) {
  if (req.method === 'POST' || req.method === 'GET') {
    const data_string = JSON.stringify(req.body);
    
    const { name, email, phone, pizza } = JSON.parse(data_string);

    console.log('Request payload:', JSON.parse(data_string)); 

    try {
      const order = new Order({
        name,
        email,
        phone,
        pizza,
      });

      await order.save();

      return NextResponse.json({ message: 'Order submitted successfully' });
    } catch (error) {
      console.error('Error saving order:', error); 

      return NextResponse.json({ message: 'Failed to submit order' });
    }
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' });
  }
}