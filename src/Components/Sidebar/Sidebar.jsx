import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import { sidebarData } from './SidebarData';
import {
  Trophy,
  Target,
  Zap,
  ChevronRight,
  Award,
  CheckCircle,
  Clock,
  BarChart3,
  Shield,
  Flame,
  Star
} from 'lucide-react';

const Sidebar = ({ activeSection, onSectionChange }) => {
  const [showProgress, setShowProgress] = useState(true);

  // Calculate overall progress
  const totalModules = sidebarData.length;
  const completedModules = 0; // This would be dynamic in real implementation
  const overallProgress = Math.round((completedModules / totalModules) * 100);

  const quickActions = [
    {
      id: 'continue',
      label: 'Continue Learning',
      icon: Zap,
      color: 'blue',
      action: () => onSectionChange('tankOverview')
    },
    {
      id: 'progress',
      label: 'View Progress',
      icon: BarChart3,
      color: 'purple',
      action: () => onSectionChange('progress')
    }
  ];

  const achievements = [
    { icon: Trophy, unlocked: false, color: 'yellow' },
    { icon: Target, unlocked: false, color: 'blue' },
    { icon: Shield, unlocked: false, color: 'red' },
    { icon: Star, unlocked: false, color: 'green' }
  ];

  return (
    <div
      className="w-80 flex flex-col h-full overflow-y-auto border-r"
      style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}
    >
      {/* HEADER */}
      <div className="p-6 border-b border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Shield size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              T-72 Training
            </h1>
            <p className="text-xs text-slate-600">
              Operational Excellence
            </p>
          </div>
        </div>

        {/* Progress Summary */}
        {showProgress && (
          <div className="bg-white rounded-lg p-4 mt-4 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700">Overall Progress</span>
              <span className="text-lg font-bold text-blue-600">{overallProgress}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <CheckCircle size={12} className="text-green-600" />
                {completedModules} completed
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} className="text-orange-600" />
                {totalModules - completedModules} remaining
              </span>
            </div>
          </div>
        )}
      </div>

      {/* QUICK ACTIONS */}
      <div className="px-4 py-4 border-b border-slate-200 bg-gradient-to-br from-blue-50/30 to-slate-50">
        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Quick Actions</h3>
        <div className="space-y-2">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={action.action}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all hover:shadow-md ${action.color === 'blue'
                    ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300'
                    : 'bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200 hover:border-purple-300'
                  }`}
              >
                <Icon
                  size={18}
                  className={action.color === 'blue' ? 'text-blue-600' : 'text-purple-600'}
                />
                <span className={`text-sm font-semibold flex-1 text-left ${action.color === 'blue' ? 'text-blue-900' : 'text-purple-900'
                  }`}>
                  {action.label}
                </span>
                <ChevronRight
                  size={16}
                  className={action.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-3 py-4">
        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 px-3">Training Modules</h3>
        <div className="space-y-1">
          {sidebarData.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              activeSection={activeSection}
              onSelect={onSectionChange}
            />
          ))}
        </div>
      </nav>

      {/* ACHIEVEMENTS PREVIEW */}
      <div className="px-4 py-4 border-t border-slate-200 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Achievements</h3>
          <span className="text-xs text-slate-600">{achievements.filter(a => a.unlocked).length}/{achievements.length}</span>
        </div>
        <div className="flex gap-2">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div
                key={idx}
                className={`flex-1 aspect-square rounded-lg border-2 flex items-center justify-center transition-all ${achievement.unlocked
                    ? `bg-gradient-to-br ${achievement.color === 'yellow' ? 'from-yellow-100 to-yellow-200 border-yellow-300' :
                      achievement.color === 'blue' ? 'from-blue-100 to-blue-200 border-blue-300' :
                        achievement.color === 'red' ? 'from-red-100 to-red-200 border-red-300' :
                          'from-green-100 to-green-200 border-green-300'
                    }`
                    : 'bg-slate-100 border-slate-200 opacity-40'
                  }`}
              >
                <Icon
                  size={20}
                  className={
                    achievement.unlocked
                      ? achievement.color === 'yellow' ? 'text-yellow-600' :
                        achievement.color === 'blue' ? 'text-blue-600' :
                          achievement.color === 'red' ? 'text-red-600' :
                            'text-green-600'
                      : 'text-slate-400'
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* MOTIVATIONAL SECTION */}
      <div className="px-4 py-4 border-t border-slate-200 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="text-center">
          <Flame size={32} className="text-white mx-auto mb-2 opacity-80" />
          <p className="text-white font-bold text-sm mb-1">Keep Going!</p>
          <p className="text-blue-100 text-xs mb-3">
            Complete all modules to earn your certification
          </p>
          <div className="bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm border border-white/30">
            <div className="flex items-center justify-center gap-2">
              <Award size={16} className="text-yellow-300" />
              <span className="text-white text-xs font-semibold">T-72 Expert Badge</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-4 text-center text-xs border-t bg-slate-50" style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}>
        <div className="mb-2">
          <p className="font-semibold text-slate-700">Military Training Systems</p>
          <p className="text-slate-500 mt-1">Version 1.0.2</p>
        </div>
        <p>© 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Sidebar;