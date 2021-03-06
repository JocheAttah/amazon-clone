import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(user);

  return (
    <div className="orders">
      <h1 className="orders__heading">Your Orders</h1>
      <div className="orders__order">
        {user == null ? (
          <div className="orders__heading">
            Log In to see your Order history
          </div>
        ) : (
          orders.map((order) => <Order order={order} />)
        )}
      </div>
    </div>
  );
}

export default Orders;
