// calculateProgress.js - Utility for tracking and calculating training progress

/**
 * Module structure for T-72 Training
 */
export const MODULES = {
    TANK_OVERVIEW: 'tankOverview',
    CONTROLS: 'controls',
    SAFETY: 'safety',
    ASSESSMENT: 'assessment'
};

/**
 * Lesson structure with IDs matching the progress tracker
 */
export const LESSONS = {
    // Tank Overview Module (IDs: 1-4)
    HISTORY_DEVELOPMENT: 1,
    TECHNICAL_SPECS: 2,
    VARIANTS_UPGRADES: 3,
    CAPABILITIES_LEGACY: 4,

    // Controls Module (IDs: 5-8)
    DRIVER_STATION: 5,
    GUNNER_STATION: 6,
    COMMANDER_STATION: 7,
    OPERATING_PROCEDURES: 8,

    // Safety Module (IDs: 9-13)
    PRE_OPERATION_CHECKS: 9,
    FIRE_SAFETY: 10,
    EMERGENCY_EVACUATION: 11,
    NBC_PROTECTION: 12,
    AMMUNITION_SAFETY: 13,

    // Assessment (ID: 14)
    FINAL_ASSESSMENT: 14
};

/**
 * Module configuration with lesson mappings
 */
export const MODULE_CONFIG = {
    [MODULES.TANK_OVERVIEW]: {
        title: 'Tank Overview & History',
        lessonIds: [1, 2, 3, 4],
        totalLessons: 4,
        estimatedDuration: 25, // minutes
        difficulty: 'Beginner'
    },
    [MODULES.CONTROLS]: {
        title: 'Crew Controls & Stations',
        lessonIds: [5, 6, 7, 8],
        totalLessons: 4,
        estimatedDuration: 30,
        difficulty: 'Intermediate'
    },
    [MODULES.SAFETY]: {
        title: 'Safety & Emergency Procedures',
        lessonIds: [9, 10, 11, 12, 13],
        totalLessons: 5,
        estimatedDuration: 20,
        difficulty: 'Critical'
    },
    [MODULES.ASSESSMENT]: {
        title: 'Knowledge Assessment',
        lessonIds: [14],
        totalLessons: 1,
        estimatedDuration: 15,
        difficulty: 'Advanced'
    }
};

/**
 * Calculate progress for a specific module
 * @param {string} moduleId - Module identifier
 * @param {number[]} completedLessons - Array of completed lesson IDs
 * @returns {Object} Module progress data
 */
export const calculateModuleProgress = (moduleId, completedLessons = []) => {
    const module = MODULE_CONFIG[moduleId];

    if (!module) {
        return {
            progress: 0,
            completedCount: 0,
            totalCount: 0,
            isComplete: false
        };
    }

    const completedInModule = module.lessonIds.filter(id =>
        completedLessons.includes(id)
    );

    const progress = Math.round(
        (completedInModule.length / module.totalLessons) * 100
    );

    return {
        progress,
        completedCount: completedInModule.length,
        totalCount: module.totalLessons,
        isComplete: completedInModule.length === module.totalLessons,
        remainingLessons: module.totalLessons - completedInModule.length
    };
};

/**
 * Calculate overall training progress
 * @param {number[]} completedLessons - Array of completed lesson IDs
 * @returns {Object} Overall progress data
 */
export const calculateOverallProgress = (completedLessons = []) => {
    const totalLessons = 14;
    const completedCount = completedLessons.length;
    const progress = Math.round((completedCount / totalLessons) * 100);

    // Calculate completed modules
    const completedModules = Object.keys(MODULE_CONFIG).filter(moduleId => {
        const moduleProgress = calculateModuleProgress(moduleId, completedLessons);
        return moduleProgress.isComplete;
    }).length;

    // Calculate total time spent (assuming 6.5 min average per lesson)
    const timeSpent = Math.round(completedCount * 6.5);

    // Calculate estimated time remaining
    const totalEstimatedTime = Object.values(MODULE_CONFIG).reduce(
        (sum, module) => sum + module.estimatedDuration, 0
    );
    const timeRemaining = Math.max(0, totalEstimatedTime - timeSpent);

    return {
        totalLessons,
        completedLessons: completedCount,
        remainingLessons: totalLessons - completedCount,
        overallProgress: progress,
        completedModules,
        totalModules: Object.keys(MODULE_CONFIG).length,
        timeSpent: `${timeSpent} min`,
        timeRemaining: `${timeRemaining} min`,
        isComplete: completedCount === totalLessons
    };
};

/**
 * Get next recommended lesson
 * @param {number[]} completedLessons - Array of completed lesson IDs
 * @returns {Object} Next lesson information
 */
export const getNextLesson = (completedLessons = []) => {
    // Find the first incomplete lesson in order
    for (let lessonId = 1; lessonId <= 14; lessonId++) {
        if (!completedLessons.includes(lessonId)) {
            // Find which module this lesson belongs to
            const moduleEntry = Object.entries(MODULE_CONFIG).find(([_, config]) =>
                config.lessonIds.includes(lessonId)
            );

            if (moduleEntry) {
                const [moduleId, moduleConfig] = moduleEntry;
                const lessonIndex = moduleConfig.lessonIds.indexOf(lessonId);

                return {
                    lessonId,
                    moduleId,
                    moduleTitle: moduleConfig.title,
                    lessonNumber: lessonIndex + 1,
                    totalInModule: moduleConfig.totalLessons
                };
            }
        }
    }

    // All lessons complete
    return null;
};

/**
 * Check if a module is unlocked based on prerequisites
 * @param {string} moduleId - Module to check
 * @param {number[]} completedLessons - Array of completed lesson IDs
 * @returns {boolean} Whether module is unlocked
 */
export const isModuleUnlocked = (moduleId, completedLessons = []) => {
    const moduleOrder = [
        MODULES.TANK_OVERVIEW,
        MODULES.CONTROLS,
        MODULES.SAFETY,
        MODULES.ASSESSMENT
    ];

    const currentIndex = moduleOrder.indexOf(moduleId);

    // Dashboard and first module always unlocked
    if (currentIndex === 0) return true;

    // Check if previous module is completed
    const previousModuleId = moduleOrder[currentIndex - 1];
    const previousProgress = calculateModuleProgress(previousModuleId, completedLessons);

    return previousProgress.isComplete;
};

/**
 * Get all achievements based on progress
 * @param {number[]} completedLessons - Array of completed lesson IDs
 * @returns {Object[]} Array of achievement objects
 */
export const getAchievements = (completedLessons = []) => {
    const achievements = [];

    // First Steps - Complete first lesson
    achievements.push({
        id: 'first_steps',
        title: 'First Steps',
        description: 'Complete your first training module',
        unlocked: completedLessons.length >= 1,
        icon: 'Star',
        color: 'blue',
        unlockedAt: completedLessons.length >= 1 ? new Date() : null
    });

    // Tank Overview Complete
    const overviewProgress = calculateModuleProgress(MODULES.TANK_OVERVIEW, completedLessons);
    achievements.push({
        id: 'tank_overview_complete',
        title: 'Tank Overview Mastered',
        description: 'Complete all tank overview lessons',
        unlocked: overviewProgress.isComplete,
        icon: 'BookOpen',
        color: 'blue',
        unlockedAt: overviewProgress.isComplete ? new Date() : null
    });

    // Controls Complete
    const controlsProgress = calculateModuleProgress(MODULES.CONTROLS, completedLessons);
    achievements.push({
        id: 'controls_complete',
        title: 'Expert Operator',
        description: 'Master all control training',
        unlocked: controlsProgress.isComplete,
        icon: 'Settings',
        color: 'purple',
        unlockedAt: controlsProgress.isComplete ? new Date() : null
    });

    // Safety Complete
    const safetyProgress = calculateModuleProgress(MODULES.SAFETY, completedLessons);
    achievements.push({
        id: 'safety_complete',
        title: 'Safety First',
        description: 'Master all safety procedures',
        unlocked: safetyProgress.isComplete,
        icon: 'ShieldCheck',
        color: 'red',
        unlockedAt: safetyProgress.isComplete ? new Date() : null
    });

    // Final Assessment Passed
    achievements.push({
        id: 'certified',
        title: 'Certified T-72 Operator',
        description: 'Pass the final assessment',
        unlocked: completedLessons.includes(LESSONS.FINAL_ASSESSMENT),
        icon: 'Trophy',
        color: 'green',
        unlockedAt: completedLessons.includes(LESSONS.FINAL_ASSESSMENT) ? new Date() : null
    });

    // Perfect Score - Complete all lessons
    achievements.push({
        id: 'perfect_score',
        title: 'Perfect Score',
        description: 'Complete all training modules',
        unlocked: completedLessons.length === 14,
        icon: 'Award',
        color: 'yellow',
        unlockedAt: completedLessons.length === 14 ? new Date() : null
    });

    return achievements;
};

/**
 * Get learning statistics
 * @param {number[]} completedLessons - Array of completed lesson IDs
 * @returns {Object} Learning statistics
 */
export const getLearningStats = (completedLessons = []) => {
    const stats = {
        totalLessons: 14,
        completedLessons: completedLessons.length,
        completionRate: Math.round((completedLessons.length / 14) * 100),
        currentStreak: 0, // Would need date tracking
        longestStreak: 0, // Would need date tracking
        averageScore: 0, // Would need quiz score tracking
        timeInvested: `${Math.round(completedLessons.length * 6.5)} min`,
        achievementsUnlocked: getAchievements(completedLessons).filter(a => a.unlocked).length,
        totalAchievements: 6
    };

    return stats;
};

/**
 * Export progress data for saving
 * @param {number[]} completedLessons - Array of completed lesson IDs
 * @returns {Object} Progress data for storage
 */
export const exportProgressData = (completedLessons = []) => {
    return {
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        completedLessons,
        overallProgress: calculateOverallProgress(completedLessons),
        moduleProgress: Object.keys(MODULE_CONFIG).map(moduleId => ({
            moduleId,
            ...calculateModuleProgress(moduleId, completedLessons)
        })),
        achievements: getAchievements(completedLessons),
        stats: getLearningStats(completedLessons)
    };
};

/**
 * Import and validate progress data
 * @param {Object} data - Progress data to import
 * @returns {number[]} Validated completed lessons array
 */
export const importProgressData = (data) => {
    if (!data || !Array.isArray(data.completedLessons)) {
        return [];
    }

    // Validate lesson IDs (1-14)
    const validLessons = data.completedLessons.filter(
        id => typeof id === 'number' && id >= 1 && id <= 14
    );

    return [...new Set(validLessons)]; // Remove duplicates
};