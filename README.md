# T-72 Training CBT (Computer-Based Training)

A standalone, offline training application for T-72 tank operations designed for military personnel.

## 📋 Overview

This CBT provides comprehensive training on T-72 tank operations through a structured, self-paced learning program. The application runs completely offline and saves progress locally.

## 🎯 Training Modules

1. **How to Use This CBT** - Navigation and usage instructions
2. **Module 1: Tank Overview & History** - Design, specifications, and variants
3. **Module 2: Crew Controls & Stations** - Driver, gunner, and commander operations
4. **Module 3: Safety & Emergency Procedures** - Critical safety protocols
5. **Module 4: Final Assessment** - Certification test (80% passing score)

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Development build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📂 Project Structure

```
src/
├── Components/
│   ├── Layout/MainLayout.jsx       # Main app layout
│   ├── Sidebar/Sidebar.jsx         # Navigation sidebar
│   └── Content/ContentPage.jsx     # Lesson content display
├── pages/
│   ├── Dashboard/Dashboard.jsx     # Home/welcome page
│   ├── Progress/ProgressTracker.jsx # Progress tracking
│   └── Assessment/Quiz.jsx         # Final assessment
└── data/                           # Content JSON files (future)
```

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 💾 Features
- ✅ **Progress Tracking** - Automatic local save using localStorage
- ✅ **Sequential Learning** - Modules unlock upon completion
- ✅ **Interactive Assessments** - Quizzes and final certification test
- ✅ **Responsive Design** - Works on various screen sizes
- ✅ **Self-Contained** - All assets embedded (images, videos, PDFs)

## 📊 Progress System

- Progress saved automatically on local machine
- Modules must be completed sequentially
- Sections marked as completed after viewing all pages
- Overall progress displayed in sidebar
- Certificate generated upon passing final assessment

## 🔐 Distribution

**For Army/Military Use:**
- Package as standalone `.exe` file
- Distribute via USB drives or secure internal networks
- No external dependencies or internet connectivity required
- Progress data stored locally per installation

## 🎓 Completion Requirements

- Complete all 4 modules in order
- Pass final assessment with 80% or higher
- Total estimated time: ~90 minutes

## ⚙️ System Requirements

- Windows 7 or higher (or equivalent OS)
- Screen resolution: 1024x768 minimum (1920x1080 recommended)
- Audio capability for instructional videos
- 2GB free disk space


## 🔒 Notes

- Progress is saved locally and cannot be transferred between computers
- Do not close application during assessments
- All content must be completed sequentially
- Designed for secure, offline military training environments

---

**Developed for Military Training Systems**
