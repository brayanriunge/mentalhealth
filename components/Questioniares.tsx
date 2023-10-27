import { useState } from 'react';

interface Question {
  id: string;
  text: string;
  options: { value: number; label: string }[];
}

const questions: Question[] = [
    {
        id: 'q1',
        text: 'Little interest or pleasure in doing things',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' },
        ],
      },
      {
        id: 'q2',
        text: 'Feeling down, depressed, or hopeless',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' },
        ],
      },
      {
        id: 'q3',
        text: 'Trouble falling or staying asleep, or sleeping too much',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' },
        ],
      },
      {
        id: 'q4',
        text: 'Feeling tired or having little energy',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' },
        ],
      },
      {
        id: 'q5',
        text: 'Poor appetite or overeating',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' },
        ],
      },
      {
        id: 'q6',
        text: 'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' },
        ],
      },
      {
        id: 'q7',
        text: 'Trouble concentrating on things, such as reading the newspaper or watching television',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' },
        ],
      },
      {
        id: 'q8',
        text: 'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' },
        ],
      },
      {
        id: 'q9',
        text: 'Thoughts that you would be better off dead, or of hurting yourself in some way',
        options: [
          { value: 0, label: 'Not at all' },
          { value: 1, label: 'Several days' },
          { value: 2, label: 'More than half the days' },
          { value: 3, label: 'Nearly every day' },
        ],
      },
      // Add more questions here...
   
  // Add the remaining questions here...
];

const PHQ9Questionnaire: React.FC = () => {
  const [responses, setResponses] = useState<{ [key: string]: number }>({});

  const handleResponseChange = (questionId: string, optionValue: number) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: optionValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const totalScore = Object.values(responses).reduce((acc, value) => acc + value, 0);

    let severity;
    if (totalScore <= 4) severity = 'Minimal depression';
    else if (totalScore <= 9) severity = 'Mild depression';
    else if (totalScore <= 14) severity = 'Moderate depression';
    else if (totalScore <= 19) severity = 'Moderately severe depression';
    else severity = 'Severe depression';

    alert(`Your total score is ${totalScore}. You are in the range of: ${severity}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.text}</h2>
          {question.options.map((option) => (
            <div key={option.value}>
              <input
                type="radio"
                id={`${question.id}o${option.value}`}
                name={question.id}
                value={option.value}
                checked={responses[question.id] === option.value}
                onChange={() => handleResponseChange(question.id, option.value)}
              />
              <label htmlFor={`${question.id}o${option.value}`}>{option.label}</label>
            </div>
          ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PHQ9Questionnaire;
