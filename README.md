📱 TP 5 – React Native
Drawer Navigation & Auth Context
🎯 Objective

The goal of this TP is to create a React Native application using Expo that demonstrates:

Authentication state management with Context API

Conditional navigation (Login / App)

Drawer Navigation combined with Stack Navigation

Passing parameters between screens

Basic state management with useState and useEffect

Logout functionality

🛠 Technologies Used

React Native (Expo)

React Navigation

Drawer Navigator

Native Stack Navigator

React Context API

JavaScript (ES6)

📂 Project Structure
TP5Drawer/
│
├── App.js
├── babel.config.js
├── package.json
│
├── context/
│   └── AuthContext.js
│
├── navigation/
│   ├── AppDrawer.js
│   └── AppStack.js
│
├── screens/
│   ├── LoginScreen.js
│   ├── TodoListScreen.js
│   ├── TodoDetailsScreen.js
│   └── ProfileScreen.js
│
└── components/
    └── AppBar.js (optional – bonus)

🚀 Installation & Setup
1️⃣ Create the project
npx create-expo-app TP5Drawer
cd TP5Drawer

2️⃣ Install dependencies
npm install @react-navigation/native
npm install @react-navigation/drawer
npm install @react-navigation/native-stack
npx expo install react-native-gesture-handler react-native-reanimated

3️⃣ Start the project
npm start

🔐 Authentication System

The authentication system is implemented using React Context.

AuthContext stores the connected user

login(name) logs in the user

logout() logs out the user

Navigation changes depending on authentication state

user ? <AppDrawer /> : <LoginScreen />

🧭 Navigation Flow
🔑 Not logged in

➡️ LoginScreen

✅ Logged in

➡️ Drawer Navigator

Tâches

Todo List (Stack)

Todo Details

Profil

User information

Logout button

📝 Screens Description
🔹 LoginScreen

User enters a name

Clicking “Se connecter” logs the user in

🔹 TodoListScreen

Simulated loading using useEffect

Displays a list of tasks

Clicking a task navigates to details screen

🔹 TodoDetailsScreen

Receives parameters (id, title)

Displays task information

🔹 ProfileScreen

Displays logged-in user name

Logout button resets authentication state

🔄 Data Passing Example
navigation.navigate("Détails", {
  id: item.id,
  title: item.title,
});

⭐ Bonus (Optional)

Custom AppBar component

Logout button inside the AppBar

Reusable UI component

✅ Expected Result

User can log in

Drawer navigation works correctly

Stack navigation works inside the Drawer

Data is passed correctly between screens

Logout returns the user to the Login screen

👨‍🎓 Author

Student Name: __Haddouali Yassine__
Course: React Native
TP: Drawer Navigation & Context
