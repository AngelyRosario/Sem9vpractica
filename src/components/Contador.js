import React, { useState, useEffect } from 'react';

const Contador = ({ totalPreguntas, preguntaActual, onTimeUp, startTime, setStartTime }) => {
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const start = new Date();
    setStartTime(start);

    const interval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
        onTimeUp();
      } else if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="contador-container">
      <div className="contador">
        Tiempo restante: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        <br />
        Pregunta {preguntaActual} de {totalPreguntas}
        <br />
        {startTime && (
          <p>Hora de inicio: {startTime.toLocaleTimeString()}</p>
        )}
        <p>Hora de finalización: {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default Contador;
