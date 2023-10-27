import { useState } from 'react';
import { Quiz, quiz } from "@/types/quizData";

export default function QuizComponent() {
  const [responses, setResponses] = useState<number[]>(Array(quiz.length).fill(0));

  const handleResponseChange = (questionIndex: number, optionIndex: number) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = optionIndex;
    setResponses(newResponses);
  };

  const evaluateQuizResponses = () => {
    let totalScore = 0;
    for (let i = 0; i < responses.length; i++) {
      totalScore += responses[i];
    }
    return totalScore;
  };

  return (
    <div>
      {quiz.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h2>{question.text}</h2>
          <div>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  id={`q${questionIndex}o${optionIndex}`}
                  name={`q${questionIndex}`}
                  checked={responses[questionIndex] === optionIndex}
                  onChange={() => handleResponseChange(questionIndex, optionIndex)}
                />
                <label htmlFor={`q${questionIndex}o${optionIndex}`}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={() => alert(`Your total score is ${evaluateQuizResponses()}.`)}>
        Submit
      </button>
    </div>
  );
}
