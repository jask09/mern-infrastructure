import { useState, useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import './OrderHistoryPage.css';


export default function OrderHistoryPage() {

  const[orders, setOrders] = useState ([])

  useEffect(() => {
    async function getOrders() {
      try {
        const orders = await ordersAPI.getOrders();
        setOrders(orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }
    getOrders();
  }, []);
console.log(orders.lineItems)

  return (
    <>
    <h1>Smooth Jazz Car Wash</h1>
    <div className='OrderHistory'>
            {orders.map((order, index) => (
                <div key={index} className="oh-order">
                    <p className="oh-date">
                        <span>
                            Order {index + 1} -&nbsp;
                        </span>
                        <span>
                            {new Date(order.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric' })}
                        </span>
                    </p>
                    <div className="oh-lineItems">
                        {order.lineItems.map((lineItem, lineIndex) => (
                            <div className="oh-li">
                                <p key={lineIndex}>{lineItem.item.name}</p>
                                <p className="oh-liPrice">
                                    <span>
                                        {lineItem.qty}x 
                                    </span>
                                    <span>
                                        ${lineItem.item.price}
                                    </span>
                                    <span className="oh-extPrice">
                                        ${lineItem.extPrice}
                                    </span>
                                </p>
                            </div>
                            ))}
                        <div className="oh-total">
                            ${order.orderTotal}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  );
}
