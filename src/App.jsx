import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Editor from '@monaco-editor/react';
import Select from 'react-select';
import Markdown from 'react-markdown';
import { RingLoader, HashLoader } from "react-spinners";
import { FaProjectDiagram } from "react-icons/fa";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { SunDim } from 'lucide-react';

const App = () => {
  const options = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'c', label: 'C' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  // 🔹 Backend call only
  async function reviewCode() {
    if (!code.trim()) {
      alert("Please enter the code first.");
      return;
    }
    setResponse("");
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          language: selectedOption.value,
        }),
      });

      const data = await res.json();

      if (data.analysis) {
        setResponse(data.analysis);
      } else if (data.feedback) {
        setResponse(data.feedback);
      } else {
        setResponse("No feedback received from AI.");
      }

    } catch (err) {
      console.error("Error reviewing code:", err);
      alert("Error analyzing code. Please check your backend logs.");
    } finally {
      setLoading(false);
    }
  }

  async function visualizeCode() {
    if (!code.trim()) {
      alert("Please enter the code first.");
      return;
    }
    setResponse("");
    setLoading(true);
    try {

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/visualize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          language: selectedOption.value,
        }),
      });

      const data = await res.json();

      if (data.analysis) {
        setResponse(data.analysis);
      } else if (data.feedback) {
        setResponse(data.feedback);
      } else {
        setResponse("No feedback received from AI.");
      }

    } catch (err) {
      console.error("Error reviewing code:", err);
      alert("Error analyzing code. Please check your backend logs.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="main flex justify-between" style={{ height: "calc(100vh - 90px)" }}>

        {/* LEFT PANEL */}
        <div className="left h-[100%] w-[50%] border border-white bg-zinc-800 flex flex-col">
          <div className="tabs !p-3 w-full flex items-center gap-5">
            <Select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e)}
              options={options}
              className="w-[250px]"
              styles={{
                control: (base, state) => ({
                  ...base,
                  backgroundColor: '#18181b',
                  borderColor: state.isFocused ? '#3f3f46' : '#27272a',
                  boxShadow: state.isFocused ? '0 0 0 1px #3f3f46' : 'none',
                  '&:hover': { borderColor: '#3f3f46' },
                  color: 'white',
                }),
                menu: (base) => ({ ...base, backgroundColor: '#18181b', border: '1px solid #3f3f46' }),
                option: (base, state) => ({ ...base, backgroundColor: state.isFocused ? '#27272a' : '#18181b', color: 'white', cursor: 'pointer' }),
                singleValue: (base) => ({ ...base, color: 'white' }),
              }}
            />
            <button
              onClick={reviewCode}
              className="btnNormal flex gap-2 justify-center items-center  bg-zinc-900 min-w-[120px] transition-all hover:bg-cyan-800"
            >
              <SunDim/> Review Code
            </button>
            <button
              onClick={visualizeCode}
              className="btnNormal flex gap-2 justify-center items-center min-w-[120px] 
             bg-gradient-to-r from-[#092436] via-[#274e5a] to-[#37454c]
             text-white font-semibold 
             transition-all duration-300 
             hover:from-black hover:via-black hover:to-black
             !hover:border-b-[3px] hover:border-indigo-100"
            >
              <FaProjectDiagram className="text-lg" /> Visualize
            </button>
            
          </div>

          <div className="editor-wrapper flex-1">
            <Editor
              height="100%"
              language={selectedOption.value}
              value={code}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
            />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right !p-[10px] bg-zinc-900 w-[50%] h-[100%] overflow-auto">
          <div className="topTab gap-3 justify-center border-t-[1px] border-b-[1px] border-[#3c3c3d] flex items-center  h-[60px]">
           <p className="bg-gradient-to-r from-[#1cacd0] via-[#628d98] to-[#9fa6a7] bg-clip-text text-transparent font-light text-[28px]">Response </p><AiOutlineDeploymentUnit color="#42a2d2" size={33}/>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-[calc(100%-60px)]">
              <RingLoader color="#42a2d2" size={150} />
            </div>
          ) : (
            <div className="markdown-response !p-8">
              <Markdown >{response}</Markdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
