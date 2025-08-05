import React, { useState } from 'react';
import { CollapsibleSection } from '../components/CollapsibleSection';
import { User, Camera } from 'lucide-react';
import toast from 'react-hot-toast';

const Profile: React.FC = () => {
    const [name, setName] = useState('TGCF User');
    const [email, setEmail] = useState('user@example.com');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [avatar, setAvatar] = useState<string | null>(null);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setAvatar(URL.createObjectURL(file));
            toast.success('Avatar selected. Click "Save Profile" to apply.');
        }
    };

    const handleSaveChanges = () => {
        // In a real app, you'd make an API call here.
        console.log('Saving profile...', { name, avatar });
        toast.success('Profile updated successfully!');
    };

    const handleChangePassword = () => {
        if (!newPassword || !confirmPassword) {
            toast.error('Please fill in all password fields.');
            return;
        }
        if (newPassword !== confirmPassword) {
            toast.error('New passwords do not match.');
            return;
        }
        // In a real app, you'd make an API call here.
        console.log('Changing password...');
        toast.success('Password changed successfully!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Profile Settings</h1>

            <div className="space-y-6">
                <CollapsibleSection title="Profile Information" defaultOpen={true}>
                    <div className="flex flex-col items-center gap-6 sm:flex-row">
                        <div className="relative">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-200 text-slate-500 dark:bg-gray-700 dark:text-gray-400">
                                {avatar ? (
                                    <img src={avatar} alt="Avatar Preview" className="h-full w-full rounded-full object-cover" />
                                ) : (
                                    <User size={48} />
                                )}
                            </div>
                            <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white ring-2 ring-white transition hover:bg-blue-700 dark:ring-gray-800">
                                <Camera size={16} />
                                <input id="avatar-upload" type="file" className="absolute inset-0 h-full w-full cursor-pointer opacity-0" onChange={handleAvatarChange} accept="image/*" />
                            </label>
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
                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            onClick={handleSaveChanges}
                            className="w-auto rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        >
                            Save Profile
                        </button>
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
                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            onClick={handleChangePassword}
                            className="w-auto rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        >
                            Update Password
                        </button>
                    </div>
                </CollapsibleSection>
            </div>
        </div>
    );
};

export default Profile;