import { Award, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full shadow-lg">
          <Award className="w-4 h-4" />
          <span className="text-sm font-semibold">Hackathon Entry 2024</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              प्र
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Prakriti Mitra</h1>
              <p className="text-xs text-gray-600">Nature Friend</p>
            </div>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#problem" className="text-gray-700 hover:text-orange-600 transition">The Problem</a>
            <a href="#technology" className="text-gray-700 hover:text-orange-600 transition">Our Tech</a>
            <a href="#impact" className="text-gray-700 hover:text-orange-600 transition">Impact</a>
            <a href="#roadmap" className="text-gray-700 hover:text-orange-600 transition">Roadmap</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition">
              Live Demo
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <a href="#problem" className="block text-gray-700 hover:text-orange-600 transition">The Problem</a>
            <a href="#technology" className="block text-gray-700 hover:text-orange-600 transition">Our Tech</a>
            <a href="#impact" className="block text-gray-700 hover:text-orange-600 transition">Impact</a>
            <a href="#roadmap" className="block text-gray-700 hover:text-orange-600 transition">Roadmap</a>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition">
              Live Demo
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
