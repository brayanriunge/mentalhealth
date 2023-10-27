import { useState } from 'react';

interface Question {
  id: string;
  text: string;
  options: string[];
}

const questions: Question[] = [
    {
        id: 'q1',
        text: 'How often do you experience overwhelming sadness?',
        options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
      },
      {
        id: 'q2',
        text: 'Do you find it difficult to concentrate or make decisions?',
        options: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely'],
      },
      {
        id: 'q3',
        text: 'Are you experiencing changes in your sleep patterns?',
        options: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely'],
      },
      {
        id: 'q4',
        text: 'Do you have a decreased interest in activities you used to enjoy?',
        options: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely'],
      },
      {
        id: 'q5',
        text: 'Do you feel a lack of energy or motivation?',
        options: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely'],
      },
      {
        id: 'q6',
        text: 'Have you noticed changes in your appetite or weight?',
        options: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely'],
      },
      {
        id: 'q7',
        text: 'Do you often feel anxious or worried?',
        options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
      },
      {
        id: 'q8',
        text: 'Do you experience physical symptoms like headaches or stomachaches without a clear cause?',
        options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
      },
      {
        id: 'q9',
        text: 'Have you had thoughts of self-harm or suicide?',
        options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
      },
      {
        id: 'q10',
        text: 'Do you have difficulty falling or staying asleep?',
        options: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely'],
      },
];

const MentalHealthAssessment: React.FC = () => {
  const [responses, setResponses] = useState<{ [key: string]: string }>({});

  const handleResponseChange = (questionId: string, option: string) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: option,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Calculate total score based on responses
    let totalScore = 0;
    Object.values(responses).forEach((response) => {
      if (response === 'Often' || response === 'Very' || response === 'Extremely') {
        totalScore++;
      }
    });

    let resultText;
    if (totalScore <= 1) {
      resultText = "Your mental health appears to be in a good state.";
    } else if (totalScore <= 3) {
      resultText = "You may be experiencing some mild mental health challenges. Consider seeking support.";
    } else {
      resultText = "It's important to talk to a mental health professional about your current state.";
    }

    alert(resultText);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.text}</h2>
          {question.options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                id={`${question.id}-${option}`}
                name={question.id}
                checked={responses[question.id] === option}
                onChange={() => handleResponseChange(question.id, option)}
              />
              <label htmlFor={`${question.id}-${option}`}>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MentalHealthAssessment;
