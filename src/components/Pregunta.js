import React, { useState } from 'react';
const Pregunta = ({ pregunta, onAnswer }) => {
  const { id, pregunta: enunciado, opciones } = pregunta;
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleOptionChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(selectedAnswer);
    setSelectedAnswer('');
  };

  return (
    <div className="pregunta">
      <h3>Pregunta {id}</h3>
      <p>{enunciado}</p>
      <form onSubmit={handleSubmit}>
        {opciones.map((opcion, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={opcion}
                checked={selectedAnswer === opcion}
                onChange={handleOptionChange}
              />
              {opcion}
            </label>
          </div>
        ))}
        <button type="submit">Responder</button>
      </form>
    </div>
  );
};

export default Pregunta;

