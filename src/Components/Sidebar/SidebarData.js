

export const sidebarData = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: '📊',
    path: 'dashboard',
    type: 'single',
    description: 'Training overview and statistics'
  },
  {
    id: 'training',
    title: 'Training Modules',
    icon: '📚',
    type: 'expandable',
    description: 'Core training content',
    subItems: [
      {
        id: 'tankOverview',
        title: 'Tank Overview',
        icon: '🚜',
        path: 'tankOverview',
        description: 'T-72 specifications, history, and capabilities',
        subSections: [
          { id: 'history', title: 'History & Development' },
          { id: 'specifications', title: 'Technical Specifications' },
          { id: 'variants', title: 'Variants & Upgrades' },
          { id: 'combat', title: 'Combat History' }
        ]
      },
      {
        id: 'controls',
        title: 'Main Controls',
        icon: '🎮',
        path: 'controls',
        description: 'Interactive control systems training',
        subSections: [
          { id: 'driver', title: "Driver's Station" },
          { id: 'gunner', title: "Gunner's Station" },
          { id: 'commander', title: "Commander's Station" },
          { id: 'procedures', title: 'Operating Procedures' }
        ]
      },
      {
        id: 'safety',
        title: 'Safety Procedures',
        icon: '🛡️',
        path: 'safety',
        description: 'Critical safety protocols and emergency procedures',
        subSections: [
          { id: 'preOperation', title: 'Pre-Operation Checks' },
          { id: 'fire', title: 'Fire Safety' },
          { id: 'evacuation', title: 'Emergency Evacuation' },
          { id: 'nbc', title: 'NBC Protection' },
          { id: 'ammunition', title: 'Ammunition Safety' }
        ]
      },
      {
        id: 'assessment',
        title: 'Assessment',
        icon: '📝',
        path: 'assessment',
        description: 'Test your knowledge and get certified'
      }
    ]
  },
  {
    id: 'progress',
    title: 'Progress Tracking',
    icon: '📈',
    path: 'progress',
    type: 'single',
    description: 'View your learning progress and completion status'
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: '⚙️',
    path: 'settings',
    type: 'single',
    description: 'Application preferences and configurations'
  }
];

// Helper function to get all paths for routing
export const getAllPaths = () => {
  const paths = [];
  
  sidebarData.forEach(item => {
    if (item.type === 'single') {
      paths.push(item.path);
    } else if (item.type === 'expandable' && item.subItems) {
      item.subItems.forEach(subItem => {
        paths.push(subItem.path);
      });
    }
  });
  
  return paths;
};

// Helper function to get menu item by path
export const getMenuItemByPath = (path) => {
  for (const item of sidebarData) {
    if (item.path === path) return item;
    if (item.subItems) {
      const subItem = item.subItems.find(sub => sub.path === path);
      if (subItem) return subItem;
    }
  }
  return null;
};

export default sidebarData;