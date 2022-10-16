import React, { useContext } from "react";
import { pizzaContext } from "../context/PizzaProvider";
import { useParams } from "react-router-dom";

const DetailsPizza = () => {
  const { pizza } = useContext(pizzaContext);
  const { id } = useParams()

  return (
    <div>
  
    <div className="container-images">
      {pizza
        .filter((a) => a.id === id)
        .map((e) => (

              <div className="image-desc">
                  <img src={e.img} alt="" />
                  <div className="name-detail">
                  <h1>Pizza:</h1>
                  <h2 className="NamedescPizza"> {e.name}</h2>
                  </div>
                  <div className="container-desc">
                  <p>{e.desc}</p>
                  </div>
                      <h3>Ingredientes</h3>
                      <h4>🍕{e.ingredients[0]}</h4>
                      <h4>🍕{e.ingredients[1]}</h4>
                      <h4>🍕{e.ingredients[2]}</h4>
                      <h4>🍕{e.ingredients[3]}</h4>
                      <h2>${e.price}</h2>
              </div>
        ))}
    </div>
    </div>

  );
};

export default DetailsPizza;

