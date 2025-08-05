import React, { useState } from 'react';
import { Checkbox } from '../components/Checkbox';
import { Alert } from '../components/Alert';
import { PlayCircle } from 'lucide-react';

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
    const [liveMode, setLiveMode] = useState(false);
    const [pastMode, setPastMode] = useState(true);

    return (
        <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Run</h1>

            <Alert type="info" icon={<PlayCircle className="h-5 w-5" />}>
                Start or stop the tgcf process here. Choose your run mode (Live or Past) and monitor the real-time logs below.
            </Alert>

            <div className="mt-6 mb-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h2 className="mb-4 text-lg font-medium dark:text-gray-200">Configuration</h2>
                <Checkbox id="live-mode" label="Live Transfer Mode" checked={liveMode} onChange={setLiveMode} className="mb-4" />
                <Checkbox id="past-mode" label="Past Transfer Mode" checked={pastMode} onChange={setPastMode} className="mb-4" />
                <div className="my-4">
                    <Alert type="warning">
                        You must click the save button for changes to apply.
                    </Alert>
                </div>
                 <button
                    type="button"
                    className="w-auto rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
                >
                    Save
                </button>
            </div>

            <div className="mb-6 flex items-center space-x-4">
                <button className="rounded-md bg-red-600 px-6 py-2 font-semibold text-white shadow-sm hover:bg-red-700">
                    Stop
                </button>
                <button className="rounded-md bg-gray-200 px-6 py-2 font-semibold text-gray-800 shadow-sm hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500">
                    Clear
                </button>
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
                    {logData}
                </div>
                <div className="border-t border-gray-700 p-2 text-center text-xs text-gray-400">
                    (streaming)
                </div>
            </div>
        </div>
    );
};

export default Run;