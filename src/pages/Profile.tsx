import React, { useState } from 'react';
import { CollapsibleSection } from '../components/CollapsibleSection';
import { User, Camera } from 'lucide-react';

const Profile: React.FC = () => {
    const [name, setName] = useState('TGCF User');
    const [email, setEmail] = useState('user@example.com');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Profile Settings</h1>

            <div className="space-y-6">
                <CollapsibleSection title="Profile Information" defaultOpen={true}>
                    <div className="flex flex-col items-center gap-6 sm:flex-row">
                        <div className="relative">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-200 text-slate-500 dark:bg-gray-700 dark:text-gray-400">
                                <User size={48} />
                            </div>
                            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white ring-2 ring-white transition hover:bg-blue-700 dark:ring-gray-800">
                                <Camera size={16} />
                                <input type="file" className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                            </button>
                        </div>
                        <div className="flex-grow space-y-4">
                            <div>
                                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    disabled
                                    className="w-full rounded-md border-slate-200 bg-slate-200 px-4 py-2 text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
                                />
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Change Password" defaultOpen={true}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="current-password"
                                   className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Current
                                Password</label>
                            <input
                                id="current-password"
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="new-password"
                                   className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">New
                                Password</label>
                            <input
                                id="new-password"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password"
                                   className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm
                                New Password</label>
                            <input
                                id="confirm-password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                            />
                        </div>
                    </div>
                </CollapsibleSection>

                <div className="flex justify-end">
                    <button
                        type="button"
                        className="w-auto rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;