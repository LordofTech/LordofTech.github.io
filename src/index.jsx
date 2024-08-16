import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
function TestComponent() {
  return <h1>Test Component</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<TestComponent />);


ReactDOM.createRoot(document.getElementById('root')).render(<App />);
