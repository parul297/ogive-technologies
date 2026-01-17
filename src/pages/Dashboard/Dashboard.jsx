import React, { useState } from 'react';
import {
  BookOpen,
  Settings,
  ShieldCheck,
  ClipboardCheck,
  Layers,
  CheckCircle,
  Clock,
  Timer,
  ChevronRight,
  Trophy,
  Target,
  Zap,
  Award,
  TrendingUp,
  Calendar,
  Play,
  Star,
  Users,
  BarChart3,
  Flame
} from 'lucide-react';

const Dashboard = ({ onNavigate }) => {
  const [hoveredModule, setHoveredModule] = useState(null);

  const trainingModules = [
    {
      id: 'tankOverview',
      title: 'Tank Overview & History',
      description: 'Comprehensive study of T-72 design philosophy, development timeline, technical specifications, and global operational legacy',
      progress: 0,
      lessons: 4,
      duration: '25 min',
      icon: BookOpen,
      color: 'blue',
      difficulty: 'Beginner',
      topics: ['History & Development', 'Technical Specifications', 'Variants & Upgrades', 'Capabilities Assessment']
    },
    {
      id: 'controls',
      title: 'Crew Controls & Stations',
      description: 'Detailed interactive training covering all crew positions, control systems, and operational procedures for effective tank operations',
      progress: 0,
      lessons: 4,
      duration: '30 min',
      icon: Settings,
      color: 'purple',
      difficulty: 'Intermediate',
      topics: ["Driver's Station", "Gunner's Station", "Commander's Station", 'Operating Procedures']
    },
    {
      id: 'safety',
      title: 'Safety & Emergency Procedures',
      description: 'Critical safety protocols, emergency response procedures, and crew protection measures essential for safe tank operations',
      progress: 0,
      lessons: 5,
      duration: '20 min',
      icon: ShieldCheck,
      color: 'red',
      difficulty: 'Critical',
      topics: ['Pre-Operation Checks', 'Fire Safety', 'Emergency Evacuation', 'NBC Protection', 'Ammunition Safety']
    },
    {
      id: 'assessment',
      title: 'Knowledge Assessment',
      description: 'Comprehensive evaluation to test understanding of all training modules and validate operational readiness for T-72 certification',
      progress: 0,
      lessons: 1,
      duration: '15 min',
      icon: ClipboardCheck,
      color: 'green',
      difficulty: 'Advanced',
      topics: ['Final Knowledge Assessment']
    }
  ];

  const quickStats = [
    {
      label: 'Total Modules',
      value: '4',
      icon: Layers,
      color: 'blue',
      description: 'Comprehensive training programs'
    },
    {
      label: 'Completed',
      value: '0',
      icon: CheckCircle,
      color: 'green',
      description: 'Modules finished'
    },
    {
      label: 'In Progress',
      value: '0',
      icon: Clock,
      color: 'orange',
      description: 'Currently learning'
    },
    {
      label: 'Total Time',
      value: '90 min',
      icon: Timer,
      color: 'purple',
      description: 'Estimated completion'
    }
  ];

  const learningPath = [
    {
      step: 1,
      title: 'Foundation',
      module: 'Tank Overview & History',
      description: 'Build core knowledge of the T-72 platform',
      status: 'ready'
    },
    {
      step: 2,
      title: 'Operations',
      module: 'Crew Controls & Stations',
      description: 'Master operational controls and procedures',
      status: 'locked'
    },
    {
      step: 3,
      title: 'Safety',
      module: 'Safety & Emergency Procedures',
      description: 'Learn critical safety and emergency protocols',
      status: 'locked'
    },
    {
      step: 4,
      title: 'Certification',
      module: 'Knowledge Assessment',
      description: 'Validate your expertise and earn certification',
      status: 'locked'
    }
  ];

  const achievements = [
    {
      title: 'First Steps',
      description: 'Complete your first training module',
      icon: Star,
      unlocked: false,
      color: 'blue'
    },
    {
      title: 'Safety First',
      description: 'Master all safety procedures',
      icon: ShieldCheck,
      unlocked: false,
      color: 'red'
    },
    {
      title: 'Expert Operator',
      description: 'Complete all control training',
      icon: Settings,
      unlocked: false,
      color: 'purple'
    },
    {
      title: 'Certified',
      description: 'Pass the final assessment',
      icon: Trophy,
      unlocked: false,
      color: 'green'
    }
  ];

  const recentActivity = [
    {
      action: 'Started Training',
      module: 'T-72 Training Program',
      time: 'Just now',
      icon: Play
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-900',
      purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-900',
      red: 'from-red-50 to-red-100 border-red-200 text-red-900',
      green: 'from-green-50 to-green-100 border-green-200 text-green-900',
      orange: 'from-orange-50 to-orange-100 border-orange-200 text-orange-900'
    };
    return colors[color] || colors.blue;
  };

  const getIconColor = (color) => {
    const colors = {
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      red: 'text-red-600',
      green: 'text-green-600',
      orange: 'text-orange-600'
    };
    return colors[color] || 'text-blue-600';
  };

  const getDifficultyBadge = (difficulty) => {
    const badges = {
      'Beginner': 'bg-green-100 text-green-800 border-green-200',
      'Intermediate': 'bg-blue-100 text-blue-800 border-blue-200',
      'Advanced': 'bg-purple-100 text-purple-800 border-purple-200',
      'Critical': 'bg-red-100 text-red-800 border-red-200'
    };
    return badges[difficulty] || badges.Beginner;
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
              <h1 className="text-4xl font-bold text-slate-900">Training Dashboard</h1>
              <p className="text-slate-600 text-lg mt-1">Structured learning path for T-72 operational excellence</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-12 max-w-7xl mx-auto">
        {/* QUICK STATS */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Training Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${getColorClasses(stat.color)} border-2 rounded-xl p-6 shadow-md hover:shadow-lg transition-all`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className={getIconColor(stat.color)} size={28} />
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
                  <p className="text-xs text-slate-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* WELCOME BANNER */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-3">Welcome to T-72 Training</h2>
              <p className="text-blue-100 text-lg mb-6 max-w-3xl">
                This comprehensive training program will guide you through all aspects of T-72 tank operations, from basic specifications to advanced crew procedures and critical safety protocols.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('tankOverview')}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <Play size={20} />
                  Start Training
                </button>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all border-2 border-blue-400 flex items-center gap-2">
                  <Target size={20} />
                  View Progress
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-full p-6 border-4 border-white/20">
                <Trophy size={64} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* LEARNING PATH */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Recommended Learning Path</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {learningPath.map((step, idx) => (
              <div
                key={idx}
                className={`bg-white border-2 rounded-xl p-6 shadow-md transition-all ${step.status === 'ready'
                    ? 'border-blue-300 hover:shadow-lg cursor-pointer'
                    : 'border-slate-200 opacity-60'
                  }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${step.status === 'ready'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-500'
                      }`}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-sm font-semibold text-blue-600 mb-2">{step.module}</p>
                <p className="text-sm text-slate-600">{step.description}</p>
                {step.status === 'locked' && (
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <Clock size={14} />
                    <span>Complete previous steps to unlock</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* TRAINING MODULES */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Training Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingModules.map((module) => {
              const Icon = module.icon;
              const isHovered = hoveredModule === module.id;

              return (
                <div
                  key={module.id}
                  className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => onNavigate(module.id)}
                  onMouseEnter={() => setHoveredModule(module.id)}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  {/* Module Header */}
                  <div className={`bg-gradient-to-r ${getColorClasses(module.color)} border-b-2 border-slate-200 p-6`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/80 p-2 rounded-lg">
                          <Icon className={getIconColor(module.color)} size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{module.title}</h3>
                      </div>
                      <ChevronRight
                        className={`transition-transform ${isHovered ? 'translate-x-1' : ''}`}
                        size={24}
                        color="#64748b"
                      />
                    </div>
                    <p className="text-sm text-slate-700">{module.description}</p>
                  </div>

                  {/* Module Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <BookOpen size={16} />
                          {module.lessons} lessons
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {module.duration}
                        </span>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getDifficultyBadge(module.difficulty)}`}>
                        {module.difficulty}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-slate-700">Progress</span>
                        <span className="text-xs font-bold text-slate-900">{module.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${module.color === 'blue' ? 'from-blue-500 to-blue-600' :
                              module.color === 'purple' ? 'from-purple-500 to-purple-600' :
                                module.color === 'red' ? 'from-red-500 to-red-600' :
                                  'from-green-500 to-green-600'
                            } h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${module.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Topics Covered</p>
                      {module.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ACHIEVEMENTS & ACTIVITY */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* ACHIEVEMENTS */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200 p-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Trophy className="text-yellow-600" size={28} />
                Achievements
              </h3>
            </div>
            <div className="p-6 space-y-3">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={idx}
                    className={`rounded-lg p-4 border-2 transition-all ${achievement.unlocked
                        ? `bg-gradient-to-r ${getColorClasses(achievement.color)} border-${achievement.color}-300`
                        : 'bg-slate-50 border-slate-200 opacity-50'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${achievement.unlocked
                            ? 'bg-white/80'
                            : 'bg-slate-200'
                          }`}
                      >
                        <Icon
                          className={achievement.unlocked ? getIconColor(achievement.color) : 'text-slate-500'}
                          size={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900">{achievement.title}</h4>
                        <p className="text-sm text-slate-600">{achievement.description}</p>
                      </div>
                      {achievement.unlocked && (
                        <CheckCircle className="text-green-600" size={24} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200 p-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <TrendingUp className="text-blue-600" size={28} />
                Recent Activity
              </h3>
            </div>
            <div className="p-6">
              {recentActivity.map((activity, idx) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Icon className="text-blue-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">{activity.action}</h4>
                        <p className="text-sm text-slate-600">{activity.module}</p>
                        <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">Complete your first lesson to see more activity</p>
              </div>
            </div>
          </div>
        </div>

        {/* MOTIVATION BANNER */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Begin Your Journey?</h3>
              <p className="text-purple-100 mb-4">
                Start with Tank Overview to build a strong foundation in T-72 operations.
              </p>
              <button
                onClick={() => onNavigate('tankOverview')}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-md flex items-center gap-2"
              >
                <Zap size={20} />
                Begin Training Now
              </button>
            </div>
            <div className="hidden md:block">
              <Flame size={80} className="text-white opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;