import React, { useContext } from "react";
import { pizzaContext } from "../context/PizzaProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate();
  const { pizza, detail, setDetail } = useContext(pizzaContext);

  const addCart = (element) => {
    if (addCart) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu producto se Agregó Correctamente",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    setDetail([
      ...detail,
      {
        idProduct: element.id,
        name: element.name,
        amount: 1,
        price: element.price,
        img: element.img,
      },
    ]);
  };

  return (
    <div>
      <div className="title">
        <h1>¡Pizzería Mamma Mía!</h1>
        <h3>¡Tenemos las mejores Pizzas que podrás encontrar!</h3>
        <hr className="line"></hr>
      </div>
      <div className="container-card">
        {pizza.map((e) => (
          <div className="card" key={e.id}>
            <img className="img-card" src={e.img} alt="" />
            <div className="text-card">
              <h2>{e.name}</h2>
              <h4>🍕{e.ingredients[0]}</h4>
              <h4>🍕{e.ingredients[1]}</h4>
              <h4>🍕{e.ingredients[2]}</h4>
              <h4>🍕{e.ingredients[3]}</h4>
              <h2>${e.price}</h2>
              <div className="box-button">
                <button
                  className="btninfo"
                  onClick={() => navigate(`/pizza/${e.id}`)}
                >
                  Más Info 👀
                </button>
                <button className="btnadd" onClick={() => addCart(e)}>
                  Agregar 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
