"use client";
import React, { useState, useEffect } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pizza, setPizza] = useState("");
  const [topping, setTopping] = useState("");
  const [message, setMessage] = useState("");
  const [pizzas, setPizzas] = useState([]);
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    const fetchToppings = async () => {
      try {
        const response = await fetch("/api/getToppings");
        const data = await response.json();
        setToppings(data);
      } catch (error) {
        console.error("Error fetching toppings:", error);
      }
    };
    fetchToppings();
  }, []);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("/api/getPizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };
    fetchPizzas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      name,
      email,
      phone,
      address,
      pizza,
      topping, // add selected topping to order object
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setPizza("");
        setTopping(""); // reset selected topping
        setAddress("");
        setMessage("Your order has been placed successfully!");
      } else {
        const errorMessage = await response.text();
        setMessage(errorMessage);
      }
    } catch (error) {
      setMessage("An error occurred while submitting the order.");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold w-full">Order now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">address</span>
                </label>
                <input
                  type="text"
                  placeholder="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pizza</span>
                </label>
                <select
                  value={pizza}
                  onChange={(e) => setPizza(e.target.value)}
                  className="select select-bordered"
                  required
                >
                  <option value="" disabled>
                    Select a pizza
                  </option>
                  {pizzas.map((pizza) => (
                    <option key={pizza.id} value={pizza.id}>
                      {pizza.name}
                    </option>
                  ))}
                </select>
              </div>
              {toppings.length > 0 && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Topping</span>
                  </label>
                  <select
                    value={topping}
                    onChange={(e) => setTopping(e.target.value)} // use setTopping instead of setToppings
                    className="select select-bordered"
                    required
                  >
                    <option value="" disabled>
                      Select a Topping
                    </option>
                    {toppings.map((topping) => (
                      <option key={topping.id} value={topping.id}>
                        {topping.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Place Order
                </button>
              </div>
              {message && (
                <>
                  {message.startsWith("Your") ? (
                    <div className="alert alert-success mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{message}</span>
                    </div>
                  ) : (
                    <div className="alert alert-error mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p>{message}</p>
                    </div>
                  )}
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
