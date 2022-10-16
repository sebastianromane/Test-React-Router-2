import { NavLink } from "react-router-dom";
import { pizzaContext } from "../context/PizzaProvider";
import { useContext } from "react";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "undefined");
  const { detail } = useContext(pizzaContext);

  return (
    <div className="nav">
      <NavLink className={setActiveClass} end to="/">
      <img className="navbarImg" src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png"></img>
      Pizzería Mamma Mía!
      </NavLink>

      <NavLink className={setActiveClass} to="/Cart">
      🛒 Shopping Cart
      </NavLink>
      <h3 className="result">
                  Total Pedido $
                  {detail
                    .map((item) => item.price * item.amount)
                    .reduce((prev, curr) => prev + curr, 0)
                    .toLocaleString('de-DE')}
                </h3>
      </div>
  );
}