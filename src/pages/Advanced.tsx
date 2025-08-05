import React, { useState } from 'react';
import { CollapsibleSection } from '../components/CollapsibleSection';
import { Checkbox } from '../components/Checkbox';
import { Alert } from '../components/Alert';
import { AlertTriangle, Copy, Download, Save, ChevronDown, ChevronUp } from 'lucide-react';
import toast from 'react-hot-toast';

const versionInfo = `Running tgcf 1.1.0 (main, Oct  2 2023, 21:59:40) [GCC 8.3.0]
Python 3.11.6 (main, Oct  2 2023, 21:59:40)
OS posix
Platform Linux 6.8.0-1019-aws
('64bit', 'ELF')`;

const configJson = `{
  "show_forwarded_from": false,
  "live_mode": true,
  "past_mode": false,
  "delete_sync": false,
  "forwards": [
    {
      "source": -100123456789,
      "dest": [
        -100987654321
      ],
      "offset": 0,
      "end": 0
    }
  ]
}`;

const CodeBlock: React.FC<{ 
    title: string; 
    children: React.ReactNode; 
    onCopy?: () => void;
    isCollapsible?: boolean;
    isCollapsed?: boolean;
    onToggle?: () => void;
}> = ({ title, children, onCopy, isCollapsible, isCollapsed, onToggle }) => (
    <div className="rounded-lg border border-slate-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</p>
            <div className="flex items-center gap-4">
                {onCopy && (
                    <button onClick={onCopy} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" title="Copy to clipboard">
                        <Copy className="h-4 w-4" />
                    </button>
                )}
                {isCollapsible && (
                     <button onClick={onToggle} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" title={isCollapsed ? "Expand" : "Collapse"}>
                        {isCollapsed ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
                    </button>
                )}
            </div>
        </div>
        <pre className={`overflow-x-auto bg-slate-50 p-4 text-sm text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 ${isCollapsible && isCollapsed ? 'text-center' : ''}`}>
            <code>
                {isCollapsible && isCollapsed ? '{...}' : children}
            </code>
        </pre>
    </div>
);


const Advanced: React.FC = () => {
    const [agreed, setAgreed] = useState(false);
    const [configCollapsed, setConfigCollapsed] = useState(true);
    const [enforceSeq, setEnforceSeq] = useState(false);
    const [deleteTrigger, setDeleteTrigger] = useState('.deleteMe');
    const [customizeBot, setCustomizeBot] = useState(false);
    const [startCommandReply, setStartCommandReply] = useState('Hi! I am alive');
    const [helpCommandReply, setHelpCommandReply] = useState('For details visit github.com/aahnik/tgcf');

    const handleCopy = (text: string, name: string) => {
        navigator.clipboard.writeText(text);
        toast.success(`${name} copied to clipboard!`);
    };

    const handleSave = () => {
        toast.success('Advanced settings saved!');
    };

    return (
        <div className="mx-auto max-w-3xl pb-24">
             <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Advanced Settings</h1>
            
            {!agreed ? (
                <div className="rounded-lg border-2 border-dashed border-yellow-400 bg-yellow-50 p-6 text-center dark:bg-yellow-900/20">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400">
                        <AlertTriangle className="h-6 w-6" />
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-yellow-800 dark:text-yellow-200">Proceed with Caution</h2>
                    <p className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                        The settings on this page are for advanced users and developers. Incorrect changes can lead to unexpected behavior.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <Checkbox id="agree" label="I understand the risks and wish to proceed." checked={agreed} onChange={setAgreed} />
                    </div>
                </div>
            ) : (
                <div className="mt-4 space-y-6">
                    <CollapsibleSection title="System Information" defaultOpen={true}>
                        <div className="space-y-4">
                            <CodeBlock title="Version & Platform" onCopy={() => handleCopy(versionInfo, 'Version Info')}>
                                {versionInfo}
                            </CodeBlock>
                            <CodeBlock 
                                title="Current Configuration" 
                                onCopy={() => handleCopy(configJson, 'Configuration')}
                                isCollapsible={true}
                                isCollapsed={configCollapsed}
                                onToggle={() => setConfigCollapsed(!configCollapsed)}
                            >
                                {configJson}
                            </CodeBlock>
                            <div className="flex justify-end">
                                <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                                    <Download className="h-4 w-4" />
                                    <span>Download config.json</span>
                                </button>
                            </div>
                        </div>
                    </CollapsibleSection>

                    <CollapsibleSection title="Live Mode Options" defaultOpen={true}>
                        <div className="space-y-6 p-2">
                            <Checkbox 
                                id="enforce-seq" 
                                label="Enforce sequential updates"
                                checked={enforceSeq} 
                                onChange={setEnforceSeq} 
                                description="Ensures messages are forwarded in the exact order they are received. May slightly increase delay."
                            />
                            
                            <div>
                                <label htmlFor="delete-trigger" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Delete Trigger Text
                                </label>
                                <input
                                    id="delete-trigger"
                                    type="text"
                                    value={deleteTrigger}
                                    onChange={(e) => setDeleteTrigger(e.target.value)}
                                    className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                />
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    When you edit a message in the source to this text, it will be deleted from all destinations.
                                </p>
                            </div>

                            <div className="border-t border-slate-200 pt-6 dark:border-gray-700">
                                <Checkbox 
                                    id="customize-bot" 
                                    label="Customize Bot Command Replies" 
                                    checked={customizeBot} 
                                    onChange={setCustomizeBot}
                                    description="Change the default text for /start and /help commands."
                                />
                                {customizeBot && (
                                    <div className="mt-4 space-y-4 rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
                                        <Alert type="info">
                                            For userbots, commands start with <code>.</code> (e.g., <code>.start</code>). For regular bots, use <code>/</code>.
                                        </Alert>
                                        <div>
                                            <label htmlFor="start-reply" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Reply for /start command
                                            </label>
                                            <textarea
                                                id="start-reply"
                                                rows={2}
                                                value={startCommandReply}
                                                onChange={(e) => setStartCommandReply(e.target.value)}
                                                className="w-full resize-y rounded-md border-slate-200 bg-white p-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="help-reply" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Reply for /help command
                                            </label>
                                            <textarea
                                                id="help-reply"
                                                rows={2}
                                                value={helpCommandReply}
                                                onChange={(e) => setHelpCommandReply(e.target.value)}
                                                className="w-full resize-y rounded-md border-slate-200 bg-white p-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </CollapsibleSection>
                </div>
            )}

            <div className="sticky bottom-0 z-10 border-t border-slate-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/80">
                <div className="mx-auto flex max-w-3xl items-center justify-end gap-4 px-4 py-3">
                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={!agreed}
                        className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-gray-800"
                    >
                        <Save className="h-4 w-4" />
                        <span>Save Changes</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Advanced;