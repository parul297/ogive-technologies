import React, { useState } from 'react';
import { CheckCircle2, Clock, Zap, BookOpen, Target, Flame, BarChart3, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

const ProgressTracker = () => {
  const [expandedModule, setExpandedModule] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);

  const overallProgress = {
    totalModules: 4,
    completedModules: Math.floor(completedLessons.length / 3),
    totalLessons: 14,
    completedLessons: completedLessons.length,
    totalTimeSpent: Math.round(completedLessons.length * 6.5) + ' min',
    lastAccessed: 'Just now',
    overallCompletion: Math.round((completedLessons.length / 14) * 100)
  };

  const moduleProgress = [
    {
      id: 'tankOverview',
      title: 'Tank Overview & History',
      icon: BookOpen,
      color: 'blue',
      description: 'Learn about T-72 design, history, specifications, and technical capabilities',
      progress: Math.round(completedLessons.filter(l => l >= 1 && l <= 4).length / 4 * 100),
      lessons: [
        { id: 1, title: 'History & Development', completed: completedLessons.includes(1), duration: '8 min', description: 'Complete history from 1973 to present with timeline and evolution' },
        { id: 2, title: 'Technical Specifications', completed: completedLessons.includes(2), duration: '6 min', description: 'Detailed specifications covering dimensions, weight, powerplant, and performance' },
        { id: 3, title: 'Variants & Upgrades', completed: completedLessons.includes(3), duration: '7 min', description: 'Overview of T-72A, T-72B, T-72B3 and modernization programs' },
        { id: 4, title: 'Capabilities & Legacy', completed: completedLessons.includes(4), duration: '4 min', description: 'Combat capabilities, firepower, and global impact assessment' }
      ]
    },
    {
      id: 'controls',
      title: 'Crew Controls & Stations',
      icon: Target,
      color: 'purple',
      description: 'Interactive training on crew stations and operational controls',
      progress: Math.round(completedLessons.filter(l => l >= 5 && l <= 8).length / 4 * 100),
      lessons: [
        { id: 5, title: "Driver's Station", completed: completedLessons.includes(5), duration: '8 min', description: 'Steering, throttle, gear selection, and vehicle mobility controls' },
        { id: 6, title: "Gunner's Station", completed: completedLessons.includes(6), duration: '8 min', description: 'Main gun, fire control systems, ammunition selection, and targeting' },
        { id: 7, title: "Commander's Station", completed: completedLessons.includes(7), duration: '7 min', description: 'Panoramic sight, thermal imaging, communication systems, and awareness' },
        { id: 8, title: 'Operating Procedures', completed: completedLessons.includes(8), duration: '7 min', description: 'Crew coordination, standard operating procedures, and communication' }
      ]
    },
    {
      id: 'safety',
      title: 'Safety & Emergency Procedures',
      icon: Flame,
      color: 'red',
      description: 'Critical safety training for crew protection and emergency response',
      progress: Math.round(completedLessons.filter(l => l >= 9 && l <= 13).length / 5 * 100),
      lessons: [
        { id: 9, title: 'Pre-Operation Safety Checks', completed: completedLessons.includes(9), duration: '5 min', description: 'Complete pre-operation checklist and equipment verification procedures' },
        { id: 10, title: 'Fire Safety & Suppression', completed: completedLessons.includes(10), duration: '4 min', description: 'Fire suppression systems, response procedures, and emergency protocols' },
        { id: 11, title: 'Emergency Evacuation', completed: completedLessons.includes(11), duration: '4 min', description: 'Rapid evacuation procedures, hatch operation, and rally point procedures' },
        { id: 12, title: 'NBC Protection', completed: completedLessons.includes(12), duration: '4 min', description: 'Nuclear, biological, and chemical defense and contamination control' },
        { id: 13, title: 'Ammunition Safety', completed: completedLessons.includes(13), duration: '3 min', description: 'Safe ammunition handling, storage, and hazard awareness' }
      ]
    },
    {
      id: 'assessment',
      title: 'Knowledge Assessment',
      icon: Zap,
      color: 'green',
      description: 'Comprehensive quiz to evaluate understanding of all training modules',
      progress: completedLessons.includes(14) ? 100 : 0,
      lessons: [
        { id: 14, title: 'Final Knowledge Assessment', completed: completedLessons.includes(14), duration: '15 min', description: 'Complete 12-question assessment covering all T-72 systems and operations' }
      ]
    }
  ];

  const toggleLesson = (lessonId) => {
    setCompletedLessons(prev =>
      prev.includes(lessonId)
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-50 to-blue-50 border-blue-200 bg-blue-100/20 text-blue-900',
      purple: 'from-purple-50 to-purple-50 border-purple-200 bg-purple-100/20 text-purple-900',
      red: 'from-red-50 to-red-50 border-red-200 bg-red-100/20 text-red-900',
      green: 'from-green-50 to-green-50 border-green-200 bg-green-100/20 text-green-900'
    };
    return colors[color];
  };

  const getIconColor = (color) => {
    const colors = {
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      red: 'text-red-600',
      green: 'text-green-600'
    };
    return colors[color];
  };

  const getProgressColor = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      red: 'from-red-500 to-red-600',
      green: 'from-green-500 to-green-600'
    };
    return colors[color];
  };

  return (
    <div style={{ backgroundColor: '#f8f9fb' }} className="min-h-screen">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200 px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <BarChart3 size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Training Progress Tracker</h1>
              <p className="text-slate-600 text-lg mt-1">Monitor your learning journey and course completion</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-12 max-w-7xl mx-auto">
        {/* OVERALL STATS */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Overall Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                label: 'Total Completion',
                value: `${overallProgress.overallCompletion}%`,
                icon: Trophy,
                color: 'blue'
              },
              {
                label: 'Modules Completed',
                value: `${overallProgress.completedModules}/${overallProgress.totalModules}`,
                icon: BookOpen,
                color: 'purple'
              },
              {
                label: 'Lessons Completed',
                value: `${overallProgress.completedLessons}/${overallProgress.totalLessons}`,
                icon: CheckCircle2,
                color: 'green'
              },
              {
                label: 'Time Invested',
                value: overallProgress.totalTimeSpent,
                icon: Clock,
                color: 'orange'
              }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${getColorClasses(stat.color)} border-2 rounded-xl p-6 shadow-md hover:shadow-lg transition-all`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={getIconColor(stat.color)} size={32} />
                    {stat.color === 'blue' && (
                      <div className="text-right">
                        <div className="w-16 h-16 rounded-full border-4 border-blue-200 flex items-center justify-center bg-white">
                          <span className="text-2xl font-bold text-blue-600">{overallProgress.overallCompletion}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* OVERALL PROGRESS BAR */}
          <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-slate-900">Training Completion</h3>
              <span className="text-2xl font-bold text-blue-600">{overallProgress.overallCompletion}% Complete</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                style={{ width: `${overallProgress.overallCompletion}%` }}
              >
                {overallProgress.overallCompletion > 10 && (
                  <span className="text-xs font-bold text-white">{overallProgress.overallCompletion}%</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* MODULE BREAKDOWN */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Modules & Lessons</h2>
          <div className="space-y-4">
            {moduleProgress.map((module) => {
              const Icon = module.icon;
              const isExpanded = expandedModule === module.id;

              return (
                <div
                  key={module.id}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  {/* MODULE HEADER */}
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-200"
                  >
                    <div className="flex items-center gap-4 flex-1 text-left">
                      <div className={`p-3 rounded-lg ${getColorClasses(module.color).split(' ').slice(0, 2).join(' ')} bg-opacity-20`}>
                        <Icon className={getIconColor(module.color)} size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900">{module.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{module.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 ml-4">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-slate-900">{module.progress}%</p>
                        <p className="text-xs text-slate-600">{module.lessons.filter(l => l.completed).length}/{module.lessons.length}</p>
                      </div>
                      <div className="text-slate-400">
                        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                      </div>
                    </div>
                  </button>

                  {/* PROGRESS BAR */}
                  <div className="px-6 py-3 bg-slate-50 border-b border-slate-200">
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className={`bg-gradient-to-r ${getProgressColor(module.color)} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* LESSONS LIST */}
                  {isExpanded && (
                    <div className="px-6 py-6 space-y-3 bg-gradient-to-b from-slate-50 to-white">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          onClick={() => toggleLesson(lesson.id)}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${lesson.completed
                              ? `border-green-300 bg-green-50`
                              : `border-slate-200 bg-white hover:border-slate-300`
                            }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                {lesson.completed ? (
                                  <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
                                ) : (
                                  <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex-shrink-0" />
                                )}
                                <h4 className="font-semibold text-slate-900">{lesson.title}</h4>
                              </div>
                              <p className="text-sm text-slate-600 ml-9">{lesson.description}</p>
                            </div>
                            <span className={`text-sm font-semibold whitespace-nowrap ml-4 px-3 py-1 rounded-full ${lesson.completed
                                ? 'bg-green-200 text-green-800'
                                : 'bg-slate-200 text-slate-700'
                              }`}>
                              {lesson.duration}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* LEARNING SUMMARY */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* COMPLETION SUMMARY */}
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Completion Summary</h3>
            <div className="space-y-4">
              {moduleProgress.map((module, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-900">{module.title}</span>
                    <span className="text-lg font-bold text-slate-900">{module.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${getProgressColor(module.color)} h-2 rounded-full`}
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="bg-gradient-to-br from-green-50 to-slate-50 border border-green-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Milestones & Achievements</h3>
            <div className="space-y-3">
              {overallProgress.completedLessons >= 4 && (
                <div className="bg-white rounded-lg p-4 border border-green-300 flex items-center gap-3">
                  <div className="bg-green-200 rounded-full p-2">
                    <Trophy size={24} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Tank Overview Complete</p>
                    <p className="text-sm text-slate-600">History and specifications mastered</p>
                  </div>
                </div>
              )}
              {overallProgress.completedLessons >= 8 && (
                <div className="bg-white rounded-lg p-4 border border-green-300 flex items-center gap-3">
                  <div className="bg-green-200 rounded-full p-2">
                    <Trophy size={24} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Crew Controls Mastered</p>
                    <p className="text-sm text-slate-600">All crew stations training completed</p>
                  </div>
                </div>
              )}
              {overallProgress.completedLessons >= 13 && (
                <div className="bg-white rounded-lg p-4 border border-green-300 flex items-center gap-3">
                  <div className="bg-green-200 rounded-full p-2">
                    <Trophy size={24} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Safety Training Complete</p>
                    <p className="text-sm text-slate-600">All emergency procedures covered</p>
                  </div>
                </div>
              )}
              {overallProgress.completedLessons === 14 && (
                <div className="bg-white rounded-lg p-4 border border-green-300 flex items-center gap-3">
                  <div className="bg-green-200 rounded-full p-2">
                    <Trophy size={24} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Course Mastery Achieved!</p>
                    <p className="text-sm text-slate-600">Complete T-72 training certification</p>
                  </div>
                </div>
              )}
              {overallProgress.completedLessons < 4 && (
                <div className="bg-white rounded-lg p-4 border border-slate-300 flex items-center gap-3 opacity-50">
                  <div className="bg-slate-200 rounded-full p-2">
                    <Trophy size={24} className="text-slate-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Tank Overview</p>
                    <p className="text-sm text-slate-600">Complete 4 lessons to unlock</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* NEXT STEPS */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Next Steps in Your Training</h3>
          <p className="text-blue-100 mb-6">
            Continue your learning journey to complete all modules and achieve certification.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="text-sm font-semibold text-blue-100 mb-2">Currently Learning</p>
              <p className="text-lg text-white font-bold">
                {moduleProgress[0].lessons.filter(l => !l.completed).length > 0
                  ? `${moduleProgress[0].title}`
                  : moduleProgress[1].lessons.filter(l => !l.completed).length > 0
                    ? `${moduleProgress[1].title}`
                    : moduleProgress[2].lessons.filter(l => !l.completed).length > 0
                      ? `${moduleProgress[2].title}`
                      : 'Final Assessment'
                }
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="text-sm font-semibold text-blue-100 mb-2">Lessons Remaining</p>
              <p className="text-lg text-white font-bold">
                {14 - completedLessons.length} lessons
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;