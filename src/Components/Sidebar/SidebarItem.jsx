import React, { useState } from 'react';
import { CheckCircle, Circle, ChevronDown, ChevronRight, Lock } from 'lucide-react';

const SidebarItem = ({ item, activeSection, onSelect, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isActive = item.path && activeSection === item.path;
  const hasSubItems = item.subItems && item.subItems.length > 0;

  const hasActiveSubItem =
    hasSubItems &&
    item.subItems.some(
      (subItem) => subItem.path && activeSection === subItem.path
    );

  const isCompleted = false;
  const isLocked = false;
  const progress = 0; // 0-100

  const handleClick = () => {
    if (isLocked) return;

    if (hasSubItems) {
      if (!isExpanded && item.subItems && item.subItems.length > 0 && item.subItems[0].path) {
        onSelect(item.subItems[0].path);
      }
      setIsExpanded(!isExpanded);
    } else if (item.path) {
      onSelect(item.path);
    }
  };

  const getStatusIcon = () => {
    if (isCompleted) {
      return <CheckCircle size={16} className="text-green-600" />;
    }
    if (isLocked) {
      return <Lock size={16} className="text-slate-400" />;
    }
    if (progress > 0) {
      return (
        <div className="relative w-4 h-4">
          <Circle size={16} className="text-slate-300" />
          <div
            className="absolute inset-0 rounded-full border-2 border-blue-600"
            style={{
              clipPath: `polygon(0 0, 100% 0, 100% ${progress}%, 0 ${progress}%)`
            }}
          />
        </div>
      );
    }
    return <Circle size={16} className="text-slate-300" />;
  };

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={isLocked}
        className={`w-full flex items-center justify-between px-3 py-3 rounded-lg transition-all duration-200 group ${isLocked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
          }`}
        style={{
          paddingLeft: `${level * 16 + 12}px`,
          backgroundColor:
            isActive || hasActiveSubItem
              ? isActive
                ? 'linear-gradient(to right, #dbeafe, #eff6ff)'
                : '#f8fafc'
              : isHovered && !isLocked
                ? '#f1f5f9'
                : 'transparent',
          borderLeft: isActive ? '3px solid #2563eb' : '3px solid transparent',
          marginLeft: level === 0 ? '0' : '0',
        }}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Status Icon */}
          <div className="flex-shrink-0">
            {getStatusIcon()}
          </div>

          {/* Module Icon */}
          <span
            className={`flex-shrink-0 transition-colors ${isActive
                ? 'text-blue-600'
                : isLocked
                  ? 'text-slate-400'
                  : 'text-slate-600'
              }`}
          >
            {item.icon}
          </span>

          {/* Title */}
          <div className="flex-1 min-w-0 text-left">
            <span
              className={`text-sm font-medium block truncate ${isActive
                  ? 'text-blue-900 font-semibold'
                  : isLocked
                    ? 'text-slate-500'
                    : 'text-slate-700'
                }`}
            >
              {item.title}
            </span>

            {/* Progress indicator for main items */}
            {!hasSubItems && progress > 0 && progress < 100 && (
              <div className="mt-1 w-full bg-slate-200 rounded-full h-1">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Expand/Collapse Icon for items with subitems */}
        {hasSubItems && (
          <div className="flex-shrink-0 ml-2">
            {isExpanded ? (
              <ChevronDown size={16} className="text-slate-400 transition-transform" />
            ) : (
              <ChevronRight size={16} className="text-slate-400 transition-transform" />
            )}
          </div>
        )}

        {/* Completion Badge */}
        {!hasSubItems && isCompleted && (
          <div className="flex-shrink-0 ml-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200">
              Done
            </span>
          </div>
        )}

        {/* Lock Badge */}
        {isLocked && (
          <div className="flex-shrink-0 ml-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              Locked
            </span>
          </div>
        )}
      </button>

      {/* Sub Items */}
      {hasSubItems && isExpanded && (
        <div className="mt-1 space-y-1">
          {item.subItems.map((subItem) => {
            const isSubActive = subItem.path && activeSection === subItem.path;
            const isSubCompleted = false; // Mock data
            const isSubLocked = false; // Mock data
            const subProgress = 0; // Mock data

            return (
              <button
                key={subItem.id}
                onClick={() => !isSubLocked && onSelect(subItem.path)}
                disabled={isSubLocked}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-200 group ${isSubLocked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
                  }`}
                style={{
                  paddingLeft: `${(level + 1) * 16 + 12}px`,
                  backgroundColor: isSubActive
                    ? '#dbeafe'
                    : 'transparent',
                  borderLeft: isSubActive ? '3px solid #2563eb' : '3px solid transparent'
                }}
              >
                {/* Status Icon */}
                <div className="flex-shrink-0">
                  {isSubCompleted ? (
                    <CheckCircle size={14} className="text-green-600" />
                  ) : isSubLocked ? (
                    <Lock size={14} className="text-slate-400" />
                  ) : (
                    <Circle size={14} className="text-slate-300" />
                  )}
                </div>

                {/* Sub Icon */}
                <span
                  className={`flex-shrink-0 ${isSubActive
                      ? 'text-blue-600'
                      : isSubLocked
                        ? 'text-slate-400'
                        : 'text-slate-500'
                    }`}
                >
                  {subItem.icon}
                </span>

                {/* Title */}
                <span
                  className={`flex-1 text-left truncate ${isSubActive
                      ? 'text-blue-900 font-semibold'
                      : isSubLocked
                        ? 'text-slate-500'
                        : 'text-slate-700'
                    }`}
                >
                  {subItem.title}
                </span>

                {/* Sub Item Badges */}
                {isSubCompleted && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200 flex-shrink-0">
                    ✓
                  </span>
                )}
                {isSubLocked && (
                  <Lock size={12} className="text-slate-400 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;