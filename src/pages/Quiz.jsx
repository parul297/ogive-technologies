// src/pages/Quiz.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is the main gun caliber of the T-72 tank?",
      options: ["105mm", "120mm", "125mm", "130mm"],
      correctAnswer: 2,
      explanation: "The T-72 is equipped with a 125mm 2A46 smoothbore main gun, which uses an autoloader system.",
      category: "Tank Overview"
    },
    {
      id: 2,
      question: "How many crew members operate the T-72 tank?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
      explanation: "The T-72 has a crew of 3: Driver, Gunner, and Commander. The autoloader eliminates the need for a dedicated loader.",
      category: "Tank Overview"
    },
    {
      id: 3,
      question: "What is the maximum road speed of the T-72?",
      options: ["45 km/h", "50 km/h", "60 km/h", "70 km/h"],
      correctAnswer: 2,
      explanation: "The T-72 can reach a maximum road speed of 60 km/h, powered by its V-46-6 diesel engine.",
      category: "Tank Overview"
    },
    {
      id: 4,
      question: "Which control system allows the driver to steer the tank?",
      options: ["Steering wheel", "Joystick", "Steering levers", "Pedals only"],
      correctAnswer: 2,
      explanation: "The T-72 driver uses steering levers that control track speed differentially to turn the tank.",
      category: "Main Controls"
    },
    {
      id: 5,
      question: "What does NBC protection stand for?",
      options: [
        "Night Battle Control",
        "Nuclear, Biological, Chemical",
        "Navigation Backup Control",
        "Night Binocular Camera"
      ],
      correctAnswer: 1,
      explanation: "NBC stands for Nuclear, Biological, and Chemical protection - a critical system for operating in contaminated environments.",
      category: "Safety Procedures"
    },
    {
      id: 6,
      question: "What should be the FIRST action in case of a fire inside the tank?",
      options: [
        "Open all hatches for ventilation",
        "Activate automatic fire suppression system",
        "Evacuate immediately",
        "Use manual fire extinguisher"
      ],
      correctAnswer: 1,
      explanation: "The first action should be to activate the automatic fire suppression system immediately, then alert crew and prepare for evacuation if needed.",
      category: "Safety Procedures"
    },
    {
      id: 7,
      question: "How many rounds does the T-72 autoloader carousel hold?",
      options: ["18 rounds", "20 rounds", "22 rounds", "24 rounds"],
      correctAnswer: 2,
      explanation: "The T-72 autoloader has a 22-round carousel system in the turret floor, with additional rounds stored separately.",
      category: "Main Controls"
    },
    {
      id: 8,
      question: "What is the primary role of the tank commander?",
      options: [
        "Drive the tank",
        "Load ammunition",
        "Target acquisition and crew coordination",
        "Repair equipment"
      ],
      correctAnswer: 2,
      explanation: "The commander's primary role is target acquisition, battlefield awareness, and coordinating the crew's actions.",
      category: "Main Controls"
    },
    {
      id: 9,
      question: "What type of armor does the T-72 use?",
      options: ["Steel only", "Composite armor", "Titanium plates", "Ceramic tiles"],
      correctAnswer: 1,
      explanation: "The T-72 uses composite armor, which combines different materials for better protection against various threats.",
      category: "Tank Overview"
    },
    {
      id: 10,
      question: "In an emergency evacuation, who exits the tank last?",
      options: ["Driver", "Gunner", "Commander", "Whoever is closest to exit"],
      correctAnswer: 2,
      explanation: "The commander exits last to ensure all crew members have safely evacuated before leaving the tank.",
      category: "Safety Procedures"
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    if (!showFeedback) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestion]: answerIndex
      });
      setShowFeedback(true);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowFeedback(false);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShowFeedback(false);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const getScorePercentage = () => {
    return Math.round((calculateScore() / questions.length) * 100);
  };

  const isAnswerCorrect = (questionIndex, answerIndex) => {
    return answerIndex === questions[questionIndex].correctAnswer;
  };

  const currentQ = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];
  const isCorrect = selectedAnswer === currentQ?.correctAnswer;

  // Results Screen
  if (showResults) {
    const score = calculateScore();
    const percentage = getScorePercentage();
    const passed = percentage >= 70;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          
          {/* Results Card */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
            
            {/* Icon */}
            <div className="mb-8">
              {passed ? (
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-6xl animate-bounce">
                  ✓
                </div>
              ) : (
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-6xl">
                  📚
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {passed ? 'Training Complete!' : 'Review Required'}
            </h1>
            
            {/* Score */}
            <div className="mb-8">
              <div className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                {percentage}%
              </div>
              <p className="text-xl text-gray-300">
                You answered <span className="text-cyan-400 font-bold">{score}</span> out of{' '}
                <span className="text-cyan-400 font-bold">{questions.length}</span> questions correctly
              </p>
            </div>

            {/* Pass/Fail Message */}
            {passed ? (
              <div className="backdrop-blur-xl bg-green-500/20 border border-green-500/50 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Certification Awarded</h3>
                <p className="text-gray-300">
                  You have successfully completed the T-72 Tank Training Module and demonstrated 
                  proficiency in tank operations, controls, and safety procedures.
                </p>
              </div>
            ) : (
              <div className="backdrop-blur-xl bg-orange-500/20 border border-orange-500/50 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">Additional Study Recommended</h3>
                <p className="text-gray-300">
                  A score of 70% or higher is required for certification. Please review the training 
                  materials and retake the assessment.
                </p>
              </div>
            )}

            {/* Performance Breakdown */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Performance by Category</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {['Tank Overview', 'Main Controls', 'Safety Procedures'].map((category) => {
                  const categoryQuestions = questions.filter(q => q.category === category);
                  const categoryScore = categoryQuestions.filter((q, idx) => 
                    selectedAnswers[questions.indexOf(q)] === q.correctAnswer
                  ).length;
                  const categoryPercentage = Math.round((categoryScore / categoryQuestions.length) * 100);
                  
                  return (
                    <div key={category} className="bg-white/5 rounded-xl p-4">
                      <h4 className="font-semibold mb-2">{category}</h4>
                      <div className="text-3xl font-bold text-cyan-400 mb-1">
                        {categoryPercentage}%
                      </div>
                      <p className="text-sm text-gray-400">
                        {categoryScore}/{categoryQuestions.length} correct
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRetakeQuiz}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 rounded-xl font-bold transition-all hover:scale-105 shadow-lg"
              >
                Retake Assessment
              </button>
              <button
                onClick={handleBackToHome}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold transition-all hover:scale-105"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MODULE 04: Knowledge Assessment
              </h1>
              <p className="text-sm text-gray-400">Test Your Understanding</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-cyan-400">
                {currentQuestion + 1}/{questions.length}
              </div>
              <p className="text-xs text-gray-400">Questions</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Question Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-8">
          
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-400/30">
              {currentQ.category}
            </span>
          </div>

          {/* Question */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
            {currentQ.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-4">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQ.correctAnswer;
              const showCorrect = showFeedback && isCorrectAnswer;
              const showIncorrect = showFeedback && isSelected && !isCorrectAnswer;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                    showCorrect
                      ? 'bg-green-500/20 border-green-500 scale-105'
                      : showIncorrect
                      ? 'bg-red-500/20 border-red-500'
                      : isSelected
                      ? 'bg-cyan-400/20 border-cyan-400'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-400/50'
                  } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-102'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${
                        showCorrect
                          ? 'bg-green-500 border-green-500 text-white'
                          : showIncorrect
                          ? 'bg-red-500 border-red-500 text-white'
                          : isSelected
                          ? 'bg-cyan-400 border-cyan-400 text-black'
                          : 'border-gray-500 text-gray-500'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-lg">{option}</span>
                    </div>
                    {showCorrect && <span className="text-2xl">✓</span>}
                    {showIncorrect && <span className="text-2xl">✗</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`mt-8 p-6 rounded-xl border-2 ${
              isCorrect 
                ? 'bg-green-500/10 border-green-500/50' 
                : 'bg-red-500/10 border-red-500/50'
            }`}>
              <div className="flex items-start space-x-4">
                <div className={`text-3xl ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect ? '✓' : 'ℹ️'}
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {isCorrect ? 'Correct!' : 'Not Quite'}
                  </h3>
                  <p className="text-gray-300">{currentQ.explanation}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentQuestion === 0
                ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                : 'bg-white/10 hover:bg-white/20 border border-white/20 hover:scale-105'
            }`}
          >
            <span>←</span>
            <span>Previous</span>
          </button>

          {showFeedback && (
            <button
              onClick={handleNext}
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              <span>{currentQuestion === questions.length - 1 ? 'View Results' : 'Next Question'}</span>
              <span>→</span>
            </button>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center space-x-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentQuestion
                  ? 'bg-cyan-400 scale-125'
                  : selectedAnswers[index] !== undefined
                  ? selectedAnswers[index] === questions[index].correctAnswer
                    ? 'bg-green-400'
                    : 'bg-red-400'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;