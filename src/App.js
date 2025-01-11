import "./App.css";
import { BsArrowDownCircleFill, BsArrowUpCircleFill, BsArrowUpRightCircleFill } from "react-icons/bs";
import { useState } from "react";

function App() {
  const faqs = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];
  const [showAnswer, setShowAnswer] = useState(0);
  const setAnswer = (index) => {
    setShowAnswer((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="ques-section">
        <div className="question">
          {faqs.map((faq,index) => {
            return (
              <div onClick={() => setAnswer(index)}>
                {showAnswer === index ? (
                  <button >
                    <BsArrowDownCircleFill />
                  </button>
                ) : (
                    <BsArrowUpRightCircleFill />
                  
                )}
                {faq.question}
                {showAnswer ===index && <div className="answer">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
