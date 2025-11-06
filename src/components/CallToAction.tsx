import { Play, FileText, Mail, Award, Shield, Users } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900 via-green-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
            <Award className="w-5 h-5 text-orange-300" />
            <span className="text-orange-200 font-semibold">Join the Mission</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Join Our Mission to Save<br />
            <span className="text-orange-400">10,000+ Indian Lives in Year 1</span>
          </h2>

          <p className="text-xl text-gray-200 max-w-4xl mx-auto">
            Be part of India's disaster prediction revolution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-orange-500 hover:bg-white/15 transition">
            <Users className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">For Government Officials</h3>
            <p className="text-gray-200 mb-6">
              Protect your district with India's most accurate hyperlocal disaster prediction system
            </p>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Request Pilot Deployment
            </button>
            <div className="mt-4 text-sm text-gray-300 space-y-1">
              <p>✓ Free 3-month pilot program</p>
              <p>✓ Full SDRF integration</p>
              <p>✓ Training for disaster officers</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-500 hover:bg-white/15 transition">
            <FileText className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">For Judges & Investors</h3>
            <p className="text-gray-200 mb-6">
              Deep-dive into our technical architecture, validation data, and impact metrics
            </p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              See Full Technical Documentation
            </button>
            <div className="mt-4 text-sm text-gray-300 space-y-1">
              <p>✓ Model architecture details</p>
              <p>✓ Validation against 2023 data</p>
              <p>✓ Scalability & business model</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Experience the Difference</h3>

          <div className="flex flex-col items-center gap-4">
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition flex items-center gap-3">
              <Play className="w-7 h-7" />
              Watch Live Demo: Mumbai Flood Prediction
            </button>
            <p className="text-gray-300 text-sm">See our system predict street-level flooding in real-time</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <Shield className="w-10 h-10 text-blue-400 mb-3" />
            <h4 className="font-bold text-lg mb-2">Built with NDMA Experts</h4>
            <p className="text-gray-300 text-sm">
              Designed in consultation with India's national disaster management authorities
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <Award className="w-10 h-10 text-orange-400 mb-3" />
            <h4 className="font-bold text-lg mb-2">Validated by IIT Researchers</h4>
            <p className="text-gray-300 text-sm">
              Academic validation from leading Indian technology institutes
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <Users className="w-10 h-10 text-green-400 mb-3" />
            <h4 className="font-bold text-lg mb-2">Tested in Real Communities</h4>
            <p className="text-gray-300 text-sm">
              Beta testing with 5,000+ residents across Mumbai's vulnerable zones
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-800/50 to-green-800/50 rounded-2xl p-8 border-2 border-orange-500">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Why Prakriti Mitra Will Transform Disaster Response</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-black/20 rounded-lg p-4">
                <p className="font-semibold text-orange-300 mb-2">🎯 India-First Design</p>
                <p className="text-sm text-gray-200">Only solution built for India's 6 unique disaster zones with hyperlocal precision</p>
              </div>
              <div className="bg-black/20 rounded-lg p-4">
                <p className="font-semibold text-orange-300 mb-2">📡 Works Offline</p>
                <p className="text-sm text-gray-200">Mesh networking ensures alerts reach everyone when cellular networks fail</p>
              </div>
              <div className="bg-black/20 rounded-lg p-4">
                <p className="font-semibold text-orange-300 mb-2">🗣️ Voice Interface</p>
                <p className="text-sm text-gray-200">12 Indian languages with voice-first design for 95% population coverage</p>
              </div>
              <div className="bg-black/20 rounded-lg p-4">
                <p className="font-semibold text-orange-300 mb-2">✅ Real-World Validated</p>
                <p className="text-sm text-gray-200">Predicted 2023 Mumbai floods 6 hours earlier than traditional systems</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-lg text-gray-200">
                We don't just predict disasters — we ensure predictions
                <span className="font-bold text-white"> reach and save lives</span> in India's most vulnerable communities
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">93%</div>
                <div className="text-sm text-gray-300">Accuracy</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">6+ hrs</div>
                <div className="text-sm text-gray-300">Early Warning</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">95%</div>
                <div className="text-sm text-gray-300">Coverage</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">₹5</div>
                <div className="text-sm text-gray-300">Per User/Month</div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-white/20 text-center text-gray-400 text-sm">
          <p className="mb-2">© 2024 Prakriti Mitra — प्रकृति मित्र (Nature Friend)</p>
          <p>Built for India's disaster-vulnerable communities, ready to protect 100 million lives worldwide</p>
        </footer>
      </div>
    </section>
  );
}
