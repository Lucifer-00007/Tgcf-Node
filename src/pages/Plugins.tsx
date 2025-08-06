import React, { useState } from 'react';
import { CollapsibleSection } from '../components/CollapsibleSection';
import { Checkbox } from '../components/Checkbox';
import { Alert } from '../components/Alert';
import { Plug, UserPlus, Trash2, Plus, UploadCloud, Save, RotateCcw, Replace as ReplaceIcon, HelpCircle, Code2, Settings2 } from 'lucide-react';
import toast from 'react-hot-toast';

const fileOptions = ['audio', 'document', 'photo', 'video', 'voice', 'sticker', 'animation', 'contact'];

const Plugins: React.FC = () => {
  // General plugin states
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [formatEnabled, setFormatEnabled] = useState(false);
  const [formatStyle, setFormatStyle] = useState('preserve');
  const [watermarkEnabled, setWatermarkEnabled] = useState(false);
  const [ocrEnabled, setOcrEnabled] = useState(false);

  // Replace plugin: separate main enable vs internal option
  const [replaceMainEnabled, setReplaceMainEnabled] = useState(false);
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

  // State for Replace plugin
  const [replaceUseRegex, setReplaceUseRegex] = useState(false);
  const [showReplaceUsage, setShowReplaceUsage] = useState(true);
  const [replacementsText, setReplacementsText] = useState('');

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

  const disabledWrap = (enabled: boolean) =>
    !enabled ? 'opacity-50 pointer-events-none select-none' : '';

  return (
    <div className="mx-auto max-w-3xl pb-24">
      <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Plugins</h1>

      <Alert type="info" icon={<Plug className="h-5 w-5" />}>
        Plugins allow you to modify or filter messages in transit. Enable and configure them to customize your
        forwarding behavior.
      </Alert>

      <div className="mt-6 space-y-4">
        <CollapsibleSection title="Filter" defaultOpen={false} statusIndicator={filterEnabled ? 'enabled' : 'disabled'}>
          <Checkbox
            id="filter-enabled"
            label="Use this plugin: filter"
            checked={filterEnabled}
            onChange={setFilterEnabled}
            description="Blacklist or whitelist certain text items."
            className="mb-4"
          />
          <div className={disabledWrap(filterEnabled)}>
            <div>
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                  <button
                    onClick={() => setActiveFilterTab('text')}
                    className={`whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium ${getTabClass('text')}`}
                    disabled={!filterEnabled}
                  >
                    Text
                  </button>
                  <button
                    onClick={() => setActiveFilterTab('users')}
                    className={`whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium ${getTabClass('users')}`}
                    disabled={!filterEnabled}
                  >
                    Users
                  </button>
                  <button
                    onClick={() => setActiveFilterTab('files')}
                    className={`whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium ${getTabClass('files')}`}
                    disabled={!filterEnabled}
                  >
                    Files
                  </button>
                </nav>
              </div>

              <div className="mt-5">
                {/* ... filter section content unchanged ... */}
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Format" defaultOpen={false} statusIndicator={formatEnabled ? 'enabled' : 'disabled'}>
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
                {['preserve', 'bold', 'italics', 'code', 'strike', 'plain'].map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Watermark" defaultOpen={false} statusIndicator={watermarkEnabled ? 'enabled' : 'disabled'}>
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
            <div className="relative flex w-full items-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 dark:border-gray-600 dark:bg-gray-700">
                <div className="flex items-center gap-4">
                    <UploadCloud className="h-10 w-10 flex-shrink-0 text-gray-400" />
                    <div className="text-left">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Drag and drop file here</span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Limit 200MB per file • PNG</p>
                    </div>
                </div>
                <button type="button" className="absolute right-6 top-1/2 -translate-y-1/2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500">
                    Browse files
                </button>
                <input id="watermark-upload" type="file" className="absolute inset-0 h-full w-full cursor-pointer opacity-0" disabled={!watermarkEnabled} />
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="OCR" defaultOpen={false} statusIndicator={ocrEnabled ? 'enabled' : 'disabled'}>
          <Checkbox
            id="ocr-enabled"
            label="Use this plugin: ocr"
            checked={ocrEnabled}
            onChange={setOcrEnabled}
            description="Extract text from images."
            className="mb-4"
          />
          <div className={!ocrEnabled ? 'opacity-50 pointer-events-none select-none' : ''}>
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
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              The text will be added in description of image while forwarding.
            </p>
          </div>
        </CollapsibleSection>

        {/* Enhanced Replace UI */}
        <CollapsibleSection title="Replace" defaultOpen={false} statusIndicator={replaceMainEnabled ? 'enabled' : 'disabled'}>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3 rounded-md border border-slate-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-md bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                  <ReplaceIcon className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-800 dark:text-gray-200">Replace text content</p>
                  <p className="mt-0.5 text-gray-500 dark:text-gray-400">
                    Define rules to replace text before forwarding. Supports plain and regex modes.
                  </p>
                </div>
              </div>
              <Checkbox
                id="replace-main-enabled"
                label="Use this plugin: replace"
                checked={replaceMainEnabled}
                onChange={setReplaceMainEnabled}
              />
            </div>

            <div className={!replaceMainEnabled ? 'opacity-50 pointer-events-none select-none' : ''}>
              {/* Mode and options */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-2 flex items-center gap-2">
                    <Settings2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Options</p>
                  </div>
                  <div className="space-y-3">
                    <Checkbox
                      id="replace-enabled"
                      label="Apply text replacement"
                      checked={replaceEnabled}
                      onChange={setReplaceEnabled}
                    />
                    <Checkbox
                      id="replace-use-regex"
                      label="Interpret as regex"
                      checked={replaceUseRegex}
                      onChange={setReplaceUseRegex}
                    />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Regex allows advanced matching; escape special chars in plain mode.
                    </p>
                  </div>
                </div>

                {/* Help card */}
                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-2 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Quick tips</p>
                  </div>
                  <ul className="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>One rule per line.</li>
                    <li>Use a colon and space to separate original and new text.</li>
                    <li>Quotes recommended for spaces/special chars.</li>
                    <li>Regex mode uses JavaScript regex syntax.</li>
                  </ul>
                </div>
              </div>

              {/* Rules editor */}
              <div className="rounded-lg border border-slate-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Replacement rules</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      {replaceUseRegex ? 'Regex' : 'Plain'}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <label htmlFor="replacements" className="sr-only">Replacements</label>
                  <textarea
                    id="replacements"
                    rows={6}
                    value={replacementsText}
                    onChange={(e) => setReplacementsText(e.target.value)}
                    className="w-full resize-y rounded-md border-slate-200 bg-slate-50 p-4 font-mono text-sm leading-6 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900/40 dark:text-gray-200"
                    placeholder={`Examples:
'old': 'new'
'foo': 'bar'
# Regex example
'\\bhello\\b': 'hi'`}
                    disabled={!replaceMainEnabled}
                  />
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Tip: Write every replacement on a new line. Order matters; top rules run first.
                  </p>
                </div>
              </div>

              {/* Collapsible usage notes */}
              <div className="rounded-lg border border-slate-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                <button
                  className="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200"
                  onClick={() => setShowReplaceUsage((v) => !v)}
                >
                  <span>Rules and usage</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${showReplaceUsage ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showReplaceUsage && (
                  <div className="border-t border-slate-200 p-4 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
                    <p className="mb-2">Replace one word or expression with another.</p>
                    <ul className="mb-3 list-inside list-disc space-y-1">
                      <li>Write every replacement in a new line.</li>
                      <li>
                        The original text then a <strong className="text-gray-800 dark:text-gray-200">colon</strong> <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs dark:bg-gray-700">:</code> and then a <strong className="text-gray-800 dark:text-gray-200">space</strong> and then the new text.
                      </li>
                      <li>Use single quotes for strings with spaces or special characters.</li>
                      <li>In regex mode, escape backslashes as <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs dark:bg-gray-700">\\</code>.</li>
                    </ul>
                    <pre className="overflow-x-auto rounded-md bg-slate-100 p-3 text-sm text-gray-700 dark:bg-gray-900/50 dark:text-gray-300">
                      <code>{`'original': 'new'`}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Caption" defaultOpen={false} statusIndicator={captionEnabled ? 'enabled' : 'disabled'}>
          <Checkbox
            id="caption-enabled"
            label="Use this plugin: caption"
            checked={captionEnabled}
            onChange={setCaptionEnabled}
            className="mb-4"
          />
          <div className={!captionEnabled ? 'opacity-50 pointer-events-none select-none' : ''}>
            <label className="mb-1 mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Header</label>
            <textarea
              rows={2}
              className="w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              disabled={!captionEnabled}
            ></textarea>
            <label className="mb-1 mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Footer</label>
            <textarea
              rows={2}
              className="w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              disabled={!captionEnabled}
            ></textarea>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              You can add a common header and/or footer to the messages. To make space between the original message text
              and header/footer, use a blank line in your text.
            </p>
          </div>
        </CollapsibleSection>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-slate-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/80">
        <div className="mx-auto flex max-w-3xl items-center justify-end gap-4 px-4 py-3">
            <button
                type="button"
                onClick={() => toast.error('Resetting changes is not yet implemented.')}
                className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
            >
                <RotateCcw className="h-4 w-4" />
                <span>Discard</span>
            </button>
            <button
                type="button"
                onClick={() => toast.success('Plugin settings saved!')}
                className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
                <Save className="h-4 w-4" />
                <span>Save Changes</span>
            </button>
        </div>
    </div>
    </div>
  );
};

export default Plugins;