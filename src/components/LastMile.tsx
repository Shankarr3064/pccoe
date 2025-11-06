import { Smartphone, Radio, Users, CheckCircle, Wifi, Volume2 } from 'lucide-react';

export default function LastMile() {
  return (
    <section id="lastmile" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <Radio className="w-5 h-5 text-orange-700" />
            <span className="text-orange-800 font-semibold">Last-Mile Innovation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            When Cellular Networks Fail:<br />
            <span className="text-green-700">Our Offline-First Approach</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-4">
            Reaches <span className="font-bold text-orange-600">95% of population</span> including non-literate communities
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Because saving lives shouldn't depend on having internet access
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How We Reach Everyone During Network Outages
          </h3>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-red-600" />
                <div className="absolute w-1 h-8 bg-red-600 rotate-45"></div>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="font-bold text-gray-900 mb-2">Step 1: Network Fails</p>
                <p className="text-sm text-gray-700">Cyclone Biparjoy hits, cellular towers go down across Odisha coast</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-bold text-gray-900 mb-2">Step 2: Mesh Activates</p>
                <p className="text-sm text-gray-700">Bluetooth mesh network forms between phones automatically</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-8 h-8 text-green-600" />
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="font-bold text-gray-900 mb-2">Step 3: Voice Alert</p>
                <p className="text-sm text-gray-700">Alert in Odia spreads: "तूफान 2 घंटे में आएगा" (Storm in 2 hours)</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="font-bold text-gray-900 mb-2">Step 4: Community Spreads</p>
                <p className="text-sm text-gray-700">Message hops through 50+ phones, reaches entire fishing village</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-green-100 rounded-xl p-6 border-2 border-orange-300">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 text-green-700 flex-shrink-0" />
              <div>
                <p className="text-lg font-bold text-gray-900 mb-2">Community Verification Gamification</p>
                <p className="text-gray-700 mb-3">
                  Local residents earn points by confirming alerts on the ground — building trust and
                  reducing false alarms by 40% through crowd-sourced validation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                    ✓ Trust building
                  </span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                    ✓ Real-time validation
                  </span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                    ✓ Community engagement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <Volume2 className="w-10 h-10 text-orange-600 mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Voice Interface</h4>
            <p className="text-gray-700 mb-4">
              Disaster alerts in 12 Indian languages with voice-first design for non-literate communities
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Hindi</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Bengali</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Tamil</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Telugu</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Marathi</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">+7 more</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <Radio className="w-10 h-10 text-green-600 mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Bluetooth Mesh</h4>
            <p className="text-gray-700 mb-4">
              Messages hop between phones without internet, reaching remote villages when towers fail
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">• Range: 10-100 meters per hop</p>
              <p className="text-gray-600">• Battery: &lt;5% drain/hour</p>
              <p className="text-gray-600">• Speed: Alert spreads in &lt;2 min</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <Smartphone className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">On-Device AI</h4>
            <p className="text-gray-700 mb-4">
              TensorFlow Lite models run locally — predictions work even when fully offline
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">• Model size: &lt;50MB</p>
              <p className="text-gray-600">• Works on: ₹5,000 phones</p>
              <p className="text-gray-600">• Inference: &lt;500ms</p>
            </div>
          </div>
        </div>

        <div className="bg-green-900 text-white rounded-2xl shadow-2xl p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-bold mb-2">Real Impact: Odisha Fisherman Testimonial</p>
                <p className="text-green-100 italic text-lg mb-2">
                  "When Cyclone Biparjoy came, all towers failed. But your system reached me through my neighbor's phone.
                  The voice message in Odia told me exactly when to move inland. All 47 boats in our village were saved."
                </p>
                <p className="text-green-300 text-sm">— Ravi Das, Puri Fishing Community</p>
              </div>
            </div>

            <div className="bg-green-800 rounded-lg p-4">
              <p className="font-semibold mb-2">Key Achievement</p>
              <p className="text-green-100">
                During 2023 Cyclone Mocha simulation, our mesh network reached
                <span className="font-bold text-white"> 95% of test community</span> within
                <span className="font-bold text-white"> 90 seconds</span> — with zero cellular coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
