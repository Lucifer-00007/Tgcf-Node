
import React, { useState } from 'react';

const Admins: React.FC = () => {
    const [admins, setAdmins] = useState('@LuciferWorld7\n@Dev_User7');

    return (
        <div className="max-w-2xl">
            <h1 className="text-2xl font-semibold mb-6">Admins</h1>
            <div className="bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
                <textarea
                    value={admins}
                    onChange={(e) => setAdmins(e.target.value)}
                    rows={4}
                    className="w-full p-4 bg-slate-50 border-0 rounded-md focus:ring-0 resize-none text-gray-700"
                    placeholder="Add admin usernames, one per line."
                />
            </div>
            <p className="text-sm text-gray-500 mt-2 mb-4">Add the usernames of admins. One in each line.</p>
            <button
                type="button"
                className="w-auto px-6 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Save
            </button>
        </div>
    );
};

export default Admins;
