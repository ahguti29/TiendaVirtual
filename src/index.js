import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import{ RouterProvider} from "react-router-dom";
import { CartContextProvider } from './context/cartContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { router } from "./router";



const firebaseConfig = {
  apiKey: "AIzaSyCT391RschAYwPLbpA17XnliWtSj1FJm0s",
  authDomain: "ecoomerce-trepadores-quindio.firebaseapp.com",
  projectId: "ecoomerce-trepadores-quindio",
  storageBucket: "ecoomerce-trepadores-quindio.appspot.com",
  messagingSenderId: "831186457684",
  appId: "1:831186457684:web:6485b5af8fff40bc5289c1"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
