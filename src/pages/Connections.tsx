import React, { useState } from 'react';
import { CollapsibleSection } from '../components/CollapsibleSection';
import { Checkbox } from '../components/Checkbox';
import { Alert } from '../components/Alert';
import { Connection } from '../types';
import { PlusCircle, Trash2, Save, Link as LinkIcon } from 'lucide-react';

const initialConnections: Connection[] = [
    { id: 1, name: 'Main Forward', enabled: true, source: '-1001392052324', destinations: ['-1001134939864', '-1001134939865'], offset: '0', end: '0' },
    { id: 2, name: 'Backup Channel', enabled: false, source: '-1001392052324', destinations: ['-1001134939866'], offset: '0', end: '0' },
];

const Connections: React.FC = () => {
    const [connections, setConnections] = useState<Connection[]>(initialConnections);
    const [activeTab, setActiveTab] = useState(0);
    const [newDestination, setNewDestination] = useState('');

    const activeConnection = connections[activeTab];

    const handleUpdate = (field: keyof Connection, value: any) => {
        const newConnections = [...connections];
        newConnections[activeTab] = { ...newConnections[activeTab], [field]: value };
        setConnections(newConnections);
    };

    const handleAddDestination = () => {
        if (newDestination && activeConnection && !activeConnection.destinations.includes(newDestination)) {
            const updatedDests = [...activeConnection.destinations, newDestination];
            handleUpdate('destinations', updatedDests);
            setNewDestination('');
        }
    };

    const handleRemoveDestination = (destToRemove: string) => {
        if (activeConnection) {
            const updatedDests = activeConnection.destinations.filter(d => d !== destToRemove);
            handleUpdate('destinations', updatedDests);
        }
    };

    const addNewConnection = () => {
        const newId = connections.length > 0 ? Math.max(...connections.map(c => c.id)) + 1 : 1;
        const newConnection: Connection = {
            id: newId,
            name: `Connection ${newId}`,
            enabled: true,
            source: '',
            destinations: [],
            offset: '0',
            end: '0',
        };
        setConnections([...connections, newConnection]);
        setActiveTab(connections.length);
    };

    const removeConnection = (index: number) => {
        if (window.confirm(`Are you sure you want to delete "${connections[index].name}"?`)) {
            const newConnections = connections.filter((_, i) => i !== index);
            setConnections(newConnections);
            setActiveTab(Math.max(0, index - 1));
        }
    };

    return (
        <div className="mx-auto max-w-4xl pb-24">
            <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Connections</h1>
            
            <Alert type="info" icon={<LinkIcon className="h-5 w-5" />}>
                Connections define the flow of messages from a source to one or more destinations. Configure your forwarding rules here.
            </Alert>

            <div className="mt-6 mb-6 flex items-center border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-grow items-center space-x-1 overflow-x-auto">
                    {connections.map((conn, index) => (
                        <button
                            key={conn.id}
                            onClick={() => setActiveTab(index)}
                            className={`group relative flex-shrink-0 rounded-t-md px-4 py-2.5 text-sm font-medium transition-colors ${
                                activeTab === index
                                    ? 'border-b-2 border-blue-500 bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-400'
                                    : 'text-gray-500 hover:bg-slate-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-gray-200'
                            }`}
                        >
                            <span className={`mr-2 inline-block h-2 w-2 rounded-full transition-colors ${conn.enabled ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                            {conn.name}
                        </button>
                    ))}
                </div>
                <button
                    onClick={addNewConnection}
                    className="ml-4 flex flex-shrink-0 items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                    <PlusCircle className="h-4 w-4" />
                    <span>Add New</span>
                </button>
            </div>

            {activeConnection ? (
                <div className="space-y-4">
                    <CollapsibleSection title="General Settings">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="conn-name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Connection Name</label>
                                <input 
                                    id="conn-name" 
                                    type="text" 
                                    value={activeConnection.name}
                                    onChange={(e) => handleUpdate('name', e.target.value)}
                                    className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200" 
                                />
                            </div>
                            <div className="pt-6">
                                <Checkbox 
                                    id="use-conn" 
                                    label="Enable this connection" 
                                    checked={activeConnection.enabled} 
                                    onChange={(checked) => handleUpdate('enabled', checked)} 
                                    description="Untick to suspend this connection."
                                />
                            </div>
                        </div>
                    </CollapsibleSection>

                    <CollapsibleSection title="Source and Destinations">
                        <div>
                            <label htmlFor="source" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">Source</label>
                            <input 
                                id="source" 
                                type="text" 
                                value={activeConnection.source}
                                onChange={(e) => handleUpdate('source', e.target.value)}
                                placeholder="Enter a single source ID (e.g., -100... or @channel)"
                                className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200" 
                            />
                        </div>
                        <div className="mt-4">
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">Destinations</label>
                            <div className="rounded-lg border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="p-6">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Add destination IDs one by one.</p>
                                    <div className="mt-4 flex gap-2">
                                        <input
                                            type="text"
                                            value={newDestination}
                                            onChange={(e) => setNewDestination(e.target.value)}
                                            className="flex-grow rounded-md border-slate-200 bg-slate-100 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                            placeholder="Enter new destination ID"
                                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddDestination(); } }}
                                        />
                                        <button
                                            onClick={handleAddDestination}
                                            className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                                        >
                                            <PlusCircle className="h-4 w-4" />
                                            <span>Add</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="border-t border-slate-200 dark:border-gray-700">
                                    <ul className="divide-y divide-slate-200 dark:divide-gray-700">
                                        {activeConnection.destinations.length > 0 ? (
                                            activeConnection.destinations.map((dest, index) => (
                                                <li key={index} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-gray-700/50">
                                                    <span className="font-mono text-sm text-gray-700 dark:text-gray-300">{dest}</span>
                                                    <button 
                                                        onClick={() => handleRemoveDestination(dest)}
                                                        className="text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                                                        title={`Remove ${dest}`}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                                                No destinations configured.
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </CollapsibleSection>

                    <CollapsibleSection title="Past Mode Settings">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="offset" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Offset</label>
                                <input 
                                    id="offset" 
                                    type="number" 
                                    value={activeConnection.offset}
                                    onChange={(e) => handleUpdate('offset', e.target.value)}
                                    className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200" 
                                />
                            </div>
                            <div>
                                <label htmlFor="end" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">End</label>
                                <input 
                                    id="end" 
                                    type="number" 
                                    value={activeConnection.end}
                                    onChange={(e) => handleUpdate('end', e.target.value)}
                                    className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200" 
                                />
                            </div>
                        </div>
                    </CollapsibleSection>
                </div>
            ) : (
                <div className="py-16 text-center">
                    <p className="text-gray-500 dark:text-gray-400">No connections configured.</p>
                    <button onClick={addNewConnection} className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
                        Add your first connection
                    </button>
                </div>
            )}

            {/* Floating Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-slate-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/80">
                <div className="mx-auto flex max-w-4xl items-center justify-end gap-4 px-4 py-3">
                    <button
                        type="button"
                        onClick={() => removeConnection(activeTab)}
                        disabled={!activeConnection}
                        className="flex items-center gap-2 rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-600 shadow-sm transition-colors hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                        <Trash2 className="h-4 w-4" />
                        <span>Delete</span>
                    </button>
                    <button
                        type="button"
                        disabled={!activeConnection}
                        className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-gray-800"
                    >
                        <Save className="h-4 w-4" />
                        <span>Save Changes</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Connections;