import { Brain, Network, Satellite, Database, Layers, TrendingUp } from 'lucide-react';

export default function Technology() {
  const engines = [
    {
      name: 'Monsoon Intelligence Engine',
      tech: 'Vision Transformer + U-Net',
      icon: Brain,
      description: 'Street-level flood prediction using ISRO Bhuvan satellite data',
      color: 'blue'
    },
    {
      name: 'Himalayan Seismic Network',
      tech: 'Graph Neural Networks',
      icon: Network,
      description: 'Land subsidence detection across interconnected mountain communities',
      color: 'gray'
    },
    {
      name: 'Cyclone Corridor Predictor',
      tech: 'GraphCast Architecture',
      icon: Satellite,
      description: 'Coastal cyclone tracking with village-level impact forecasting',
      color: 'purple'
    },
    {
      name: 'Social Signal Processor',
      tech: 'mBERT NLP Engine',
      icon: Database,
      description: 'Real-time disaster validation from social media in 12 Indian languages',
      color: 'green'
    },
    {
      name: 'Fusion Engine',
      tech: 'Bayesian Deep Learning',
      icon: Layers,
      description: 'Combines all data sources with uncertainty quantification',
      color: 'orange'
    },
  ];

  return (
    <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <Brain className="w-5 h-5 text-green-700" />
            <span className="text-green-800 font-semibold">Multi-Modal AI Fusion</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Prakriti Mitra: India's<br />
            <span className="text-orange-600">Multi-Modal Fusion Engine</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Built for India's complexity, ready for the world's challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engines.map((engine) => {
            const Icon = engine.icon;
            const colorClasses = {
              blue: 'bg-blue-50 border-blue-300 text-blue-700',
              gray: 'bg-gray-50 border-gray-300 text-gray-700',
              purple: 'bg-purple-50 border-purple-300 text-purple-700',
              green: 'bg-green-50 border-green-300 text-green-700',
              orange: 'bg-orange-50 border-orange-300 text-orange-700',
            }[engine.color];

            return (
              <div key={engine.name} className={`border-2 rounded-xl p-6 ${colorClasses} hover:shadow-lg transition`}>
                <Icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{engine.name}</h3>
                <p className="text-sm font-semibold mb-3 opacity-90">{engine.tech}</p>
                <p className="text-sm text-gray-700">{engine.description}</p>
              </div>
            );
          })}

          <div className="border-2 border-orange-500 rounded-xl p-6 bg-gradient-to-br from-orange-50 to-green-50 hover:shadow-lg transition md:col-span-2 lg:col-span-1">
            <TrendingUp className="w-12 h-12 mb-4 text-orange-600" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">The Result</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="font-semibold text-orange-600 text-2xl">93% Accuracy</p>
              <p>vs. 85% traditional systems</p>
              <p className="font-semibold text-green-600 text-2xl">40% Fewer</p>
              <p>False alarms</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Tech vs. Traditional Approaches</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Traditional Systems</th>
                  <th className="text-center py-4 px-4 bg-orange-900/30">Prakriti Mitra</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 font-semibold">Prediction Accuracy</td>
                  <td className="py-4 px-4 text-center text-red-400">85%</td>
                  <td className="py-4 px-4 text-center bg-orange-900/20 text-green-400 font-bold">93%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 font-semibold">Granularity</td>
                  <td className="py-4 px-4 text-center text-gray-400">City-level</td>
                  <td className="py-4 px-4 text-center bg-orange-900/20 text-white font-bold">Street-level</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 font-semibold">Early Warning</td>
                  <td className="py-4 px-4 text-center text-gray-400">2-4 hours</td>
                  <td className="py-4 px-4 text-center bg-orange-900/20 text-white font-bold">6-12 hours</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 font-semibold">Data Sources</td>
                  <td className="py-4 px-4 text-center text-gray-400">Generic satellite</td>
                  <td className="py-4 px-4 text-center bg-orange-900/20 text-white font-bold">ISRO Bhuvan + IMD + Social</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 font-semibold">Offline Capability</td>
                  <td className="py-4 px-4 text-center text-red-400">None</td>
                  <td className="py-4 px-4 text-center bg-orange-900/20 text-green-400 font-bold">Mesh networking</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 font-semibold">Language Support</td>
                  <td className="py-4 px-4 text-center text-gray-400">1-2 languages</td>
                  <td className="py-4 px-4 text-center bg-orange-900/20 text-white font-bold">12 Indian languages + voice</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">False Alarm Rate</td>
                  <td className="py-4 px-4 text-center text-red-400">High (trust erosion)</td>
                  <td className="py-4 px-4 text-center bg-orange-900/20 text-green-400 font-bold">40% lower</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-green-900/30 border border-green-700 rounded-lg p-6">
            <p className="text-lg font-semibold text-green-300 mb-2">Validated Against Real Events</p>
            <p className="text-gray-300">
              Tested on 2023 Mumbai flood data: Our system predicted Dharavi Sector 3 flooding
              <span className="font-bold text-white"> 6 hours earlier</span> than traditional models,
              with <span className="font-bold text-white">street-level precision</span> for evacuation routes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
