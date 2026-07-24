# 👶 Baby Chores Dashboard

A React-based task management dashboard for tracking daily baby care activities. Perfect for busy moms!

## Features

✅ **Task Management** - Create, check off, and delete daily baby care tasks  
✅ **Categories** - Organize tasks by type (feeding, diapers, sleep, play, bath)  
✅ **Progress Tracking** - See completion stats and progress percentage  
✅ **Filter Tasks** - View all tasks or filter by category  
✅ **Time Tracking** - Set and track times for each task  
✅ **Data Persistence** - Tasks are saved in your browser's local storage  
✅ **Responsive Design** - Works great on phones, tablets, and desktops  

## Getting Started

### Prerequisites
- Node.js installed on your computer ([Download here](https://nodejs.org/))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/abrudaninteriors-47/baby-chores-dashboard.git
cd baby-chores-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

The app will open at `http://localhost:3000` in your browser.

## How to Use

1. **View Default Tasks** - The dashboard comes with sample tasks
2. **Check Off Tasks** - Click the checkbox when you complete a task
3. **Add New Tasks** - Click "+ Add New Task" to create custom tasks
4. **Filter Tasks** - Use category buttons to filter tasks
5. **Delete Tasks** - Click the ✕ button to remove a task
6. **Track Progress** - See your completion stats at the top

## Project Structure

```
baby-chores-dashboard/
├── src/
│   ├── components/
│   │   ├── TaskList.js        # Displays all tasks
│   │   ├── TaskCard.js        # Individual task component
│   │   ├── TaskForm.js        # Add new task form
│   │   └── Stats.js           # Progress statistics
│   ├── styles/
│   │   ├── TaskList.css
│   │   ├── TaskCard.css
│   │   ├── TaskForm.css
│   │   └── Stats.css
│   ├── App.js                 # Main app component
│   ├── App.css                # Main styling
│   └── index.js               # React entry point
├── public/
├── package.json
└── README.md
```

## Learning React Concepts

This project teaches you:

- **Components** - Break UI into reusable pieces
- **State Management** - Use `useState` to track data
- **Side Effects** - Use `useEffect` to save/load data
- **Props** - Pass data between components
- **Conditional Rendering** - Show/hide elements based on state
- **Lists & Keys** - Render dynamic lists efficiently
- **Event Handling** - Respond to user interactions
- **CSS Styling** - Create beautiful, responsive designs

## Available Scripts

`npm start` - Run the app in development mode  
`npm test` - Run tests  
`npm run build` - Build the app for production  
`npm eject` - Eject from create-react-app (not reversible)

## Customization

### Add New Categories
Edit the `getCategoryEmoji()` function in `src/components/TaskCard.js` to add more categories.

### Change Colors
Modify the color values in the CSS files (look for `#667eea` and `#764ba2`).

### Modify Default Tasks
Update the `getDefaultTasks()` function in `src/App.js`.

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Data is stored locally, so your tasks persist even after closing the browser.

## Tips for New Parents

- Create a routine schedule (morning, afternoon, evening)
- Add tasks in 2-hour intervals
- Use the filter to focus on one type of care at a time
- Check off tasks as you complete them to track your accomplishments

## Future Enhancements

Ideas for expanding the dashboard:
- 📱 Mobile app version
- 🔔 Push notifications for task reminders
- 📊 Weekly/monthly progress reports
- 👥 Multi-user support for co-parenting
- 🎵 Celebratory sounds when tasks are completed
- 📅 Calendar view

## License

This project is open source and available under the MIT License.

## Support

If you have questions or suggestions, feel free to open an issue or contribute to the project!

---

**Happy parenting! 👶💕**
