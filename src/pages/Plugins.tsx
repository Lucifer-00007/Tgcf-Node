import React, { useState } from 'react';
import { CollapsibleSection } from '../components/CollapsibleSection';
import { Checkbox } from '../components/Checkbox';

const Plugins: React.FC = () => {
    const [filterEnabled, setFilterEnabled] = useState(false);
    const [formatEnabled, setFormatEnabled] = useState(false);
    const [watermarkEnabled, setWatermarkEnabled] = useState(false);
    const [ocrEnabled, setOcrEnabled] = useState(false);
    const [replaceEnabled, setReplaceEnabled] = useState(false);
    const [captionEnabled, setCaptionEnabled] = useState(false);

    return (
        <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-2xl font-semibold dark:text-gray-200">Plugins</h1>
            <div className="space-y-4">
                <CollapsibleSection title="Filter" defaultOpen={false}>
                    <Checkbox id="filter-enabled" label="Use this plugin: filter" checked={filterEnabled} onChange={setFilterEnabled} description="Blacklist or whitelist certain texts." className="mb-4" />
                    <div className="mt-4">
                        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Users</label>
                        <select className="w-full rounded-md border-slate-200 bg-slate-100 px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
                            <option>iden, files</option>
                        </select>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Case Sensitive</p>
                    </div>
                    <div className="mt-4">
                        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Enter a pattern to filter messages</label>
                        <textarea rows={4} className="w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"></textarea>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">One per line</p>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Format" defaultOpen={false}>
                    <Checkbox id="format-enabled" label="Use this plugin: format" checked={formatEnabled} onChange={setFormatEnabled} className="mb-4" />
                    <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Add style to your text message. <a href="#" className="text-blue-600 dark:text-blue-400">Markdown</a> v2.</p>
                    <textarea rows={4} className="w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300" placeholder="template"></textarea>
                </CollapsibleSection>

                <CollapsibleSection title="Watermark" defaultOpen={false}>
                    <Checkbox id="watermark-enabled" label="Use this plugin: watermark" checked={watermarkEnabled} onChange={setWatermarkEnabled} description="Apply watermark to media (images and videos)." className="mb-4" />
                    <button type="button" className="mt-2 flex w-full items-center justify-center rounded-md border border-dashed border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                        Drag and drop file here
                    </button>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Browse File</p>
                </CollapsibleSection>

                <CollapsibleSection title="OCR" defaultOpen={false}>
                    <Checkbox id="ocr-enabled" label="Use this plugin: ocr" checked={ocrEnabled} onChange={setOcrEnabled} description="Extract text from images." className="mb-4" />
                     <div className="my-2 rounded-md bg-yellow-50 p-2 text-sm text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                        <span className="font-bold">CAUTION:</span> With ocr, Make sure to install tesseract to your machine for this plugin.
                    </div>
                     <Checkbox id="ocr-delete" label="Delete the image after extracting text" checked={false} onChange={() => {}} className="mb-4"/>
                </CollapsibleSection>

                <CollapsibleSection title="Replace" defaultOpen={false}>
                    <Checkbox id="replace-enabled" label="Use this plugin: replace" checked={replaceEnabled} onChange={setReplaceEnabled} description="The text to be replaced (supports regex)." className="mb-4" />
                    <textarea rows={2} className="mt-2 w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300" placeholder="original replacement"></textarea>
                    <label className="mb-1 mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Replacement</label>
                    <textarea rows={2} className="w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300" placeholder="new replacement"></textarea>
                </CollapsibleSection>

                <CollapsibleSection title="Caption" defaultOpen={false}>
                    <Checkbox id="caption-enabled" label="Use this plugin: caption" checked={captionEnabled} onChange={setCaptionEnabled} className="mb-4" />
                     <label className="mb-1 mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Header</label>
                    <textarea rows={2} className="w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"></textarea>
                     <label className="mb-1 mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Footer</label>
                    <textarea rows={2} className="w-full resize-y rounded-md border-slate-200 bg-slate-100 p-4 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"></textarea>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">You can add a common header and/or footer to the messages. To make space between the original message text and header/footer, use a blank line in your text.</p>
                </CollapsibleSection>

                <button type="button" className="w-auto rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800">
                    Save
                </button>
            </div>
        </div>
    );
};

export default Plugins;