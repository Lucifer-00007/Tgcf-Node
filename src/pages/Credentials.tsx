import React, { useState } from 'react';
import { CollapsibleSection } from '../components/CollapsibleSection';

const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const EyeSlashIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243L6.228 6.228" />
    </svg>
);


interface PasswordInputProps {
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ id, label, value, onChange, placeholder }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="mb-6">
            <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
            <div className="relative">
                <input
                    id={id}
                    type={visible ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                />
                <button
                    type="button"
                    onClick={() => setVisible(!visible)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400"
                >
                    {visible ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
            </div>
        </div>
    );
};

const Credentials: React.FC = () => {
    const [apiId, setApiId] = useState('**********');
    const [apiHash, setApiHash] = useState('**********************');
    const [botToken, setBotToken] = useState('**********************');
    const [sessionString, setSessionString] = useState('');
    const [accountType, setAccountType] = useState('bot');

    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Telegram Credentials</h1>
            <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <PasswordInput
                    id="api-id"
                    label="API ID"
                    value={apiId}
                    onChange={(e) => setApiId(e.target.value)}
                />
                <PasswordInput
                    id="api-hash"
                    label="API HASH"
                    value={apiHash}
                    onChange={(e) => setApiHash(e.target.value)}
                />
                
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    You can get api id and api hash from <a href="https://my.telegram.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">https://my.telegram.org</a>.
                </p>

                <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Choose account type</label>
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center">
                            <input
                                id="bot"
                                name="accountType"
                                type="radio"
                                value="bot"
                                checked={accountType === 'bot'}
                                onChange={(e) => setAccountType(e.target.value)}
                                className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700"
                            />
                            <label htmlFor="bot" className="ml-3 block text-sm text-gray-900 dark:text-gray-200">
                                Bot
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="user"
                                name="accountType"
                                type="radio"
                                value="user"
                                checked={accountType === 'user'}
                                onChange={(e) => setAccountType(e.target.value)}
                                className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700"
                            />
                            <label htmlFor="user" className="ml-3 block text-sm text-gray-900 dark:text-gray-200">
                                User
                            </label>
                        </div>
                    </div>
                </div>

                {accountType === 'bot' && (
                    <PasswordInput
                        id="bot-token"
                        label="Enter bot token"
                        value={botToken}
                        onChange={(e) => setBotToken(e.target.value)}
                    />
                )}

                {accountType === 'user' && (
                    <>
                        <PasswordInput
                            id="session-string"
                            label="Enter session string"
                            value={sessionString}
                            onChange={(e) => setSessionString(e.target.value)}
                        />
                        <div className="-mt-2">
                            <CollapsibleSection title="How to get session string ?">
                                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                                    <p>
                                        Link to repl: <a href="https://replit.com/@aahnik/tg-login?v=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">https://replit.com/@aahnik/tg-login?v=1</a>
                                    </p>
                                    <p>
                                        Click on the above link and enter api id, api hash, and phone no to generate session string.
                                    </p>
                                    <div>
                                        <p className="font-semibold text-gray-700 dark:text-gray-300">Note from developer:</p>
                                        <p className="mt-1">
                                            Due some issues logging in with a user account using a phone no is not supported in this web interface.
                                        </p>
                                        <p className="mt-2">
                                            I have built a command-line program named tg-login (<a href="https://github.com/aahnik/tg-login" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">https://github.com/aahnik/tg-login</a>) that can generate the session string for you.
                                        </p>
                                        <p className="mt-2">
                                            You can run tg-login on your computer, or securely in this repl. tg-login is open source, and you can also inspect the bash script running in the repl.
                                        </p>
                                    </div>
                                    <p>
                                        What is a session string ? <a href="https://docs.telethon.dev/en/stable/concepts/sessions.html#string-sessions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">https://docs.telethon.dev/en/stable/concepts/sessions.html#string-sessions</a>
                                    </p>
                                </div>
                            </CollapsibleSection>
                        </div>
                    </>
                )}

                <button
                    type="button"
                    className="mt-6 w-auto rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default Credentials;