// src/components/HeroTerminal.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const fileSystem = {
    root: {
        type: 'dir',
        children: {
            'projects': { type: 'dir', children: {} },
            'skills': { type: 'dir', children: {} },
            'about.txt': { type: 'file', content: 'ATHUL_BABURAJ // FULL_STACK_DEVELOPER\nSpecializing in React, Node.js, and Cloud Architecture.\nMission: Build scalable, efficient solutions.' },
            'contact.txt': { type: 'file', content: 'EMAIL: athul@example.com\nLINKEDIN: /in/athulbaburaj\nGITHUB: @athulbaburaj' },
            'resume.pdf': { type: 'file', content: '[ENCRYPTED_FILE] Use "open resume" to view.' }
        }
    },
    projects: {
        type: 'dir',
        children: {
            'portfolio_v1': { type: 'file', content: 'The current site you are viewing. Built with React & Tailwind.' },
            'ecommerce_api': { type: 'file', content: 'RESTful API for high-scale e-commerce applications.' },
            'cloud_dashboard': { type: 'file', content: 'Real-time monitoring dashboard for Google Cloud resources.' }
        }
    },
    skills: {
        type: 'dir',
        children: {
            'frontend': { type: 'file', content: 'React, Redux, TailwindCSS, Framer Motion' },
            'backend': { type: 'file', content: 'Node.js, Express, Python, Django' },
            'cloud': { type: 'file', content: 'Google Cloud Platform (Certified), AWS, Docker, Kubernetes' }
        }
    }
};

const HeroTerminal = () => {
    const [history, setHistory] = useState([
        { type: 'system', content: 'MOUNTING ROOT FILESYSTEM...' },
        { type: 'system', content: 'ACCESS GRANTED. WELCOME, USER.' },
        { type: 'info', content: 'Type "help" for available commands.' }
    ]);
    const [currentDir, setCurrentDir] = useState('root');
    const [input, setInput] = useState('');
    const terminalBodyRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmd) => {
        const command = cmd.trim();
        const parts = command.split(' ');
        const action = parts[0].toLowerCase();
        const arg = parts[1];

        const newHistory = [...history, { type: 'user', content: `user@system:~/${currentDir === 'root' ? '' : currentDir}$ ${command}` }];

        switch (action) {
            case 'help':
                newHistory.push({ type: 'info', content: 'COMMANDS: ls, cd [dir], cat [file], open [page], clear' });
                break;
            case 'ls':
                const dirContent = currentDir === 'root' ? fileSystem.root.children : fileSystem[currentDir].children;
                const files = Object.keys(dirContent).map(name => {
                    const isDir = dirContent[name].type === 'dir';
                    return `<span class="${isDir ? 'text-blue-400 font-bold' : 'text-white'}">${name}${isDir ? '/' : ''}</span>`;
                }).join('  ');
                newHistory.push({ type: 'response', content: files, isHtml: true });
                break;
            case 'cd':
                if (!arg || arg === '..') {
                    setCurrentDir('root');
                } else if (fileSystem.root.children[arg]?.type === 'dir') {
                    setCurrentDir(arg);
                } else {
                    newHistory.push({ type: 'error', content: `Directory not found: ${arg}` });
                }
                break;
            case 'cat':
                const currentFiles = currentDir === 'root' ? fileSystem.root.children : fileSystem[currentDir].children;
                if (currentFiles[arg]?.type === 'file') {
                    newHistory.push({ type: 'response', content: currentFiles[arg].content });
                } else {
                    newHistory.push({ type: 'error', content: `File not found: ${arg}` });
                }
                break;
            case 'open':
                if (arg === 'projects') navigate('/projects');
                else if (arg === 'about') navigate('/about');
                else if (arg === 'resume') navigate('/resume');
                else if (arg === 'contact') navigate('/contact');
                else newHistory.push({ type: 'error', content: 'Usage: open [projects|about|resume|contact]' });
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            case '':
                break;
            default:
                newHistory.push({ type: 'error', content: `Command not found: ${action}` });
        }

        setHistory(newHistory);
        setInput('');
    };

    return (
        <div className="w-full max-w-lg h-64 md:h-80 bg-black/80 border border-ops-green/30 rounded-sm backdrop-blur-sm flex flex-col font-mono text-xs md:text-sm shadow-[0_0_15px_rgba(0,255,65,0.1)] overflow-hidden relative group">
            {/* Header */}
            <div className="bg-ops-green/10 border-b border-ops-green/30 px-3 py-1 flex justify-between items-center">
                <span className="text-ops-green/70">root@system:~</span>
                <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
            </div>

            {/* Terminal Body */}
            <div
                ref={terminalBodyRef}
                className="flex-grow p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-ops-green/20 scrollbar-track-transparent"
                onClick={() => document.getElementById('hero-input').focus()}
            >
                {history.map((line, i) => (
                    <div key={i} className="mb-1 break-words">
                        {line.type === 'user' ? (
                            <span className="text-ops-green/80">{line.content}</span>
                        ) : line.isHtml ? (
                            <div dangerouslySetInnerHTML={{ __html: line.content }} />
                        ) : (
                            <span className={`${line.type === 'error' ? 'text-red-400' :
                                line.type === 'info' ? 'text-blue-400' :
                                    'text-white/90'
                                }`}>{line.content}</span>
                        )}
                    </div>
                ))}
                <div className="flex items-center mt-2">
                    <span className="text-ops-green mr-2">user@system:~/{currentDir === 'root' ? '' : currentDir}$</span>
                    <input
                        id="hero-input"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleCommand(input);
                            }
                        }}
                        className="bg-transparent border-none outline-none text-white flex-grow min-w-0"
                        autoComplete="off"
                    />
                </div>
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20"></div>
        </div>
    );
};

export default HeroTerminal;
