import uuid from 'react-uuid';
import './AllOrders.css';
import { FaSearch } from 'react-icons/fa';
import OrdersTable from '../../components/OrdersTable/OrdersTable';
import { useMemo } from 'react';

export default function AllOrders() {
  const orderCategories = [
    'Items in cart',
    'Pending',
    'Processing',
    'Processed',
    'Received',
    'Shipped'
  ];
  const orders = useMemo(() => [
    {
      serialNumber: 1,
      productLink: 'https://order-link.com/orders/randomnumber',
      id: 'orderid',
      unitPrice: 20000,
      quantity: 5,
      subTotal: 100000,
      fee: 5000,
      total: 105000,
      action: 'del',
    },
    {
      serialNumber: 2,
      productLink: 'https://order-link.com/orders/randomnumber',
      id: 'orderid',
      unitPrice: 20000,
      quantity: 5,
      subTotal: 100000,
      fee: 5000,
      total: 105000,
      action: 'del',
    },
    {
      serialNumber: 3,
      productLink: 'https://order-link.com/orders/randomnumber',
      id: 'orderid',
      unitPrice: 20000,
      quantity: 5,
      subTotal: 100000,
      fee: 5000,
      total: 105000,
      action: 'del',
    },
    {
      serialNumber: 4,
      productLink: 'https://order-link.com/orders/randomnumber',
      id: 'orderid',
      unitPrice: 20000,
      quantity: 5,
      subTotal: 100000,
      fee: 5000,
      total: 105000,
      action: 'del',
    },
    {
      serialNumber: 5,
      productLink: 'https://order-link.com/orders/randomnumber',
      id: 'orderid',
      unitPrice: 20000,
      quantity: 5,
      subTotal: 100000,
      fee: 5000,
      total: 105000,
      action: 'del',
    },
    {
      serialNumber: 6,
      productLink: 'https://order-link.com/orders/randomnumber',
      id: 'orderid',
      unitPrice: 20000,
      quantity: 5,
      subTotal: 100000,
      fee: 5000,
      total: 105000,
      action: 'del',
    },
    {
      serialNumber: 7,
      productLink: 'https://order-link.com/orders/randomnumber',
      id: 'orderid',
      unitPrice: 20000,
      quantity: 5,
      subTotal: 100000,
      fee: 5000,
      total: 105000,
      action: 'del',
    },
    {
      serialNumber: 8,
      productLink: 'https://order-link.com/orders/randomnumber',
      id: 'orderid',
      unitPrice: 20000,
      quantity: 5,
      subTotal: 100000,
      fee: 5000,
      total: 105000,
      action: 'del',
    },
    {
      serialNumber: 9,
      productLink: 'https://order-link.com/orders/randomnumber',
      id: 'orderid',
      unitPrice: 20000,
      quantity: 5,
      subTotal: 100000,
      fee: 5000,
      total: 105000,
      action: 'del',
    },
    {
      serialNumber: 10,
      productLink: 'https://order-link.com/orders/randomnumber',
      id: 'orderid',
      unitPrice: 20000,
      quantity: 5,
      subTotal: 100000,
      fee: 5000,
      total: 105000,
      action: 'del',
    },
    {
      serialNumber: 11,
      productLink: 'https://order-link.com/orders/randomnumber',
      id: 'orderid',
      unitPrice: 20000,
      quantity: 5,
      subTotal: 100000,
      fee: 5000,
      total: 105000,
      action: 'del',
    },
  ], []);

  return (
    <div className="all-orders">
      <header className="header-container">
        <h1 className="subroute-header">All Orders</h1>
      </header>
      <main className="orders-content">
        <ul className="order-tabs">
          {
            orderCategories.map((category) => (
              <li key={uuid()} className={`tab ${category}`}>
                <button className="text">{category}</button>
              </li>
            ))
          }
        </ul>
        <section className="toolbar">
          <div className="search-box">
            <input type="text" placeholder="Search by order id" />
            <FaSearch />
          </div>
        </section>
        <section className="orders-table">
          <OrdersTable orders={orders} />
        </section>
      </main>
    </div>
  )
}