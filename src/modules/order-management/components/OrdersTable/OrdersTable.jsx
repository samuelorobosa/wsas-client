/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import uuid from 'react-uuid';
import { useWindowSize } from '../../../../core/hooks';
import './OrdersTable.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useState } from 'react';

export default function OrdersTable ({ orders }) {
  const { isMobile } = useWindowSize();

  return isMobile ? (
    <OrdersTable.Mobile orders={orders} />
  ) : (
    <OrdersTable.Desktop orders={orders} />
  )
}

OrdersTable.Mobile = ({ orders }) => {
  return (
    <div className="orders-table mobile">
      <p>MOBILE VIEW</p>
      {
        orders.map((order) => (
          <p key={uuid()} className="order">{order}</p>
        ))
      }
    </div>
  )
}

OrdersTable.Desktop = ({ orders }) => {
  const pageBtnStyle = { className: 'page-btn-icon' };
  const cols = [
    'S/N',
    'Product Link',
    'Order ID',
    'Unit Price',
    'Qty',
    'SubTotal',
    'Fee (5%)',
    'Total',
    'Action',
  ];
  const rightNameFor = [
    'sn',
    'product-link',
    'order-id',
    'unit-price',
    'qty',
    'subtotal',
    'fee',
    'total',
    'action',
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (idx) => {
    setCurrentPage(idx);
  }

  const goToPrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((current) => current - 1);
  }

  const goToNextPage = () => {
    if (currentPage === 5) return;
    setCurrentPage((current) => current + 1);
  }

  return (
    <div className="orders-table desktop">
      <section className="t-head">
        {
          cols.map((col, index) => (
            <div key={uuid()} className={`t-cell ${rightNameFor[index]}`}>
              <h3 className="cell-title">{col}</h3>
            </div>
          ))
        }
      </section>
      <section className="t-body">
        {
          orders.map((order) => (
            <button onClick={() => alert(order.productLink)} key={uuid()} className="t-row">
              <div className="t-cell sn">
                <p className="text sn">{order.serialNumber}</p>
              </div>
              <div className="t-cell product-link">
                <p className="text product-link">{order.productLink}</p>
              </div>
              <div className="t-cell order-id">
                <p className="text order-id">{order.id}</p>
              </div>
              <div className="t-cell unit-price">
                <p className="text unit-price">{order.unitPrice}</p>
              </div>
              <div className="t-cell qty">
                <p className="text qty">{order.quantity}</p>
              </div>
              <div className="t-cell subtotal">
                <p className="text sub-total">{order.subTotal}</p>
              </div>
              <div className="t-cell fee">
                <p className="text fee">{order.fee}</p>
              </div>
              <div className="t-cell total">
                <p className="text total">{order.total}</p>
              </div>
              <div className="t-cell action">
                <p className="text action">{order.action}</p>
              </div>
            </button>
          ))
        }
      </section>
      <section className="t-footer">
        <div className="page-info">
          <p className="page-info-txt">Showing <span><b>10</b></span> of 50</p>
        </div>
        <div className="page-btns">
          <button onClick={goToPrevPage} className="page-btn ctrl">
            <IconContext.Provider value={pageBtnStyle}>
              <FaChevronLeft />
            </IconContext.Provider>
          </button>
          {
            [1,2,3,4,5,].map((num, idx) => (
              <button
                onClick={() => changePage(idx + 1)}
                key={uuid()}
                className={`page-btn page-no ${(currentPage === idx + 1) && 'active'}`}
              >
                {num}
              </button>
            ))
          }
          <button onClick={goToNextPage} className="page-btn ctrl">
            <IconContext.Provider value={pageBtnStyle}>
              <FaChevronRight />
            </IconContext.Provider>
          </button>
        </div>
      </section>
    </div>
  )
}
