interface Question {
    text: string;
    options: string[];
  }
  
  interface Answer {
    score: number;
  }
  
  export type Quiz = Question[];
  
  export const quiz: Quiz = [
    {
      text: "How often do you feel sad or hopeless?",
      options: ["Rarely or never", "Sometimes", "Often", "All the time"]
    },
    {
      text: "Do you have trouble sleeping?",
      options: ["No", "Sometimes", "Frequently", "Always"]
    },
    {
      text: "Have you lost interest in activities you used to enjoy?",
      options: ["No", "Yes, a little", "Yes, quite a bit", "Yes, completely"]
    }
  ];
  
  export const answers: Answer[] = [
    { score: 0 }, // Corresponds to "Rarely or never"
    { score: 1 }, // Corresponds to "Sometimes"
    { score: 2 }, // Corresponds to "Often"
    { score: 3 }  // Corresponds to "All the time"
  ];
  