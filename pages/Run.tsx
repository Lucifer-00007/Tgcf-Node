
import React, { useState } from 'react';
import { Checkbox } from '../components/Checkbox';
import { Alert } from '../components/Alert';

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
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Run</h1>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm mb-6">
                <h2 className="text-lg font-medium mb-4">Configuration</h2>
                <Checkbox id="live-mode" label="Live Transfer Mode" checked={liveMode} onChange={setLiveMode} />
                <Checkbox id="past-mode" label="Past Transfer Mode" checked={pastMode} onChange={setPastMode} />
                <div className="my-4">
                    <Alert type="warning">
                        You must click the save button for changes to apply.
                    </Alert>
                </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
                <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700">
                    Stop
                </button>
                <button className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md shadow-sm hover:bg-gray-300">
                    Clear
                </button>
            </div>
            
            <div className="bg-gray-800 text-white rounded-lg shadow-inner">
                <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                    <p className="text-sm font-mono">Logs</p>
                    <div className="flex items-center space-x-2">
                         <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                         <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                         <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                </div>
                <div className="p-4 h-96 overflow-y-auto font-mono text-sm whitespace-pre-wrap leading-relaxed">
                    {logData}
                </div>
                <div className="p-2 border-t border-gray-700 text-xs text-gray-400 text-center">
                    (streaming)
                </div>
            </div>
        </div>
    );
};

export default Run;
