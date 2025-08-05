import React, { useState } from 'react';

const Admins: React.FC = () => {
    const [admins, setAdmins] = useState('@LuciferWorld7\n@Dev_User7');

    return (
        <div className="max-w-2xl">
            <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Admins</h1>
            <div className="rounded-lg border border-slate-200 bg-white p-1 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <textarea
                    value={admins}
                    onChange={(e) => setAdmins(e.target.value)}
                    rows={4}
                    className="w-full resize-none rounded-md border-0 bg-slate-50 p-4 text-gray-700 focus:ring-0 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                    placeholder="Add admin usernames, one per line."
                />
            </div>
            <p className="mb-4 mt-2 text-sm text-gray-500 dark:text-gray-400">Add the usernames of admins. One in each line.</p>
            <button
                type="button"
                className="w-auto rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
            >
                Save
            </button>
        </div>
    );
};

export default Admins;
