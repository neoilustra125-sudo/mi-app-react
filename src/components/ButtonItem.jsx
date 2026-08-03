import "./ButtonItem.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import clickSound from "../assets/sonido_1.wav";

function ButtonItem({ data }) {
  const navigate = useNavigate();
  const [pressed, setPressed] = useState(false);
  const audio = new Audio(clickSound);

  
  const handleClick = () => {
    setPressed(true);

    audio.currentTime = 0; // reinicia si se repite rápido
    audio.play();

    setTimeout(() => {
      navigate(`/profile/${data.id}`);
    }, 200);
  };

  return (
    <div
      className={`boton-contenedor ${pressed ? "pressed" : ""}`}
      onClick={handleClick}
    >
      <div className="boton-top">
        <img src={data.img} alt="" />
      </div>
      <div className="boton-bot">
        <p>{data.title}</p>
      </div>
    </div>
  );
}

export default ButtonItem;
