
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
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4 border-b border-gray-200">
                <div className="flex-grow flex items-center space-x-1">
                    {connections.map((conn, index) => (
                        <button
                            key={conn.id}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-2 text-sm font-medium rounded-t-md ${
                                activeTab === index
                                    ? 'border-b-2 border-green-500 text-green-600 bg-white'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <span className={`inline-block w-2 h-2 rounded-full mr-2 ${activeTab === index ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                            {conn.name}
                        </button>
                    ))}
                </div>
                <button
                    onClick={addNewConnection}
                    className="ml-4 text-sm text-green-600 hover:text-green-800 font-medium"
                >
                    + Add new connection
                </button>
            </div>

            <div className="space-y-4">
                <CollapsibleSection title="Modify Metadata">
                    <label htmlFor="conn-name" className="block text-sm font-medium text-gray-700 mb-1">Name of this connection</label>
                    <input id="conn-name" type="text" defaultValue={`Connection ${activeTab + 1}`} className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    <div className="my-4">
                        <Alert>
                            You can untick the below checkbox to suspend this connection.
                        </Alert>
                    </div>
                    <Checkbox id="use-conn" label="Use this connection" checked={useThisConnection} onChange={setUseThisConnection} />
                </CollapsibleSection>

                <CollapsibleSection title="Source and Destination">
                    <p className="text-sm font-medium text-gray-700 mb-1">Configure connection {activeTab + 1}</p>
                    <label htmlFor="source" className="block text-xs font-medium text-gray-500 mt-4 mb-1">Source</label>
                    <input id="source" type="text" defaultValue="-1001392052324" className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    <p className="text-xs text-gray-500 mt-1">only one source is allowed in a connection</p>

                    <label htmlFor="destinations" className="block text-xs font-medium text-gray-500 mt-4 mb-1">Destinations</label>
                    <textarea id="destinations" rows={4} defaultValue="-1001134939864" className="w-full p-4 bg-slate-100 border border-slate-200 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y"></textarea>
                    <p className="text-xs text-gray-500 mt-1">Write destinations one item per line</p>
                </CollapsibleSection>

                <CollapsibleSection title="Past Mode Settings">
                    <label htmlFor="offset" className="block text-sm font-medium text-gray-700 mb-1">Offset</label>
                    <input id="offset" type="text" defaultValue="0" className="w-full mb-4 px-4 py-2 bg-slate-100 border border-slate-200 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    <label htmlFor="end" className="block text-sm font-medium text-gray-700 mb-1">End</label>
                    <input id="end" type="text" defaultValue="0" className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </CollapsibleSection>

                <CollapsibleSection title="Delete this connection">
                    <Alert type="warning">
                        Clicking the 'Remove' button will <strong>delete connection {activeTab + 1}</strong>. This action cannot be reversed once done.
                    </Alert>
                    <button
                        type="button"
                        className="mt-4 w-auto px-4 py-2 bg-red-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Remove connection {activeTab + 1}
                    </button>
                </CollapsibleSection>

                <button
                    type="button"
                    className="w-auto px-6 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default Connections;
