import { Play, MapPin, Clock, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30l15-15M30 30l-15-15M30 30l15 15M30 30l-15 15' stroke='%23000' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-100 rounded-full">
            <p className="text-orange-800 font-semibold text-sm">India's First Hyperlocal Disaster Prediction System</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Disaster Predictions That Work<br />
            <span className="text-orange-600">When Networks Fail</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Prakriti Mitra delivers street-level warnings to <span className="font-bold text-green-700">95% of Indians</span>, including non-literate communities
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition">
              <Play className="w-5 h-5" />
              See How It Works in Mumbai Floods
            </button>
            <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition border-2 border-gray-200">
              Request Pilot Deployment
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">6+ Hours</p>
              <p className="text-sm text-gray-600">Earlier Warnings</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">93%</p>
              <p className="text-sm text-gray-600">Accuracy Rate</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">95%</p>
              <p className="text-sm text-gray-600">Population Coverage</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-green-600 mx-auto mb-2">₹5</div>
              <p className="text-2xl font-bold text-gray-900">/user/month</p>
              <p className="text-sm text-gray-600">Operating Cost</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Street-Level Precision vs. Generic City Warnings
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-red-300 rounded-lg p-6 bg-red-50">
              <div className="text-red-600 font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                Traditional System
              </div>
              <p className="text-lg text-gray-800 mb-4 font-medium">"Mumbai will experience heavy flooding tomorrow"</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>❌ City-level warning only</p>
                <p>❌ No evacuation timing</p>
                <p>❌ Which areas specifically?</p>
                <p>❌ 12-hour delayed alerts</p>
              </div>
            </div>

            <div className="border-2 border-green-500 rounded-lg p-6 bg-green-50">
              <div className="text-green-700 font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                Prakriti Mitra
              </div>
              <p className="text-lg text-gray-800 mb-4 font-medium">"Dharavi Sector 3: Flooding expected by 2 PM. Evacuate by 11 AM"</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✅ Street-level precision</p>
                <p>✅ Exact evacuation window</p>
                <p>✅ Specific neighborhood data</p>
                <p>✅ 6+ hours early warning</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <p className="text-gray-800 italic">
              "We got warnings, but not for OUR street. By the time we realized, water was already knee-high."
            </p>
            <p className="text-gray-600 text-sm mt-2">— Survivor, 2023 Mumbai Floods, Dharavi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
