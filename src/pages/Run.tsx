import React, { useState, useEffect, useRef } from 'react';
import { Checkbox } from '../components/Checkbox';
import { Alert } from '../components/Alert';
import { PlayCircle, StopCircle, Power, PowerOff, Trash2 } from 'lucide-react';
import { CollapsibleSection } from '../components/CollapsibleSection';

const logDataSource = `
2024/05/27 10:37:32 UTC INFO     Running tgcf 1.1.0 (main, Oct  2 2023, 21:59:40) [GCC 8.3.0]
2024/05/27 10:37:32 UTC INFO     Running on session 'tgcf'
2024/05/27 10:37:32 UTC WARNING  live_mode is False. Consider setting to True for real-time forwarding.
2024/05/27 10:37:32 UTC INFO     Past mode is enabled.
2024/05/27 10:37:32 UTC INFO     Fetching messages from source...
2024/05/27 10:37:33 UTC INFO     Using bot account
2024/05/27 10:37:34 UTC INFO     Signed in as My Bot (123456789)
2024/05/27 10:37:34 UTC INFO     config.source = -1001392052324
2024/05/27 10:37:34 UTC INFO     config.dest = [-1001134939864]
2024/05/27 10:37:34 UTC ERROR    Failed to find peer for destination -1001134939865. Skipping.
2024/05/27 10:37:34 UTC INFO     Forwarding from -1001392052324 to [-1001134939864]
2024/05/27 10:37:34 UTC DEBUG    Peer found for source -1001392052324
2024/05/27 10:37:34 UTC DEBUG    Peer found for dest -1001134939864
2024/05/27 10:37:34 UTC INFO     Getting message history from peer channel(id=-1001392052324)
2024/05/27 10:37:35 UTC INFO     Total messages found are 11214
2024/05/27 10:37:35 UTC INFO     Forwarding 11214 messages
2024/05/27 10:37:36 UTC DEBUG    Forwarding message 1 of 11214
2024/05/27 10:37:37 UTC DEBUG    Forwarding message 2 of 11214
2024/05/27 10:37:38 UTC ERROR    Failed to forward message 3: FloodWaitError: A wait of 14 seconds is required.
2024/05/27 10:37:52 UTC INFO     Resuming after flood wait.
2024/05/27 10:37:53 UTC DEBUG    Forwarding message 3 of 11214
2024/05/27 10:37:54 UTC INFO     Process complete.
`.trim().split('\n');

const getLogLineClass = (line: string) => {
    const lowerLine = line.toLowerCase();
    if (lowerLine.includes('error') || lowerLine.includes('failed')) return 'text-red-400';
    if (lowerLine.includes('warning')) return 'text-yellow-400';
    if (lowerLine.includes('info')) return 'text-blue-400';
    if (lowerLine.includes('debug')) return 'text-gray-500';
    return 'text-gray-300';
};

const Run: React.FC = () => {
    const [runMode, setRunMode] = useState('live');
    const [showForwardedFrom, setShowForwardedFrom] = useState(false);
    const [syncOnDelete, setSyncOnDelete] = useState(false);
    const [logLinesCount, setLogLinesCount] = useState(100);
    const [isRunning, setIsRunning] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [uptime, setUptime] = useState(0);
    const logContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let logInterval: ReturnType<typeof setInterval>;
        if (isRunning) {
            let logIndex = 0;
            logInterval = setInterval(() => {
                setLogs(prev => [...prev, logDataSource[logIndex]]);
                logIndex = (logIndex + 1) % logDataSource.length; // Loop for demo
            }, 1000);
        }
        return () => clearInterval(logInterval);
    }, [isRunning]);

    useEffect(() => {
        let timerInterval: ReturnType<typeof setInterval>;
        if (isRunning) {
            setUptime(0);
            timerInterval = setInterval(() => setUptime(prev => prev + 1), 1000);
        }
        return () => clearInterval(timerInterval);
    }, [isRunning]);

    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [logs]);

    const handleToggleRun = () => {
        if (!isRunning) setLogs([]);
        setIsRunning(prev => !prev);
    };

    const clearLogs = () => setLogs([]);

    const formatUptime = (seconds: number) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const displayedLogs = logs.slice(-logLinesCount);

    return (
        <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Run & Monitor</h1>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</h3>
                    <div className={`mt-2 flex items-center gap-2 text-lg font-semibold ${isRunning ? 'text-green-500' : 'text-red-500'}`}>
                        {isRunning ? <Power className="h-5 w-5" /> : <PowerOff className="h-5 w-5" />}
                        <span>{isRunning ? 'Running' : 'Stopped'}</span>
                    </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Uptime</h3>
                    <p className="mt-2 font-mono text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {isRunning ? formatUptime(uptime) : '00:00:00'}
                    </p>
                </div>
            </div>

            <div className="mb-6">
                <CollapsibleSection title="Configure Run">
                    <div className="space-y-6 p-2">
                        <Checkbox id="show-forwarded-from" label="Show 'Forwarded from'" checked={showForwardedFrom} onChange={setShowForwardedFrom} />
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Choose mode</label>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center">
                                    <input id="live" name="runMode" type="radio" value="live" checked={runMode === 'live'} onChange={(e) => setRunMode(e.target.value)} className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700" />
                                    <label htmlFor="live" className="ml-2 block text-sm text-gray-900 dark:text-gray-200">Live</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="past" name="runMode" type="radio" value="past" checked={runMode === 'past'} onChange={(e) => setRunMode(e.target.value)} className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700" />
                                    <label htmlFor="past" className="ml-2 block text-sm text-gray-900 dark:text-gray-200">Past</label>
                                </div>
                            </div>
                        </div>
                        <Checkbox id="sync-on-delete" label="Sync when a message is deleted" checked={syncOnDelete} onChange={setSyncOnDelete} />
                        <button type="button" className="w-auto rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800">Save</button>
                    </div>
                </CollapsibleSection>
            </div>

            <div className="mb-6 flex items-center space-x-4">
                <button onClick={handleToggleRun} className={`flex items-center gap-2 rounded-md px-6 py-2 font-semibold text-white shadow-sm transition-colors ${isRunning ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}>
                    {isRunning ? <StopCircle className="h-5 w-5" /> : <PlayCircle className="h-5 w-5" />}
                    <span>{isRunning ? 'Stop' : 'Run'}</span>
                </button>
                <button onClick={clearLogs} className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800">
                    <Trash2 className="h-4 w-4" />
                    <span>Clear Logs</span>
                </button>
            </div>

            <div className="mb-6 pt-4">
                <label htmlFor="log-lines" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Lines of logs to show</label>
                <span className="font-bold text-sm text-blue-600 dark:text-blue-400">{logLinesCount}</span>
                <input id="log-lines" type="range" min="10" max="1000" value={logLinesCount} onChange={(e) => setLogLinesCount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600 mt-1" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10</span>
                    <span>1000</span>
                </div>
            </div>
            
            <div className="rounded-lg bg-gray-900 text-white shadow-inner">
                <div className="flex items-center justify-between border-b border-gray-700/50 p-3">
                    <p className="font-mono text-sm">Terminal</p>
                    <div className="flex items-center space-x-2">
                         <span className="h-3 w-3 rounded-full bg-red-500"></span>
                         <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                         <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    </div>
                </div>
                <div ref={logContainerRef} className="h-96 overflow-y-auto p-4 font-mono text-xs leading-relaxed">
                    {logs.length > 0 ? (
                        displayedLogs.map((line, index) => (
                            <div key={index}>
                                <span className="mr-2 text-gray-500 select-none">{String(index + 1).padStart(3, ' ')}</span>
                                <span className={getLogLineClass(line)}>{line}</span>
                            </div>
                        ))
                    ) : (
                        <div className="flex h-full items-center justify-center text-gray-500">
                            No logs to display. Click 'Run' to start the process.
                        </div>
                    )}
                </div>
                <div className="border-t border-gray-700/50 p-2 text-center text-xs text-gray-400">
                    {isRunning ? 'Streaming logs...' : 'Terminal idle'}
                </div>
            </div>
        </div>
    );
};

export default Run;