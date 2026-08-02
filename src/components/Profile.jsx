import "./Profile.css";
import flechaImg from "../assets/flecha.png";
import sombra from "../assets/sombra.png";
import malla from "../assets/malla.png";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import clickSound from "../assets/sonido_2.wav";
function Profile({ data, items }) {
  const [show, setShow] = useState(false);
  const audio = new Audio(clickSound);
  useEffect(() => {
    setShow(false);

    const timeout = setTimeout(() => {
      setShow(true);
    }, 50); // pequeño reset

    return () => clearTimeout(timeout);
  }, [data.id]);

  const handleClose = () => {
    setShow(false);
    audio.currentTime = 0; // reinicia si se repite rápido
    audio.play();
    setTimeout(() => {
      navigate("/");
    }, 400); // mismo tiempo que tu CSS
  };
  const navigate = useNavigate();

  const currentIndex = items.findIndex((i) => i.id === data.id);

  const goNext = () => {
    setShow(false);
    audio.currentTime = 0; // reinicia si se repite rápido
    audio.play();
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % items.length;
      navigate(`/profile/${items[nextIndex].id}`);
    }, 80);
  };
  const goPrev = () => {
    setShow(false);
    audio.currentTime = 0; // reinicia si se repite rápido
    audio.play();
    setTimeout(() => {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      navigate(`/profile/${items[prevIndex].id}`);
    }, 80);
  };

  return (
    <>
      <div className={`profile-container ${show ? "active" : ""}`}>
        <div className="boton-flotante" onClick={handleClose}>
          Cerrar
        </div>
        <div className="boton-flotante2" >
          ID {data.id}
        </div>
        <div className="boton-flotante3" >
          {data.artist}
        </div>

        <div className="container d-flex justify-content-center">
          <div className="menu-container">
            <div className="menu-top">
              <img className="imagen" src={data.img} alt="" />
              <img className="sombra" src={sombra} alt="" />

              <img
                className="malla"
                src={malla}
                alt=""
              />
            </div>

            <div className="menu-mid">
              <div className="boton-izquierda" onClick={goPrev}>
                <img className="flecha-izquierda" src={flechaImg} alt="" />
              </div>

              <div className="titulo">{data.title}</div>

              <div className="boton-derecha" onClick={goNext}>
                <img className="flecha-derecha" src={flechaImg} alt="" />
              </div>
            </div>

            <div className="menu-bot">
              <div className="bot-texto">{data.description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
