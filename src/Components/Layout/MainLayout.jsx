import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../../pages/Dashboard/Dashboard';
import TankOverview from '../../pages/TankOverview/TankOverview';
import Controls from '../../pages/Controls/Controls';
import Safety from '../../pages/Safety/Safety';
import Quiz from '../../pages/Assessment/Quiz';
import ProgressTracker from '../../pages/Progress/ProgressTracker';

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'tankOverview':
        return <TankOverview />;
      case 'controls':
        return <Controls />;
      case 'safety':
        return <Safety />;
      case 'assessment':
        return <Quiz />;
      case 'progress':
        return <ProgressTracker />;
      case 'settings':
        return <div className="p-8"><h1 className="text-2xl font-bold">Settings</h1><p>Settings page coming soon.</p></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default MainLayout;