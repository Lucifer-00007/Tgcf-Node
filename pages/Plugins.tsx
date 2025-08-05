
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
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Plugins</h1>
            <div className="space-y-4">
                <CollapsibleSection title="Filter" defaultOpen={false}>
                    <Checkbox id="filter-enabled" label="Use this plugin: filter" checked={filterEnabled} onChange={setFilterEnabled} description="Blacklist or whitelist certain texts." />
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Users</label>
                        <select className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-md">
                            <option>iden, files</option>
                        </select>
                        <p className="text-xs text-gray-500 mt-1">Case Sensitive</p>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Enter a pattern to filter messages</label>
                        <textarea rows={4} className="w-full p-4 bg-slate-100 border border-slate-200 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y"></textarea>
                        <p className="text-xs text-gray-500 mt-1">One per line</p>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Format" defaultOpen={false}>
                    <Checkbox id="format-enabled" label="Use this plugin: format" checked={formatEnabled} onChange={setFormatEnabled} />
                    <p className="text-xs text-gray-500 mb-4">Add style to your text message. <a href="#" className="text-blue-600">Markdown</a> v2.</p>
                    <textarea rows={4} className="w-full p-4 bg-slate-100 border border-slate-200 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y" placeholder="template"></textarea>
                </CollapsibleSection>

                <CollapsibleSection title="Watermark" defaultOpen={false}>
                    <Checkbox id="watermark-enabled" label="Use this plugin: watermark" checked={watermarkEnabled} onChange={setWatermarkEnabled} description="Apply watermark to media (images and videos)." />
                    <button type="button" className="mt-2 w-full flex justify-center items-center px-4 py-2 border border-dashed border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        Drag and drop file here
                    </button>
                    <p className="text-xs text-gray-500 mt-1">Browse File</p>
                </CollapsibleSection>

                <CollapsibleSection title="OCR" defaultOpen={false}>
                    <Checkbox id="ocr-enabled" label="Use this plugin: ocr" checked={ocrEnabled} onChange={setOcrEnabled} description="Extract text from images." />
                     <div className="my-2 p-2 rounded-md text-sm bg-yellow-50 text-yellow-800">
                        <span className="font-bold">CAUTION:</span> With ocr, Make sure to install tesseract to your machine for this plugin.
                    </div>
                     <Checkbox id="ocr-delete" label="Delete the image after extracting text" checked={false} onChange={() => {}}/>
                </CollapsibleSection>

                <CollapsibleSection title="Replace" defaultOpen={false}>
                    <Checkbox id="replace-enabled" label="Use this plugin: replace" checked={replaceEnabled} onChange={setReplaceEnabled} description="The text to be replaced (supports regex)." />
                    <textarea rows={2} className="w-full mt-2 p-4 bg-slate-100 border border-slate-200 rounded-md resize-y" placeholder="original replacement"></textarea>
                    <label className="block text-sm font-medium text-gray-700 mt-2 mb-1">Replacement</label>
                    <textarea rows={2} className="w-full p-4 bg-slate-100 border border-slate-200 rounded-md resize-y" placeholder="new replacement"></textarea>
                </CollapsibleSection>

                <CollapsibleSection title="Caption" defaultOpen={false}>
                    <Checkbox id="caption-enabled" label="Use this plugin: caption" checked={captionEnabled} onChange={setCaptionEnabled} />
                     <label className="block text-sm font-medium text-gray-700 mt-2 mb-1">Header</label>
                    <textarea rows={2} className="w-full p-4 bg-slate-100 border border-slate-200 rounded-md resize-y"></textarea>
                     <label className="block text-sm font-medium text-gray-700 mt-2 mb-1">Footer</label>
                    <textarea rows={2} className="w-full p-4 bg-slate-100 border border-slate-200 rounded-md resize-y"></textarea>
                    <p className="text-xs text-gray-500 mt-1">You can add a common header and/or footer to the messages. To make space between the original message text and header/footer, use a blank line in your text.</p>
                </CollapsibleSection>

                <button type="button" className="w-auto px-6 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Save
                </button>
            </div>
        </div>
    );
};

export default Plugins;
