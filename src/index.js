import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * IMPORTANT NOTES
 * 
 * This is a very simple app to send messages to each other using firebase
 * Also far from ready to be used anywhere near production
 * Didn't want to spend to much time here so please read on what else could have been done here
 * 
 * In order to run this app, you must create a .env file and past the correct keys
 * Keys are provide in the email, please delete this when done as this is my private key
 * 
 * There's missing timestap from firebase from serverTimestamp()
 * Most likely because messages are not saved as this is a free plan
 * Could implement something locally and then check if it's longer than one hour or to show timestamp
 * 
 * There's also missing tests, would use a react testing libnrary 
 * There are plenty of others that can be used for this
 * Services like connection to Firebase should very much be tested
 * But could also test smaller components like the send button
 * 
 * More functionality can be added here as well
 * Like sending photos, videos, emoji, add tabs for easy access to profiles
 * And add more ways to sign in and register
 * 
 */