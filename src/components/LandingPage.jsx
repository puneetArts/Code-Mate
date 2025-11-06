import React from "react";
import { useNavigate } from "react-router-dom";
import { Code2, Boxes  } from "lucide-react";
import "./LandingPage.css"; 

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-white text-center px-4 overflow-hidden font-mono">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold !mb-6 animate-typewriter">
        Hey coder! I’m <span className="text-cyan-300">CodeMate</span> — your AI coding companion.
      </h1>

      {/* Subtitle */}
      <p className="text-lg max-w-xl !mb-8 opacity-90 fade-slide-up">
        Analyze and visualize your code using AI-powered insights.
      </p>

      {/* Feature Boxes */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-18 !max-w-7xl w-full !px-4">
        
        {/* Code Review Box */}
        <div className="feature-box slide-left bg-gradient-to-br from-[#1f3a4d] to-[#304e59] !p-8 rounded-2xl shadow-lg border border-gray-600 w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40">
          <div className="flex flex-col items-center text-center gap-4">
            <Code2 className="w-12 h-12 text-cyan-300" />
            <h2 className="text-2xl font-semibold">AI Code Review</h2>
            <p className="opacity-80">
              Instantly analyze your code quality, detect logical errors, and get AI-driven improvement suggestions to write cleaner and more efficient code.
            </p>
          </div>
        </div>

        {/* Visualization Box */}
        <div className="feature-box slide-right bg-gradient-to-br from-[#304e59] to-[#1f3a4d] !p-8 rounded-2xl shadow-lg border border-gray-600 w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-emerald-400/40">
          <div className="flex flex-col items-center text-center gap-4">
            <Boxes  className="w-12 h-12 text-emerald-400" />
            <h2 className="text-2xl font-semibold">Code Visualizer</h2>
            <p className="opacity-80">
              Visualize your DSA code as live structures — linked lists, trees, or stacks — and see your algorithms in action through interactive visuals.
            </p>
          </div>
        </div>

      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/editor")}
        className="!mt-12 !px-10 !py-3 text-lg font-semibold rounded-2xl bg-gradient-to-r from-[#147d98] via-[#425f66] to-[#555858] 
                   hover:from-[#101b21] hover:via-[#0e181d] hover:to-[#131f26]  shadow-lg border !border-gray-400 hover:border-white fade-slide-up !delay-btn transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40"
      >
        Enter App
      </button>
    </div>
  );
};

export default LandingPage;
