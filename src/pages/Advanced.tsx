import React, { useState } from 'react';
import { CollapsibleSection } from '../components/CollapsibleSection';
import { Checkbox } from '../components/Checkbox';
import { Alert } from '../components/Alert';

const Advanced: React.FC = () => {
    const [agreed, setAgreed] = useState(false);
    const [enforceSeq, setEnforceSeq] = useState(false);
    const [deleteOnEdit, setDeleteOnEdit] = useState(false);
    const [customizeBot, setCustomizeBot] = useState(false);

    return (
        <div className="mx-auto max-w-3xl">
             <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Advanced</h1>
            <Alert type="warning">This page is for developers and advanced users.</Alert>

            <div className="mt-6">
                <Checkbox id="agree" label="I agree to proceed with caution" checked={agreed} onChange={setAgreed} className="mb-4" />
            </div>

            {agreed && (
                <div className="mt-4 space-y-4">
                    <CollapsibleSection title="Version & Platform">
                        <pre className="overflow-x-auto rounded-md bg-slate-100 p-4 text-sm text-gray-700 dark:bg-gray-950 dark:text-gray-300">
                            <code>
{`Running tgcf 1.1.0 (main, Oct  2 2023, 21:59:40) [GCC 8.3.0]
Python 3.11.6 (main, Oct  2 2023, 21:59:40)
OS posix
Platform Linux 6.8.0-1019-aws
('64bit', 'ELF')`}
                            </code>
                        </pre>
                    </CollapsibleSection>

                    <CollapsibleSection title="Configuration">
                        <button className="mb-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">Download config.json</button>
                        <pre className="overflow-x-auto rounded-md bg-slate-100 p-4 text-sm text-blue-500 dark:bg-gray-950 dark:text-blue-400">
                            <code>{`{ ... }`}</code>
                        </pre>
                    </CollapsibleSection>

                    <CollapsibleSection title="Special Options for Live Mode">
                        <Checkbox 
                            id="enforce-seq" 
                            label="Enforce sequential updates"
                            checked={enforceSeq} 
                            onChange={setEnforceSeq} 
                            className="mb-4"
                        />
                        <Checkbox 
                            id="delete-edit" 
                            label="Delete a message when source edited to .deleteMe" 
                            checked={deleteOnEdit} 
                            onChange={setDeleteOnEdit}
                            description="When you edit the message in source to something particular, the message will be deleted in both source and destinations."
                            className="mb-4"
                        />
                        <Checkbox 
                            id="customize-bot" 
                            label="Customize Bot Messages" 
                            checked={customizeBot} 
                            onChange={setCustomizeBot}
                            className="mb-4"
                        />
                    </CollapsibleSection>
                    
                    <button
                        type="button"
                        className="w-auto rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
                    >
                        Save
                    </button>
                </div>
            )}
        </div>
    );
};

export default Advanced;