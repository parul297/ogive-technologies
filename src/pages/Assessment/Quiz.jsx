import React, { useState } from 'react';
import { CheckCircle2, XCircle, BarChart3, BookOpen, Zap, ArrowRight, RotateCcw, Award } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    {
      question: 'What is the main gun caliber of the T-72 tank?',
      options: ['105mm NATO standard', '120mm smoothbore', '125mm 2A46 smoothbore', '130mm experimental'],
      correctAnswer: 2,
      explanation:
        'The T-72 is equipped with a 125mm 2A46 smoothbore main gun with an advanced autoloader system. This caliber provides excellent firepower against contemporary armor while maintaining reasonable recoil forces. The 125mm gun fires multiple ammunition types including APFSDS, HEAT, and HE-Frag rounds.',
      category: 'Tank Overview',
      difficulty: 'Easy'
    },
    {
      question: 'How many crew members operate the T-72 tank?',
      options: ['Two: Driver and Commander', 'Three: Driver, Gunner, and Commander', 'Four: Driver, Gunner, Commander, and Loader', 'Five: Standard five-person configuration'],
      correctAnswer: 1,
      explanation:
        'The T-72 has a crew of three: Driver, Gunner, and Commander. This reduced crew size was made possible by the autoloader system which eliminates the need for a manual loader. The three-person crew reduces the turret profile, lowers production costs, and decreases crew workload through automated ammunition handling.',
      category: 'Crew & Operations',
      difficulty: 'Easy'
    },
    {
      question: 'What is the maximum road speed of the T-72?',
      options: ['45 km/h on rough terrain', '50 km/h average speed', '60 km/h maximum road speed', '70 km/h theoretical maximum'],
      correctAnswer: 2,
      explanation:
        'The T-72 can reach up to 60 km/h on prepared roads with optimal conditions. This speed is enabled by the V-46-6 diesel engine producing 840 horsepower. Cross-country speeds are significantly lower, typically 35-45 km/h depending on terrain conditions. The tank\'s excellent power-to-weight ratio of 20.2 hp/tonne enables rapid acceleration and tactical mobility.',
      category: 'Performance',
      difficulty: 'Easy'
    },
    {
      question: 'Which automotive plant was the primary manufacturer of the T-72?',
      options: ['Tagil Defense Plant', 'Uralvagonzavod in Yekaterinburg', 'Kirov Plant in Leningrad', 'Nizhny Tagil Industrial Facility'],
      correctAnswer: 1,
      explanation:
        'Uralvagonzavod (located in Yekaterinburg, Russia) was the primary Soviet manufacturer of the T-72. The plant was responsible for initial design and tooling under Chief Designer Leonid Kartsev. Production subsequently expanded to multiple Eastern Bloc nations including Czechoslovakia, Poland, and East Germany under licensing agreements.',
      category: 'History & Production',
      difficulty: 'Medium'
    },
    {
      question: 'What is the combat weight of a T-72 tank?',
      options: ['38 tonnes', '41.5 tonnes', '45 tonnes', '50 tonnes'],
      correctAnswer: 1,
      explanation:
        'The T-72 has a combat weight of 41.5 tonnes. This weight represents an optimal balance between armor protection and mobility. The weight is distributed across the suspension system via five large road wheels per side, providing excellent cross-country capability and low ground pressure suitable for various terrain conditions.',
      category: 'Tank Overview',
      difficulty: 'Medium'
    },
    {
      question: 'What type of armor construction does the T-72 utilize?',
      options: ['Homogeneous steel plates', 'Composite steel and ceramic material', 'Aluminum composite construction', 'Revolutionary steel-alloy laminate'],
      correctAnswer: 1,
      explanation:
        'The T-72 utilizes composite armor construction combining steel plates with ceramic materials. This composite approach provides superior protection-to-weight ratio compared to homogeneous steel armor. The armor configuration includes a heavily sloped glacis plate, increased turret thickness in the frontal arc, and spaced side skirts for protection against shaped-charge warheads.',
      category: 'Protection & Armor',
      difficulty: 'Medium'
    },
    {
      question: 'How many rounds per minute can the T-72 fire with its autoloader system?',
      options: ['2-3 rounds per minute', '4-5 rounds per minute', '6-8 rounds per minute', '10-12 rounds per minute'],
      correctAnswer: 2,
      explanation:
        'The T-72 autoloader system enables a sustained fire rate of 6-8 rounds per minute. This rate significantly exceeds manual-loading tanks of similar crew size. The autoloader reduces crew fatigue during extended engagements and increases engagement speed, providing significant tactical advantage in direct fire engagements.',
      category: 'Firepower',
      difficulty: 'Medium'
    },
    {
      question: 'What year did the T-72 enter service with the Soviet Red Army?',
      options: ['1970', '1972', '1973', '1975'],
      correctAnswer: 2,
      explanation:
        'The T-72 officially entered service with the Soviet Red Army in 1973. Initial deployment saw the tank distributed to elite mechanized divisions of the Soviet Western Group of Forces. The tank was immediately recognized for its autoloader innovation and mechanical reliability. Mass production began shortly after initial deployment.',
      category: 'History & Production',
      difficulty: 'Easy'
    },
    {
      question: 'What is the operational range of the T-72 on internal fuel?',
      options: ['350 km', '410 km', '460 km', '520 km'],
      correctAnswer: 2,
      explanation:
        'The T-72 has an operational range of approximately 460 kilometers on internal fuel with a full tank. This range enables strategic mobility across Central European terrain without refueling. Extended range operations are possible through the use of external fuel drums or jerry cans. Cross-country operations reduce range due to higher fuel consumption.',
      category: 'Performance',
      difficulty: 'Medium'
    },
    {
      question: 'Which fire control system is featured in the T-72B3 variant?',
      options: ['1PZ-5 analog computer', '1PZ-7 optical rangefinder', '1V528 digital fire control system', 'Sosna-U thermal system exclusively'],
      correctAnswer: 2,
      explanation:
        'The T-72B3 variant features the 1V528 integrated digital fire control system. This system represents a major modernization replacing analog components with digital computing. The digital system automatically calculates firing solutions accounting for range, ammunition type, atmospheric conditions, gun wear, and other ballistic factors. Integration of thermal imaging with the digital system significantly improves night firing capability.',
      category: 'Fire Control & Targeting',
      difficulty: 'Hard'
    },
    {
      question: 'What is the maximum elevation angle of the T-72 main gun?',
      options: ['+8 degrees', '+10 degrees', '+14 degrees', '+18 degrees'],
      correctAnswer: 2,
      explanation:
        'The T-72 main gun can achieve a maximum elevation of +14 degrees and a depression angle of -6 degrees. This provides adequate elevation for most tactical situations while the depression angle enables hull-down defensive positioning. The two-axis stabilization system maintains accurate aiming despite hull movement during elevation changes.',
      category: 'Firepower',
      difficulty: 'Hard'
    },
    {
      question: 'What does NBC protection stand for in tank operations?',
      options: ['Network Battle Computer', 'Nuclear, Biological, and Chemical protection', 'Non-Ballistic Capability', 'Neutral Buffer Contact'],
      correctAnswer: 1,
      explanation:
        'NBC stands for Nuclear, Biological, and Chemical protection. The T-72 includes an integrated NBC filtration system that removes radioactive particles, chemical agents, and biological contaminants from air entering the tank. The system creates a positive internal pressure preventing external contamination from entering through openings. All crew members have protective equipment and masks available.',
      category: 'Safety & Protection',
      difficulty: 'Easy'
    },
    {
      question: 'How many T-72 tanks have been produced globally?',
      options: ['25,000 units', '35,000 units', '45,000+ units', '60,000+ units'],
      correctAnswer: 2,
      explanation:
        'Over 47,000 T-72 tanks have been produced globally, making it the most widely produced main battle tank in history. Production occurred in the Soviet Union and multiple Eastern Bloc nations under licensing agreements including Czechoslovakia, Poland, Hungary, and East Germany. The high production volume demonstrates the design\'s fundamental soundness and manufacturing efficiency.',
      category: 'History & Production',
      difficulty: 'Medium'
    }
  ];

  const handleAnswerSelect = (index) => {
    if (showFeedback) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
    setShowFeedback(true);
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

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShowFeedback(false);
  };

  const score = Object.keys(selectedAnswers).filter(
    (idx) =>
      selectedAnswers[idx] === questions[idx]?.correctAnswer
  ).length;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    let resultLevel = 'Needs Improvement';
    let resultColor = 'red';
    let resultMessage = 'Continue studying the material and retake the assessment.';

    if (percentage >= 90) {
      resultLevel = 'Expert';
      resultColor = 'green';
      resultMessage = 'Outstanding mastery of T-72 systems and operations!';
    } else if (percentage >= 80) {
      resultLevel = 'Proficient';
      resultColor = 'blue';
      resultMessage = 'Strong understanding demonstrated. Review any weak areas.';
    } else if (percentage >= 70) {
      resultLevel = 'Competent';
      resultColor = 'yellow';
      resultMessage = 'Good foundation established. Additional study recommended.';
    } else if (percentage >= 60) {
      resultLevel = 'Developing';
      resultColor = 'orange';
      resultMessage = 'Basic understanding achieved. Continued study essential.';
    }

    const colorMap = {
      red: 'from-red-50 to-red-50 border-red-200',
      orange: 'from-orange-50 to-orange-50 border-orange-200',
      yellow: 'from-amber-50 to-amber-50 border-amber-200',
      blue: 'from-blue-50 to-blue-50 border-blue-200',
      green: 'from-green-50 to-green-50 border-green-200'
    };

    const iconColor = {
      red: 'text-red-600',
      orange: 'text-orange-600',
      yellow: 'text-amber-600',
      blue: 'text-blue-600',
      green: 'text-green-600'
    };

    return (
      <div style={{ backgroundColor: '#f8f9fb' }} className="min-h-screen py-12 px-8">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200 px-8 py-10 rounded-t-xl">
            <div className="flex items-center gap-4">
              <Award className="text-blue-600" size={40} />
              <div>
                <h1 className="text-4xl font-bold text-slate-900">Assessment Results</h1>
                <p className="text-slate-600 text-lg mt-1">Your T-72 Knowledge Evaluation</p>
              </div>
            </div>
          </div>

          {/* RESULTS CARD */}
          <div className={`bg-gradient-to-br ${colorMap[resultColor]} border-2 border-slate-200 rounded-b-xl p-12 text-center shadow-lg`}>
            <div className="mb-8">
              <div className="inline-block bg-white rounded-full p-8 shadow-lg mb-8">
                <div className={`text-7xl font-bold ${iconColor[resultColor]}`}>
                  {percentage}%
                </div>
              </div>
            </div>

            <h2 className={`text-4xl font-bold mb-3 ${resultColor === 'red' ? 'text-red-900' :
                resultColor === 'orange' ? 'text-orange-900' :
                  resultColor === 'yellow' ? 'text-amber-900' :
                    resultColor === 'blue' ? 'text-blue-900' :
                      'text-green-900'
              }`}>
              {resultLevel} Level
            </h2>

            <p className={`text-xl mb-8 ${resultColor === 'red' ? 'text-red-800' :
                resultColor === 'orange' ? 'text-orange-800' :
                  resultColor === 'yellow' ? 'text-amber-800' :
                    resultColor === 'blue' ? 'text-blue-800' :
                      'text-green-800'
              }`}>
              {resultMessage}
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block shadow-md">
              <p className="text-slate-700 text-lg font-semibold">
                You answered <span className="text-blue-600 font-bold text-2xl">{score}</span> out of <span className="text-blue-600 font-bold text-2xl">{questions.length}</span> questions correctly
              </p>
            </div>

            {/* RESULTS BY CATEGORY */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Performance by Category</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['Tank Overview', 'Crew & Operations', 'Performance', 'History & Production', 'Protection & Armor', 'Firepower', 'Fire Control & Targeting', 'Safety & Protection'].map((category) => {
                  const categoryQuestions = questions.filter(q => q.category === category);
                  const categoryScore = categoryQuestions.filter(q =>
                    selectedAnswers[questions.indexOf(q)] === q.correctAnswer
                  ).length;
                  const categoryPercent = Math.round((categoryScore / categoryQuestions.length) * 100);

                  return (
                    <div key={category} className="bg-white rounded-lg p-4 text-left border border-slate-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-900">{category}</span>
                        <span className="font-bold text-blue-600">{categoryPercent}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${categoryPercent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleRetake}
              className="px-8 py-4 rounded-lg font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 justify-center mx-auto"
            >
              <RotateCcw size={24} />
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const selected = selectedAnswers[currentQuestion];
  const isAnswerCorrect = selected === currentQ.correctAnswer;
  const answeredQuestions = Object.keys(selectedAnswers).length;
  const progressPercent = Math.round(((currentQuestion + (showFeedback ? 1 : 0)) / questions.length) * 100);

  return (
    <div style={{ backgroundColor: '#f8f9fb' }} className="min-h-screen py-12 px-8">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-6 mb-8 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <BookOpen className="text-blue-600" size={32} />
              <div>
                <h1 className="text-3xl font-bold text-slate-900">T-72 Knowledge Assessment</h1>
                <p className="text-slate-600">Question {currentQuestion + 1} of {questions.length}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{answeredQuestions}/{questions.length}</div>
              <p className="text-sm text-slate-600">Completed</p>
            </div>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* QUESTION CARD */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg mb-8">
          {/* CATEGORY & DIFFICULTY */}
          <div className="bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200 px-8 py-4 flex items-center justify-between">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              {currentQ.category}
            </span>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${currentQ.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                currentQ.difficulty === 'Medium' ? 'bg-amber-100 text-amber-800' :
                  'bg-red-100 text-red-800'
              }`}>
              {currentQ.difficulty}
            </span>
          </div>

          {/* QUESTION */}
          <div className="px-8 py-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              {currentQ.question}
            </h2>

            {/* OPTIONS */}
            <div className="space-y-3 mb-8">
              {currentQ.options.map((option, index) => {
                const isSelected = selected === index;
                const isCorrect = index === currentQ.correctAnswer;
                const showCorrect = showFeedback && isCorrect;
                const showIncorrect = showFeedback && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                    className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all font-medium ${showCorrect
                        ? 'bg-green-50 border-green-400 text-slate-900 shadow-md'
                        : showIncorrect
                          ? 'bg-red-50 border-red-400 text-slate-900 shadow-md'
                          : isSelected
                            ? 'bg-blue-50 border-blue-400 text-slate-900 shadow-md'
                            : 'bg-white border-slate-300 text-slate-900 hover:border-blue-300 hover:bg-blue-50'
                      } ${!showFeedback ? 'cursor-pointer hover:shadow-md' : 'cursor-not-allowed'}`}
                  >
                    <div className="flex items-center gap-3">
                      {showCorrect && <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />}
                      {showIncorrect && <XCircle className="text-red-600 flex-shrink-0" size={24} />}
                      <span>{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* FEEDBACK */}
            {showFeedback && (
              <div className={`p-6 rounded-lg border-2 ${isAnswerCorrect
                  ? 'bg-green-50 border-green-300'
                  : 'bg-red-50 border-red-300'
                }`}>
                <h4 className={`font-bold text-lg mb-3 flex items-center gap-2 ${isAnswerCorrect ? 'text-green-900' : 'text-red-900'
                  }`}>
                  {isAnswerCorrect ? (
                    <>
                      <CheckCircle2 size={24} />
                      Correct!
                    </>
                  ) : (
                    <>
                      <XCircle size={24} />
                      Incorrect
                    </>
                  )}
                </h4>
                <p className={isAnswerCorrect ? 'text-green-800' : 'text-red-800'}>
                  {currentQ.explanation}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${currentQuestion === 0
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-white border border-slate-300 text-slate-900 hover:bg-slate-50 hover:shadow-md'
              }`}
          >
            ← Previous
          </button>

          {showFeedback && (
            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              {currentQuestion === questions.length - 1 ? (
                <>
                  <BarChart3 size={20} />
                  View Results
                </>
              ) : (
                <>
                  Next
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;