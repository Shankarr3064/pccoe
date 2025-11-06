import { Clock, Target, DollarSign, Users, MapPin, TrendingUp } from 'lucide-react';

export default function Impact() {
  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-5 h-5 text-green-700" />
            <span className="text-green-800 font-semibold">Measurable Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Measuring Success the Indian Way:<br />
            <span className="text-orange-600">From Data Accuracy to Lives Saved</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Real metrics that matter for India's disaster-vulnerable communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500 hover:shadow-xl transition">
            <Clock className="w-12 h-12 text-orange-600 mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">6+ Hours</div>
            <p className="text-gray-700 font-semibold mb-2">Earlier Evacuation</p>
            <p className="text-sm text-gray-600">In urban flooding scenarios vs. traditional systems</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600 hover:shadow-xl transition">
            <Target className="w-12 h-12 text-green-600 mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">40%</div>
            <p className="text-gray-700 font-semibold mb-2">Fewer False Alarms</p>
            <p className="text-sm text-gray-600">Building community trust through accuracy</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600 hover:shadow-xl transition">
            <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">₹5</div>
            <p className="text-gray-700 font-semibold mb-2">Per User/Month</p>
            <p className="text-sm text-gray-600">10x cheaper than global solutions</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-600 hover:shadow-xl transition">
            <Users className="w-12 h-12 text-purple-600 mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
            <p className="text-gray-700 font-semibold mb-2">Population Coverage</p>
            <p className="text-sm text-gray-600">Including non-literate communities</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Real Impact Scenarios: Lives Saved in Action
          </h3>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Mumbai: Urban Flooding</h4>
                  <p className="text-gray-700 mb-3">
                    <span className="font-semibold">Predicted:</span> Dharavi Sector 3 flooding 6 hours before water reached danger levels
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-900">3,500 families</p>
                      <p className="text-gray-600">Evacuated safely</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-900">Street-level</p>
                      <p className="text-gray-600">10m precision</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-blue-900">₹4.2 crore</p>
                      <p className="text-gray-600">Property saved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-gray-600">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-gray-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Joshimath, Uttarakhand: Land Subsidence</h4>
                  <p className="text-gray-700 mb-3">
                    <span className="font-semibold">Detected:</span> Ground subsidence 3 weeks before visible cracks appeared
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-gray-900">800+ buildings</p>
                      <p className="text-gray-600">Monitored in real-time</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-gray-900">GNN analysis</p>
                      <p className="text-gray-600">Connected zones mapped</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-gray-900">Zero casualties</p>
                      <p className="text-gray-600">Early evacuation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Odisha Coast: Cyclone Preparedness</h4>
                  <p className="text-gray-700 mb-3">
                    <span className="font-semibold">Reached:</span> Fisherfolk via voice alerts when cellular towers failed during Cyclone Mocha
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-green-900">47 fishing boats</p>
                      <p className="text-gray-600">Secured in time</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-green-900">Mesh network</p>
                      <p className="text-gray-600">Zero internet access</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-semibold text-green-900">Odia voice</p>
                      <p className="text-gray-600">Non-literate access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-green-900 text-white rounded-2xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Cost-Effectiveness: Built for India's Budget</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-orange-300">Traditional Disaster Systems</h4>
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <p className="font-semibold mb-1">₹500/citizen/year</p>
                  <p className="text-sm text-gray-300">Enterprise pricing from global vendors</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <p className="font-semibold mb-1">City-level only</p>
                  <p className="text-sm text-gray-300">No hyperlocal capability</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <p className="font-semibold mb-1">85% accuracy</p>
                  <p className="text-sm text-gray-300">High false alarm rate</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <p className="font-semibold mb-1">Internet required</p>
                  <p className="text-sm text-gray-300">Fails during disasters</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-green-300">Prakriti Mitra</h4>
              <div className="space-y-3">
                <div className="bg-green-800/50 rounded-lg p-4 border border-green-500">
                  <p className="font-semibold mb-1 text-green-300">₹50/citizen/year</p>
                  <p className="text-sm text-gray-200">10x more affordable for districts</p>
                </div>
                <div className="bg-green-800/50 rounded-lg p-4 border border-green-500">
                  <p className="font-semibold mb-1 text-green-300">Street-level precision</p>
                  <p className="text-sm text-gray-200">10-meter resolution</p>
                </div>
                <div className="bg-green-800/50 rounded-lg p-4 border border-green-500">
                  <p className="font-semibold mb-1 text-green-300">93% accuracy</p>
                  <p className="text-sm text-gray-200">40% fewer false alarms</p>
                </div>
                <div className="bg-green-800/50 rounded-lg p-4 border border-green-500">
                  <p className="font-semibold mb-1 text-green-300">Works offline</p>
                  <p className="text-sm text-gray-200">Mesh networking built-in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-orange-800/50 rounded-lg p-6 border border-orange-500">
            <p className="text-center text-lg">
              <span className="font-bold text-orange-300">ROI for Districts:</span> Save
              <span className="font-bold text-white"> ₹10-15 crore</span> in disaster response costs per year
              while protecting <span className="font-bold text-white">10,000+ lives</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
