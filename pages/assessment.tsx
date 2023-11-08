import Layout from "@/components/Layout";
import { useState } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

interface Question {
  id: string;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: "q1",
    text: "How often do you experience overwhelming sadness?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: "q2",
    text: "Do you find it difficult to concentrate or make decisions?",
    options: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
  },
  {
    id: "q3",
    text: "Are you experiencing changes in your sleep patterns?",
    options: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
  },
  {
    id: "q4",
    text: "Do you have a decreased interest in activities you used to enjoy?",
    options: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
  },
  {
    id: "q5",
    text: "Do you feel a lack of energy or motivation?",
    options: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
  },
  {
    id: "q6",
    text: "Have you noticed changes in your appetite or weight?",
    options: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
  },
  {
    id: "q7",
    text: "Do you often feel anxious or worried?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: "q8",
    text: "Do you experience physical symptoms like headaches or stomachaches without a clear cause?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: "q9",
    text: "Have you had thoughts of self-harm or suicide?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: "q10",
    text: "Do you have difficulty falling or staying asleep?",
    options: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
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
      if (
        response === "Often" ||
        response === "Very" ||
        response === "Extremely"
      ) {
        totalScore++;
      }
    });

    let resultText;
    if (totalScore <= 1) {
      resultText = "Your mental health appears to be in a good state.";
    } else if (totalScore <= 3) {
      resultText =
        "You may be experiencing some mild mental health challenges. Consider seeking support.";
    } else {
      resultText =
        "It's important to talk to a mental health professional about your current state.";
    }

    alert(resultText);
    setResponses({});
  };

  return (
    <Layout>
      <section className="mt-2 min-h-full md:h-full  md:pb-0 w-5/6 mx-auto py-20 ">
        <form
          onSubmit={handleSubmit}
          className="gap-16 shadow-3xl mt-8 py-10 md:h-full min-h-full md:pb-0 rounded-lg bg-green-300 flex flex-wrap items-start flex-col "
        >
          <div className="flex items-center justify-between gap-8 border-4 border-double mt-5 w-5/6  ml-12">
            <h1
              className={`${roboto.className}font-bold sm:text-lg sm:p-5  text-orange-800  sm:ml-60 m-6`}
            >
              Assessment Test
            </h1>
          </div>
          {questions.map((question) => (
            <div key={question.id} className="ml-8 mb-6">
              <h2 className="text-lg font-medium mb-2">{question.text}</h2>
              {question.options.map((option) => (
                <div key={option} className="flex items-center mb-2">
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
          <div className="flex justify-center ml-8 mb-6">
            <button
              type="submit"
              className=" bg-orange-500 border-4  transition duration-500 hover:text-white hover:border-dotted  mt-5 px-20 py-3 rounded-lg  "
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default MentalHealthAssessment;
