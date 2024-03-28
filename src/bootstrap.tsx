import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages';

const App: React.FC = () => {
  return <Main />;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
