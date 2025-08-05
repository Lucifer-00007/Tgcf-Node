import React, { useState } from 'react';
import { CollapsibleSection } from '../components/CollapsibleSection';
import { Checkbox } from '../components/Checkbox';
import { Alert } from '../components/Alert';

const Connections: React.FC = () => {
    const [connections, setConnections] = useState([
        { id: 1, name: 'Connection 1' },
        { id: 2, name: 'Connection 2' },
        { id: 3, name: 'Connection 3' },
        { id: 4, name: 'Connection 4' },
        { id: 5, name: 'Connection 5' },
    ]);
    const [activeTab, setActiveTab] = useState(0);
    const [useThisConnection, setUseThisConnection] = useState(true);

    const addNewConnection = () => {
        const newId = connections.length > 0 ? Math.max(...connections.map(c => c.id)) + 1 : 1;
        setConnections([...connections, { id: newId, name: `Connection ${newId}` }]);
        setActiveTab(connections.length);
    };

    return (
        <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Connections</h1>
            <div className="mb-4 flex items-center border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-grow items-center space-x-1 overflow-x-auto">
                    {connections.map((conn, index) => (
                        <button
                            key={conn.id}
                            onClick={() => setActiveTab(index)}
                            className={`flex-shrink-0 rounded-t-md px-4 py-2 text-sm font-medium ${
                                activeTab === index
                                    ? 'border-b-2 border-green-500 bg-white text-green-600 dark:bg-gray-800 dark:text-green-400'
                                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                            }`}
                        >
                            <span className={`mr-2 inline-block h-2 w-2 rounded-full ${activeTab === index ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                            {conn.name}
                        </button>
                    ))}
                </div>
                <button
                    onClick={addNewConnection}
                    className="ml-4 flex-shrink-0 text-sm font-medium text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
                >
                    + Add new
                </button>
            </div>

            <div className="space-y-4">
                <CollapsibleSection title="Modify Metadata">
                    <label htmlFor="conn-name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Name of this connection</label>
                    <input id="conn-name" type="text" defaultValue={`Connection ${activeTab + 1}`} className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200" />
                    <div className="my-4">
                        <Alert>
                            You can untick the below checkbox to suspend this connection.
                        </Alert>
                    </div>
                    <Checkbox id="use-conn" label="Use this connection" checked={useThisConnection} onChange={setUseThisConnection} />
                </CollapsibleSection>

                <CollapsibleSection title="Source and Destination">
                    <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Configure connection {activeTab + 1}</p>
                    <label htmlFor="source" className="mb-1 mt-4 block text-xs font-medium text-gray-500 dark:text-gray-400">Source</label>
                    <input id="source" type="text" defaultValue="-1001392052324" className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200" />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">only one source is allowed in a connection</p>

                    <label htmlFor="destinations" className="mb-1 mt-4 block text-xs font-medium text-gray-500 dark:text-gray-400">Destinations</label>
                    <textarea id="destinations" rows={4} defaultValue="-1001134939864" className="w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"></textarea>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Write destinations one item per line</p>
                </CollapsibleSection>

                <CollapsibleSection title="Past Mode Settings">
                    <label htmlFor="offset" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Offset</label>
                    <input id="offset" type="text" defaultValue="0" className="mb-4 w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200" />
                    <label htmlFor="end" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">End</label>
                    <input id="end" type="text" defaultValue="0" className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200" />
                </CollapsibleSection>

                <CollapsibleSection title="Delete this connection">
                    <Alert type="warning">
                        Clicking the 'Remove' button will <strong>delete connection {activeTab + 1}</strong>. This action cannot be reversed once done.
                    </Alert>
                    <button
                        type="button"
                        className="mt-4 w-auto rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    >
                        Remove connection {activeTab + 1}
                    </button>
                </CollapsibleSection>

                <button
                    type="button"
                    className="w-auto rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default Connections;
