
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
        <div className="max-w-3xl mx-auto">
             <h1 className="text-2xl font-semibold mb-6">Advanced</h1>
            <Alert type="warning">This page is for developers and advanced users.</Alert>

            <div className="mt-6">
                <Checkbox id="agree" label="I agree" checked={agreed} onChange={setAgreed} />
            </div>

            {agreed && (
                <div className="mt-4 space-y-4">
                    <CollapsibleSection title="Version & Platform">
                        <pre className="p-4 bg-slate-100 rounded-md text-sm text-gray-700 overflow-x-auto">
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
                        <button className="text-blue-600 hover:underline text-sm font-medium mb-2">Download config.json</button>
                        <pre className="p-4 bg-slate-100 rounded-md text-sm text-blue-500 overflow-x-auto">
                            <code>{`{ ... }`}</code>
                        </pre>
                    </CollapsibleSection>

                    <CollapsibleSection title="Special Options for Live Mode">
                        <Checkbox 
                            id="enforce-seq" 
                            label="Enforce sequential updates"
                            checked={enforceSeq} 
                            onChange={setEnforceSeq} 
                        />
                        <Checkbox 
                            id="delete-edit" 
                            label="Delete a message when source edited to .deleteMe" 
                            checked={deleteOnEdit} 
                            onChange={setDeleteOnEdit}
                            description="When you edit the message in source to something particular, the message will be deleted in both source and destinations."
                        />
                        <Checkbox 
                            id="customize-bot" 
                            label="Customize Bot Messages" 
                            checked={customizeBot} 
                            onChange={setCustomizeBot}
                        />
                    </CollapsibleSection>
                    
                    <button
                        type="button"
                        className="w-auto px-6 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Save
                    </button>
                </div>
            )}
        </div>
    );
};

export default Advanced;
