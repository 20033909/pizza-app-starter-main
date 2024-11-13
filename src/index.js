import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {pizzaData} from "./data.js";

function Header() {
  return <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>Andy's Pizza Co.</h1>;
}

function Pizza({ name, description, image, price }) {
  
  return (
    
    <div className = "pizza">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

function Menu() {
  return (
    <div className = "menu">
      <h2>Our Menu</h2>
      <p>Authentic Italian cuisine, all from our stone oven</p>
      
      <div className = "pizzas">
      {pizzaData.map((pizza, i) => (
        <Pizza
          key={i}  
          name={pizza.name}
          description={pizza.ingredients}  
          image={pizza.photoName}          
          price={pizza.price}              
        />
      ))}


      
      </div>

    </div>


  )

}
function Footer(){
  const currentHour = new Date().getHours();

  
  const isOpen = currentHour >= 10 && currentHour < 22;
  return(
    <footer className="footer">
      {isOpen ? "We're currently open" : "Sorry, we're closed"}
    </footer>
  )
}

function Button() {
  const [message, setMessage] = useState("");  

  const handleClick = () => {
    setMessage("Site under construction. Call 6923 5544"); 
  };

  return (
    <div className="btn-container">
      <button className="btn" onClick={handleClick}>
        Order
      </button>

      {message ? <p className="footer" style={{ marginTop: "10px" }}>{message}</p>: null}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Button />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
