import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <div style={{ fontFamily: 'Bodoni, serif' }}>
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

