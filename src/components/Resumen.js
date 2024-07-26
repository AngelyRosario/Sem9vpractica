import React from 'react';

const Resumen = ({ preguntasTotales, respuestasCorrectas, respuestasIncorrectas }) => {
  const totalRespuestas = respuestasCorrectas + respuestasIncorrectas;
  const porcentajeCorrectas = (respuestasCorrectas / preguntasTotales) * 100;

  return (
    <div className="resumen">
      <h2>Resumen</h2>
      <p>Preguntas respondidas correctamente: {respuestasCorrectas}</p>
      <p>Preguntas respondidas incorrectamente: {respuestasIncorrectas}</p>
      <p>Porcentaje de respuestas correctas: {porcentajeCorrectas.toFixed(2)}%</p>
    </div>
  );
};

export default Resumen;
