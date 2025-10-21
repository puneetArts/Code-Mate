// src/App.jsx
import './App.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full !flex !flex-col justify-center items-center bg-gradient-to-br from-[#061e2e] via-[#3b7183] to-[#37454c] text-white text-center gap-7">
      <h1 className="text-5xl font-bold mb-6">Hey coder! I’m CodeMate — your AI coding companion.</h1>
      <p className="text-lg max-w-xl mb-10 opacity-90">
        Analyze and visualize your code using AI-powered insights.
      </p>
      <button
        onClick={() => navigate('/editor')}
        className="!px-10 !py-3 text-lg font-semibold rounded-2xl bg-gradient-to-r from-[#147d98] via-[#425f66] to-[#555858] 
                   hover:from-[#37454c] hover:via-[#434e53] hover:to-[#37454c] transition-all duration-300 shadow-lg border-1 border-gray hover:border-white"
      >
        Enter App
      </button>
    </div>
  );
};

export default App;
