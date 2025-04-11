import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-xl font-bold text-black mb-2">DRT.fm</h2>
          <p className="text-gray-500">Discover the Best AI Tools and Applications</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-black mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/ai-apps" className="hover:underline">All Apps</Link></li>
            <li><Link to="/categories" className="hover:underline">Categories</Link></li>
            <li><Link to="#" className="hover:underline">DRTy Bot 🔥</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-md font-semibold text-black mb-3">Categories</h3>
          <ul className="space-y-1">
            <li><Link to="/categories/ai-chatbot" className="hover:underline">AI Chatbot</Link></li>
            <li><Link to="/categories/ai-image-generator" className="hover:underline">AI Image Generator</Link></li>
            <li><Link to="/categories/ai-photo-video-editor" className="hover:underline">AI Photo and Video Editor</Link></li>
            <li><Link to="/categories/ai-story-generator" className="hover:underline">AI Story Generator</Link></li>
            <li><Link to="/categories/ai-video-generator" className="hover:underline">AI Video Generator</Link></li>
            <li><Link to="/categories/ai-voice-generator" className="hover:underline">AI Voice Generator</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold text-black mb-3">Contact Us</h3>
          <p>DRT.fm<br />Singapore<br />Email: <a href="mailto:hello@drt.fm" className="text-blue-600 hover:underline">hello@drt.fm</a></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 text-center text-xs text-gray-500 py-4">
        © 2025 DRT.fm. All rights reserved. A Product by Humble Echo LLC.
      </div>
    </footer>
  );
}
