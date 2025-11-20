// src/components/Terminal.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTerminal, FaTimes, FaMinus } from 'react-icons/fa';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        { type: 'system', content: 'INITIALIZING SYSTEM...' },
        { type: 'system', content: 'CONNECTING TO SECURE SERVER...' },
        { type: 'success', content: 'ACCESS GRANTED.' },
        { type: 'info', content: 'Welcome to the interactive terminal. Type "help" for available commands.' }
    ]);
    const [isMinimized, setIsMinimized] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [output]);

    const handleCommand = (cmd) => {
        const command = cmd.trim().toLowerCase();
        if (!command) return;

        const newOutput = [...output, { type: 'user', content: `> ${cmd}` }];

        // Add to command history
        setCommandHistory(prev => [...prev, cmd]);
        setHistoryIndex(-1);

        switch (command) {
            case 'help':
                newOutput.push({
                    type: 'info',
                    content: `AVAILABLE COMMANDS:
  - about     : Navigate to About page
  - projects  : Navigate to Projects page
  - resume    : Navigate to Resume page
  - contact   : Navigate to Contact page
  - clear     : Clear terminal screen
  - whoami    : Display user identity
  - exit      : Close terminal session`
                });
                break;
            case 'about':
                newOutput.push({ type: 'success', content: 'Navigating to About Section...' });
                setTimeout(() => navigate('/about'), 500);
                break;
            case 'projects':
                newOutput.push({ type: 'success', content: 'Loading Project Archives...' });
                setTimeout(() => navigate('/projects'), 500);
                break;
            case 'resume':
                newOutput.push({ type: 'success', content: 'Accessing Personnel File...' });
                setTimeout(() => navigate('/resume'), 500);
                break;
            case 'contact':
                newOutput.push({ type: 'success', content: 'Opening Comms Channels...' });
                setTimeout(() => navigate('/contact'), 500);
                break;
            case 'clear':
                setOutput([]);
                return;
            case 'whoami':
                newOutput.push({ type: 'info', content: 'GUEST_USER // ACCESS_LEVEL: RESTRICTED' });
                break;
            case 'exit':
                newOutput.push({ type: 'system', content: 'TERMINATING SESSION...' });
                setTimeout(() => setIsVisible(false), 800);
                break;
            default:
                newOutput.push({ type: 'error', content: `COMMAND NOT RECOGNIZED: "${command}". Type "help" for assistance.` });
        }

        setOutput(newOutput);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleCommand(input);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = historyIndex + 1;
                if (newIndex < commandHistory.length) {
                    setHistoryIndex(newIndex);
                    setInput(commandHistory[newIndex]);
                } else {
                    setHistoryIndex(-1);
                    setInput('');
                }
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const commands = ['about', 'projects', 'resume', 'contact', 'clear', 'whoami', 'exit', 'help'];
            const matchingCommands = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
            if (matchingCommands.length === 1) {
                setInput(matchingCommands[0]);
            }
        }
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed bottom-4 right-8 md:right-12 z-[100] w-80 md:w-96 transition-all duration-300 font-mono text-sm ${isMinimized ? 'h-10' : 'h-96'}`}>
            {/* Terminal Header */}
            <div className="bg-ops-black border border-ops-green flex justify-between items-center px-3 py-2 cursor-pointer select-none"
                onClick={() => setIsMinimized(!isMinimized)}>
                <div className="flex items-center text-ops-green">
                    <FaTerminal className="mr-2" />
                    <span className="font-bold tracking-wider">NAVIGATION_UPLINK</span>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
                        className="text-ops-green hover:text-white transition-colors"
                    >
                        <FaMinus size={12} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
                        className="text-ops-green hover:text-red-500 transition-colors"
                    >
                        <FaTimes size={12} />
                    </button>
                </div>
            </div>

            {/* Terminal Body */}
            {!isMinimized && (
                <div className="bg-ops-black/95 border-x border-b border-ops-green/50 h-[calc(100%-2.5rem)] p-4 overflow-y-auto flex flex-col backdrop-blur-md shadow-[0_0_20px_rgba(0,255,65,0.1)]">
                    <div className="flex-grow space-y-1 mb-2">
                        {output.map((line, index) => (
                            <div key={index} className={`${line.type === 'user' ? 'text-white' :
                                line.type === 'error' ? 'text-red-500' :
                                    line.type === 'success' ? 'text-ops-green' :
                                        line.type === 'system' ? 'text-ops-green/50 italic' :
                                            'text-ops-green/80'
                                }`}>
                                {line.content}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="flex items-center border-t border-ops-green/30 pt-2">
                        <span className="text-ops-green mr-2">{'>'}</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="bg-transparent border-none outline-none text-white w-full font-mono placeholder-ops-green/30"
                            placeholder="Enter command..."
                            autoFocus
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Terminal;
