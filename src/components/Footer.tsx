import React from 'react';
import { Twitter, Github, Disc } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Security</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Changelog</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Blog</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">API Status</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Support</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-gray-700 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span className="sr-only">Discord</span>
              <Disc className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} TGCF Web UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;