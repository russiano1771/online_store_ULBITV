import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/userStore";
import DeviceStore from "./store/deviceStore";
export const context = createContext(null)
console.log(process.env.REACT_APP_API_URL)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore()
  }}>
    <App />
  </context.Provider>
);

