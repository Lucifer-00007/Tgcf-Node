import React, { useState } from 'react';
import { CollapsibleSection } from '../components/CollapsibleSection';
import { Checkbox } from '../components/Checkbox';
import { Alert } from '../components/Alert';
import { Plug, UserPlus, Trash2, Plus, UploadCloud } from 'lucide-react';

const fileOptions = ['audio', 'document', 'photo', 'video', 'voice', 'sticker', 'animation', 'contact'];

const Plugins: React.FC = () => {
  // General plugin states
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [formatEnabled, setFormatEnabled] = useState(false);
  const [formatStyle, setFormatStyle] = useState('preserve');
  const [watermarkEnabled, setWatermarkEnabled] = useState(false);
  const [ocrEnabled, setOcrEnabled] = useState(false);
  const [replaceEnabled, setReplaceEnabled] = useState(false);
  const [captionEnabled, setCaptionEnabled] = useState(false);

  // State for the Filter plugin
  const [activeFilterTab, setActiveFilterTab] = useState('text');
  const [filterCaseSensitive, setFilterCaseSensitive] = useState(false);
  const [filterUseRegex, setFilterUseRegex] = useState(false);
  
  const [textWhitelist, setTextWhitelist] = useState<string[]>([]);
  const [newWhitelistedText, setNewWhitelistedText] = useState('');
  
  const [textBlacklist, setTextBlacklist] = useState<string[]>([]);
  const [newBlacklistedText, setNewBlacklistedText] = useState('');

  const [usersWhitelist, setUsersWhitelist] = useState<string[]>([]);
  const [newWhitelistedUser, setNewWhitelistedUser] = useState('');
  
  const [usersBlacklist, setUsersBlacklist] = useState<string[]>([]);
  const [newBlacklistedUser, setNewBlacklistedUser] = useState('');

  const [filesWhitelist, setFilesWhitelist] = useState('');
  const [filesBlacklist, setFilesBlacklist] = useState('');

  const formatOptions = ['preserve', 'bold', 'italics', 'code', 'strike', 'plain'];

  const handleAddWhitelistedText = () => {
    if (newWhitelistedText && !textWhitelist.includes(newWhitelistedText)) {
        setTextWhitelist([...textWhitelist, newWhitelistedText]);
        setNewWhitelistedText('');
    }
  };

  const handleRemoveWhitelistedText = (textToRemove: string) => {
      setTextWhitelist(textWhitelist.filter(text => text !== textToRemove));
  };

  const handleAddBlacklistedText = () => {
    if (newBlacklistedText && !textBlacklist.includes(newBlacklistedText)) {
        setTextBlacklist([...textBlacklist, newBlacklistedText]);
        setNewBlacklistedText('');
    }
  };

  const handleRemoveBlacklistedText = (textToRemove: string) => {
      setTextBlacklist(textBlacklist.filter(text => text !== textToRemove));
  };

  const handleAddWhitelistedUser = () => {
    if (newWhitelistedUser && !usersWhitelist.includes(newWhitelistedUser)) {
        setUsersWhitelist([...usersWhitelist, newWhitelistedUser]);
        setNewWhitelistedUser('');
    }
  };

  const handleRemoveWhitelistedUser = (userToRemove: string) => {
      setUsersWhitelist(usersWhitelist.filter(user => user !== userToRemove));
  };

  const handleAddBlacklistedUser = () => {
    if (newBlacklistedUser && !usersBlacklist.includes(newBlacklistedUser)) {
        setUsersBlacklist([...usersBlacklist, newBlacklistedUser]);
        setNewBlacklistedUser('');
    }
  };

  const handleRemoveBlacklistedUser = (userToRemove: string) => {
      setUsersBlacklist(usersBlacklist.filter(user => user !== userToRemove));
  };

  const getTabClass = (tabName: string) => {
    return activeFilterTab === tabName
      ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300'
      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-gray-200';
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Plugins</h1>

      <Alert type="info" icon={<Plug className="h-5 w-5" />}>
        Plugins allow you to modify or filter messages in transit. Enable and configure them to customize your
        forwarding behavior.
      </Alert>

      <div className="mt-6 space-y-4">
        <CollapsibleSection title="Filter" defaultOpen={true}>
          <Checkbox
            id="filter-enabled"
            label="Use this plugin: filter"
            checked={filterEnabled}
            onChange={setFilterEnabled}
            description="Blacklist or whitelist certain text items."
            className="mb-4"
          />
          <div>
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                <button
                  onClick={() => setActiveFilterTab('text')}
                  className={`whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium ${getTabClass('text')}`}
                >
                  Text
                </button>
                <button
                  onClick={() => setActiveFilterTab('users')}
                  className={`whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium ${getTabClass('users')}`}
                >
                  Users
                </button>
                <button
                  onClick={() => setActiveFilterTab('files')}
                  className={`whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium ${getTabClass('files')}`}
                >
                  Files
                </button>
              </nav>
            </div>

            <div className="mt-5">
              {activeFilterTab === 'text' && (
                <div className="space-y-6">
                    <div className="space-y-4">
                        <Checkbox
                            id="case-sensitive"
                            label="Case Sensitive"
                            checked={filterCaseSensitive}
                            onChange={setFilterCaseSensitive}
                        />
                        <Checkbox
                            id="use-regex"
                            label="Interpret filters as regex"
                            checked={filterUseRegex}
                            onChange={setFilterUseRegex}
                        />
                    </div>

                    {/* Text Whitelist */}
                    <div className="rounded-lg border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Text Whitelist</h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Only allow messages containing these expressions.</p>
                            <div className="mt-4 flex gap-2">
                                <input
                                    type="text"
                                    value={newWhitelistedText}
                                    onChange={(e) => setNewWhitelistedText(e.target.value)}
                                    className="flex-grow rounded-md border-slate-200 bg-slate-100 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    placeholder="Enter text expression"
                                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddWhitelistedText(); } }}
                                />
                                <button onClick={handleAddWhitelistedText} className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                                    <Plus className="h-4 w-4" />
                                    <span>Add</span>
                                </button>
                            </div>
                        </div>
                        <div className="border-t border-slate-200 dark:border-gray-700">
                            <ul className="divide-y divide-slate-200 dark:divide-gray-700">
                                {textWhitelist.length > 0 ? (
                                    textWhitelist.map((text, index) => (
                                        <li key={index} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-gray-700/50">
                                            <span className="font-mono text-sm text-gray-700 dark:text-gray-300">{text}</span>
                                            <button onClick={() => handleRemoveWhitelistedText(text)} className="text-gray-400 hover:text-red-500 dark:hover:text-red-400" title={`Remove ${text}`}>
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </li>
                                    ))
                                ) : (
                                    <li className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">No whitelisted text.</li>
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* Text Blacklist */}
                    <div className="rounded-lg border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Text Blacklist</h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Block messages containing these expressions.</p>
                            <div className="mt-4 flex gap-2">
                                <input
                                    type="text"
                                    value={newBlacklistedText}
                                    onChange={(e) => setNewBlacklistedText(e.target.value)}
                                    className="flex-grow rounded-md border-slate-200 bg-slate-100 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    placeholder="Enter text expression"
                                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddBlacklistedText(); } }}
                                />
                                <button onClick={handleAddBlacklistedText} className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                                    <Plus className="h-4 w-4" />
                                    <span>Add</span>
                                </button>
                            </div>
                        </div>
                        <div className="border-t border-slate-200 dark:border-gray-700">
                            <ul className="divide-y divide-slate-200 dark:divide-gray-700">
                                {textBlacklist.length > 0 ? (
                                    textBlacklist.map((text, index) => (
                                        <li key={index} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-gray-700/50">
                                            <span className="font-mono text-sm text-gray-700 dark:text-gray-300">{text}</span>
                                            <button onClick={() => handleRemoveBlacklistedText(text)} className="text-gray-400 hover:text-red-500 dark:hover:text-red-400" title={`Remove ${text}`}>
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </li>
                                    ))
                                ) : (
                                    <li className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">No blacklisted text.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
              )}
              {activeFilterTab === 'users' && (
                <div className="space-y-6">
                  {/* Users Whitelist */}
                  <div className="rounded-lg border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Users Whitelist</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Only allow messages from these users.</p>
                      <div className="mt-4 flex gap-2">
                        <input
                          type="text"
                          value={newWhitelistedUser}
                          onChange={(e) => setNewWhitelistedUser(e.target.value)}
                          className="flex-grow rounded-md border-slate-200 bg-slate-100 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                          placeholder="Enter username or ID"
                          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddWhitelistedUser(); } }}
                        />
                        <button onClick={handleAddWhitelistedUser} className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                          <UserPlus className="h-4 w-4" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                    <div className="border-t border-slate-200 dark:border-gray-700">
                      <ul className="divide-y divide-slate-200 dark:divide-gray-700">
                        {usersWhitelist.length > 0 ? (
                          usersWhitelist.map((user, index) => (
                            <li key={index} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-gray-700/50">
                              <span className="font-mono text-sm text-gray-700 dark:text-gray-300">{user}</span>
                              <button onClick={() => handleRemoveWhitelistedUser(user)} className="text-gray-400 hover:text-red-500 dark:hover:text-red-400" title={`Remove ${user}`}>
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </li>
                          ))
                        ) : (
                          <li className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">No whitelisted users.</li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Users Blacklist */}
                  <div className="rounded-lg border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Users Blacklist</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Block messages from these users.</p>
                      <div className="mt-4 flex gap-2">
                        <input
                          type="text"
                          value={newBlacklistedUser}
                          onChange={(e) => setNewBlacklistedUser(e.target.value)}
                          className="flex-grow rounded-md border-slate-200 bg-slate-100 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                          placeholder="Enter username or ID"
                          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddBlacklistedUser(); } }}
                        />
                        <button onClick={handleAddBlacklistedUser} className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                          <UserPlus className="h-4 w-4" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                    <div className="border-t border-slate-200 dark:border-gray-700">
                      <ul className="divide-y divide-slate-200 dark:divide-gray-700">
                        {usersBlacklist.length > 0 ? (
                          usersBlacklist.map((user, index) => (
                            <li key={index} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-gray-700/50">
                              <span className="font-mono text-sm text-gray-700 dark:text-gray-300">{user}</span>
                              <button onClick={() => handleRemoveBlacklistedUser(user)} className="text-gray-400 hover:text-red-500 dark:hover:text-red-400" title={`Remove ${user}`}>
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </li>
                          ))
                        ) : (
                          <li className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">No blacklisted users.</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {activeFilterTab === 'files' && (
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="files-whitelist"
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Files Whitelist
                    </label>
                    <select
                      id="files-whitelist"
                      value={filesWhitelist}
                      onChange={(e) => setFilesWhitelist(e.target.value)}
                      className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                    >
                      <option value="">Choose an option</option>
                      {fileOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="files-blacklist"
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Files Blacklist
                    </label>
                    <select
                      id="files-blacklist"
                      value={filesBlacklist}
                      onChange={(e) => setFilesBlacklist(e.target.value)}
                      className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                    >
                      <option value="">Choose an option</option>
                      {fileOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Format" defaultOpen={false}>
          <Checkbox id="format-enabled" label="Use this plugin: format" checked={formatEnabled} onChange={setFormatEnabled} className="mb-4" />
          <div className={!formatEnabled ? 'opacity-50 pointer-events-none' : ''}>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Add style to text like <strong className="text-gray-700 dark:text-gray-200">bold</strong>, <em className="text-gray-700 dark:text-gray-200">italics</em>, strikethrough, <code className="rounded bg-green-100 px-1 py-0.5 text-sm text-green-800 dark:bg-green-900/50 dark:text-green-300">monospace</code> etc.
            </p>
            <div>
              <label htmlFor="format-style" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Format</label>
              <select
                id="format-style"
                value={formatStyle}
                onChange={(e) => setFormatStyle(e.target.value)}
                disabled={!formatEnabled}
                className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              >
                {formatOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Watermark" defaultOpen={false}>
          <Checkbox
            id="watermark-enabled"
            label="Apply watermark to media (images and videos)."
            checked={watermarkEnabled}
            onChange={setWatermarkEnabled}
            className="mb-4"
          />
          <div className={!watermarkEnabled ? 'opacity-50 pointer-events-none' : ''}>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Upload watermark image(png)
            </label>
            <div className="relative flex items-center justify-center w-full p-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="text-center">
                    <UploadCloud className="w-10 h-10 mx-auto text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Drag and drop file here</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Limit 200MB per file • PNG</p>
                </div>
                <button type="button" className="absolute right-6 top-1/2 -translate-y-1/2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500">
                    Browse files
                </button>
                <input id="watermark-upload" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" disabled={!watermarkEnabled} />
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="OCR" defaultOpen={false}>
          <Checkbox
            id="ocr-enabled"
            label="Use this plugin: ocr"
            checked={ocrEnabled}
            onChange={setOcrEnabled}
            description="Extract text from images."
            className="mb-4"
          />
          <div className="my-2 rounded-md bg-yellow-50 p-2 text-sm text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
            <span className="font-bold">CAUTION:</span> With ocr, Make sure to install tesseract to your machine for
            this plugin.
          </div>
          <Checkbox
            id="ocr-delete"
            label="Delete the image after extracting text"
            checked={false}
            onChange={() => {}}
            className="mb-4"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Replace" defaultOpen={false}>
          <Checkbox
            id="replace-enabled"
            label="Use this plugin: replace"
            checked={replaceEnabled}
            onChange={setReplaceEnabled}
            description="The text to be replaced (supports regex)."
            className="mb-4"
          />
          <textarea
            rows={2}
            className="mt-2 w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            placeholder="original replacement"
          ></textarea>
          <label className="mb-1 mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Replacement</label>
          <textarea
            rows={2}
            className="w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            placeholder="new replacement"
          ></textarea>
        </CollapsibleSection>

        <CollapsibleSection title="Caption" defaultOpen={false}>
          <Checkbox
            id="caption-enabled"
            label="Use this plugin: caption"
            checked={captionEnabled}
            onChange={setCaptionEnabled}
            className="mb-4"
          />
          <label className="mb-1 mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Header</label>
          <textarea
            rows={2}
            className="w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
          ></textarea>
          <label className="mb-1 mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Footer</label>
          <textarea
            rows={2}
            className="w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
          ></textarea>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            You can add a common header and/or footer to the messages. To make space between the original message text
            and header/footer, use a blank line in your text.
          </p>
        </CollapsibleSection>

        <button
          type="button"
          className="w-auto rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Plugins;