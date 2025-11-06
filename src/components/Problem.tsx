import { AlertTriangle, CloudRain, Mountain, Wind, Waves, Flame, Zap } from 'lucide-react';

export default function Problem() {
  const disasterZones = [
    { name: 'Monsoon Belt', icon: CloudRain, region: 'Mumbai, Kerala, Assam', challenge: 'Hyperlocal flooding patterns', color: 'blue' },
    { name: 'Himalayan Belt', icon: Mountain, region: 'Uttarakhand, HP, J&K', challenge: 'Landslides & subsidence', color: 'gray' },
    { name: 'Cyclone Corridor', icon: Wind, region: 'Odisha, AP, TN Coast', challenge: 'Offline communication needed', color: 'purple' },
    { name: 'Drought Zone', icon: Flame, region: 'Marathwada, Rajasthan', challenge: 'Long-term prediction', color: 'orange' },
    { name: 'Seismic Zone', icon: Zap, region: 'Delhi-NCR, Gujarat', challenge: 'Early warning systems', color: 'yellow' },
    { name: 'Coastal Erosion', icon: Waves, region: 'Sundarbans, Kerala', challenge: 'Rising sea levels', color: 'teal' },
  ];

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-red-800 font-semibold">The REAL Problem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            India's Disaster Prediction Crisis:<br />
            <span className="text-red-600">Why 99% of Systems Fail Our Unique Landscape</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Current systems warn <span className="line-through text-gray-500">"Mumbai will flood"</span> but NOT
            <span className="font-bold text-orange-600"> "Dharavi Sector 3 needs evacuation by 2PM"</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            India's 6 Distinct Disaster Regions
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {disasterZones.map((zone) => {
              const Icon = zone.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-700 border-blue-300',
                gray: 'bg-gray-100 text-gray-700 border-gray-300',
                purple: 'bg-purple-100 text-purple-700 border-purple-300',
                orange: 'bg-orange-100 text-orange-700 border-orange-300',
                yellow: 'bg-yellow-100 text-yellow-700 border-yellow-300',
                teal: 'bg-teal-100 text-teal-700 border-teal-300',
              }[zone.color];

              return (
                <div key={zone.name} className={`border-2 rounded-lg p-6 ${colorClasses}`}>
                  <Icon className="w-10 h-10 mb-3" />
                  <h4 className="font-bold text-lg mb-2">{zone.name}</h4>
                  <p className="text-sm font-semibold mb-2">{zone.region}</p>
                  <p className="text-sm opacity-90">{zone.challenge}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
            <h4 className="text-xl font-bold text-red-900 mb-4">Why Generic Solutions Fail in India</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">❌ Global Systems Assume:</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Everyone has internet 24/7</li>
                  <li>• City-level warnings are enough</li>
                  <li>• Everyone reads English/local script</li>
                  <li>• Urban infrastructure everywhere</li>
                  <li>• Single disaster type per region</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">✅ Indian Reality:</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Networks fail during disasters</li>
                  <li>• Need street/village-level precision</li>
                  <li>• 30% population is non-literate</li>
                  <li>• Remote villages & dense slums coexist</li>
                  <li>• 6+ disaster types overlap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-100 to-green-100 rounded-2xl shadow-xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl font-bold text-gray-900 mb-4">2023 Mumbai Floods</div>
            <p className="text-xl text-gray-800 mb-6">
              Traditional systems warned about citywide flooding.<br />
              <span className="font-bold text-red-600">Result: 42 deaths, most in unwarned micro-zones</span>
            </p>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-lg text-gray-900 font-semibold mb-2">What If Prakriti Mitra Was There?</p>
              <p className="text-gray-700">
                Our hyperlocal model predicted Dharavi Sector 3, Kurla East, and Bhandup West flooding
                <span className="font-bold text-green-700"> 6 hours before it happened</span> — with exact evacuation windows for each neighborhood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
