import React, { useState, useEffect } from 'react';
import preguntas from './components/preguntas'; 
import Pregunta from './components/Pregunta';
import Contador from './components/Contador';
import Resumen from './components/Resumen';
import style from './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [finishTime, setFinishTime] = useState(null);

  const handleAnswer = (selectedAnswer) => {
    const respuestaCorrecta = preguntas[currentQuestion].respuesta;
    if (selectedAnswer === respuestaCorrecta) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion < preguntas.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleTimeUp = () => {
    const finish = new Date();
    setFinishTime(finish);
    setShowSummary(true);
  };

  return (
    <div className="App">
      {!showSummary && (
        <>
          <Pregunta
            pregunta={preguntas[currentQuestion]}
            onAnswer={handleAnswer}
          />
          <Contador
            totalPreguntas={preguntas.length}
            preguntaActual={currentQuestion + 1}
            onTimeUp={handleTimeUp}
            startTime={startTime}
            setStartTime={setStartTime}
          />
        </>
      )}
      {showSummary && (
        <Resumen
          preguntasTotales={preguntas.length}
          respuestasCorrectas={correctAnswers}
          respuestasIncorrectas={incorrectAnswers}
          horaInicio={startTime}
          horaFinalizacion={finishTime}
        />
      )}
    </div>
  );
};

export default App;

