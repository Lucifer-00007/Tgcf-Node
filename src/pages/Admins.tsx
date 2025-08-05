import React, { useState } from 'react';
import { ShieldCheck, UserPlus, Trash2 } from 'lucide-react';
import { Alert } from '../components/Alert';

const Admins: React.FC = () => {
    const [admins, setAdmins] = useState<string[]>([
        '@LuciferWorld7',
        '@Dev_User7',
    ]);
    const [newAdmin, setNewAdmin] = useState('');

    const handleAddAdmin = () => {
        if (newAdmin && !admins.includes(newAdmin)) {
            setAdmins([...admins, newAdmin]);
            setNewAdmin('');
        }
    };

    const handleRemoveAdmin = (adminToRemove: string) => {
        setAdmins(admins.filter(admin => admin !== adminToRemove));
    };

    return (
        <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Manage Admins</h1>
            
            <Alert type="info" icon={<ShieldCheck className="h-5 w-5" />}>
                Admins have special privileges to control the bot and access restricted commands. Add trusted user IDs or usernames.
            </Alert>

            <div className="mt-6 rounded-lg border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">Admin List</h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Add or remove users who can manage the bot.
                    </p>

                    <div className="mt-4 flex gap-2">
                        <input
                            type="text"
                            value={newAdmin}
                            onChange={(e) => setNewAdmin(e.target.value)}
                            className="flex-grow rounded-md border-slate-200 bg-slate-100 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                            placeholder="Enter new admin username or ID"
                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddAdmin(); } }}
                        />
                        <button
                            onClick={handleAddAdmin}
                            className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        >
                            <UserPlus className="h-4 w-4" />
                            <span>Add</span>
                        </button>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-gray-700">
                    <ul className="divide-y divide-slate-200 dark:divide-gray-700">
                        {admins.length > 0 ? (
                            admins.map((admin, index) => (
                                <li key={index} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-gray-700/50">
                                    <span className="font-mono text-sm text-gray-700 dark:text-gray-300">{admin}</span>
                                    <button 
                                        onClick={() => handleRemoveAdmin(admin)}
                                        className="text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                                        title={`Remove ${admin}`}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                                No admins configured.
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="mt-6 flex justify-end">
                <button
                    type="button"
                    className="w-auto rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Admins;