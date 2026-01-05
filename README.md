# TP 5 – React Native  
## Drawer Navigation & Auth Context

## Objective

Create a React Native application using Expo that demonstrates:
- Authentication using React Context
- Conditional navigation (Login / App)
- Drawer Navigation
- Stack Navigation
- Passing parameters between screens
- Logout functionality

---

## Technologies Used

- React Native (Expo)
- React Navigation
- Context API
- JavaScript

---

## Project Structure

TP5Drawer/
├── App.js  
├── context/  
│   └── AuthContext.js  
├── navigation/  
│   ├── AppDrawer.js  
│   └── AppStack.js  
├── screens/  
│   ├── LoginScreen.js  
│   ├── TodoListScreen.js  
│   ├── TodoDetailsScreen.js  
│   └── ProfileScreen.js  
└── components/  
    └── AppBar.js (optional)

## Installation

1. Create the project:
```bash
npx create-expo-app TP5Drawer
cd TP5Drawer
Install dependencies:

bash
Copier le code
npm install @react-navigation/native
npm install @react-navigation/drawer
npm install @react-navigation/native-stack
npx expo install react-native-gesture-handler react-native-reanimated
Start the project:

bash
Copier le code
npm start
Authentication
Authentication is handled using React Context

login() logs the user in

logout() logs the user out

Navigation changes depending on authentication state

Navigation
If user is not logged in → LoginScreen

If user is logged in → Drawer Navigator

Drawer Screens
Tâches (Stack Navigator)

Profil

Stack Screens
Todo List

Todo Details

Screens
LoginScreen
User enters a name

Clicks Se connecter to log in

TodoListScreen
Displays a list of tasks

Uses useEffect to simulate loading

Clicking a task navigates to details screen

TodoDetailsScreen
Displays task title and ID

Receives data via navigation parameters

ProfileScreen
Displays username

Logout button

Data Passing
js
Copier le code
navigation.navigate("Détails", {
  id: item.id,
  title: item.title,
});
Expected Result
Login screen displayed at startup

Drawer navigation available after login

Stack navigation works correctly

Logout returns to Login screen

Author
Student Name: Haddouali Yassine
TP: React Native – Drawer & Context
