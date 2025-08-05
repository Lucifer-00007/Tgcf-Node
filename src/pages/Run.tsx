import React, { useState } from 'react';
import { Checkbox } from '../components/Checkbox';
import { Alert } from '../components/Alert';
import { PlayCircle } from 'lucide-react';
import { CollapsibleSection } from '../components/CollapsibleSection';

const logData = `
2024/05/27 10:37:32 UTC INFO     Running tgcf 1.1.0 (main, Oct  2 2023, 21:59:40) [GCC 8.3.0]
2024/05/27 10:37:32 UTC INFO     Running on session 'tgcf'
2024/05/27 10:37:32 UTC INFO     live_mode is False.
2024/05/27 10:37:32 UTC INFO     Past mode is enabled.
2024/05/27 10:37:32 UTC INFO     Fetching messages from source...
2024/05/27 10:37:33 UTC INFO     Using bot account
2024/05/27 10:37:34 UTC INFO     Signed in as My Bot (123456789)
2024/05/27 10:37:34 UTC INFO     config.source = -1001392052324
2024/05/27 10:37:34 UTC INFO     config.dest = [-1001134939864]
2024/05/27 10:37:34 UTC INFO     No. of sources = 1
2024/05/27 10:37:34 UTC INFO     No. of destinations = 1
2024/05/27 10:37:34 UTC INFO     Forwarding from -1001392052324 to [-1001134939864]
2024/05/27 10:37:34 UTC INFO     Peer found for source -1001392052324
2024/05/27 10:37:34 UTC INFO     Peer found for dest -1001134939864
2024/05/27 10:37:34 UTC INFO     last_read_message_id is 0
2024/05/27 10:37:34 UTC INFO     offset is 0
2024/05/27 10:37:34 UTC INFO     end is 0
2024/05/27 10:37:34 UTC INFO     Getting message history from peer channel(id=-1001392052324)
2024/05/27 10:37:35 UTC INFO     Total messages found are 11214
2024/05/27 10:37:35 UTC INFO     Forwarding 11214 messages
`;

const Run: React.FC = () => {
    const [runMode, setRunMode] = useState('live');
    const [showForwardedFrom, setShowForwardedFrom] = useState(false);
    const [syncOnDelete, setSyncOnDelete] = useState(false);
    const [logLines, setLogLines] = useState(100);

    const logs = logData.trim().split('\n');
    const displayedLogs = logs.slice(-logLines).join('\n');

    return (
        <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Run</h1>

            <Alert type="info" icon={<PlayCircle className="h-5 w-5" />}>
                Start or stop the tgcf process here. Choose your run mode (Live or Past) and monitor the real-time logs below.
            </Alert>

            <div className="mt-6 mb-6">
                <CollapsibleSection title="Configure Run">
                    <div className="space-y-6 p-2">
                        <Checkbox 
                            id="show-forwarded-from" 
                            label="Show 'Forwarded from'" 
                            checked={showForwardedFrom} 
                            onChange={setShowForwardedFrom} 
                        />
                        
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Choose mode</label>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center">
                                    <input
                                        id="live"
                                        name="runMode"
                                        type="radio"
                                        value="live"
                                        checked={runMode === 'live'}
                                        onChange={(e) => setRunMode(e.target.value)}
                                        className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-red-600"
                                    />
                                    <label htmlFor="live" className="ml-2 block text-sm text-gray-900 dark:text-gray-200">
                                        live
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="past"
                                        name="runMode"
                                        type="radio"
                                        value="past"
                                        checked={runMode === 'past'}
                                        onChange={(e) => setRunMode(e.target.value)}
                                        className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-red-600"
                                    />
                                    <label htmlFor="past" className="ml-2 block text-sm text-gray-900 dark:text-gray-200">
                                        past
                                    </label>
                                </div>
                            </div>
                        </div>

                        <Checkbox 
                            id="sync-on-delete" 
                            label="Sync when a message is deleted" 
                            checked={syncOnDelete} 
                            onChange={setSyncOnDelete} 
                        />

                        <button
                            type="button"
                            className="w-auto rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
                        >
                            Save
                        </button>
                    </div>
                </CollapsibleSection>
            </div>

            <div className="my-6">
                <Alert type="warning">
                    You must click stop and then re-run tgcf to apply changes in config.
                </Alert>
            </div>

            <div className="mb-6 flex items-center space-x-4">
                <button className="rounded-md bg-red-600 px-6 py-2 font-semibold text-white shadow-sm hover:bg-red-700">
                    Stop
                </button>
            </div>

            <div className="mb-6 pt-4">
                <label htmlFor="log-lines" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Lines of logs to show
                </label>
                <span className="text-red-600 font-bold text-sm">{logLines}</span>
                <input
                    id="log-lines"
                    type="range"
                    min="100"
                    max="1000"
                    value={logLines}
                    onChange={(e) => setLogLines(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-red-600 mt-1"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>100</span>
                    <span>1000</span>
                </div>
            </div>
            
            <div className="rounded-lg bg-gray-800 text-white shadow-inner">
                <div className="flex items-center justify-between border-b border-gray-700 p-4">
                    <p className="font-mono text-sm">Logs</p>
                    <div className="flex items-center space-x-2">
                         <span className="h-3 w-3 rounded-full bg-red-500"></span>
                         <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                         <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    </div>
                </div>
                <div className="h-96 overflow-y-auto whitespace-pre-wrap p-4 font-mono text-sm leading-relaxed">
                    {displayedLogs}
                </div>
                <div className="border-t border-gray-700 p-2 text-center text-xs text-gray-400">
                    (streaming)
                </div>
            </div>
        </div>
    );
};

export default Run;