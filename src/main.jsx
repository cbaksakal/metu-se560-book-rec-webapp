import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BookProvider } from './contexts/BookContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BookProvider>
        <App />
      </BookProvider>
  </React.StrictMode>
);
