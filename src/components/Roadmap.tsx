import { Calendar, MapPin, Globe, TrendingUp, Target, Rocket } from 'lucide-react';

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Rocket className="w-5 h-5 text-blue-700" />
            <span className="text-blue-800 font-semibold">Implementation Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Phase 1: Dominate India<br />
            <span className="text-orange-600">Phase 2: Global Scalability</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            From Mumbai MVP to protecting 100 million lives worldwide
          </p>
        </div>

        <div className="mb-12">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-green-500 to-blue-500"></div>

            <div className="space-y-8">
              <div className="relative pl-20">
                <div className="absolute left-4 top-6 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <span className="font-bold text-orange-600">Month 1-3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mumbai Flood Prediction MVP</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Deploy hyperlocal flood model for Mumbai metro region</li>
                    <li>✓ Integrate with BMC (Brihanmumbai Municipal Corporation)</li>
                    <li>✓ Launch beta with 5,000 Dharavi residents</li>
                    <li>✓ Voice alerts in Hindi, Marathi, English</li>
                    <li>✓ Validate against monsoon season predictions</li>
                  </ul>
                  <div className="mt-4 bg-orange-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-orange-900">Target: Save 1,000+ lives in first monsoon season</p>
                  </div>
                </div>
              </div>

              <div className="relative pl-20">
                <div className="absolute left-4 top-6 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-green-600">Month 4-6</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Expand to 5 High-Risk Districts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Uttarakhand (Joshimath subsidence monitoring)</li>
                    <li>✓ Odisha Coast (cyclone prediction system)</li>
                    <li>✓ Kerala (monsoon flooding + landslides)</li>
                    <li>✓ Gujarat (earthquake early warning)</li>
                    <li>✓ Assam (riverine flooding + cloud bursts)</li>
                  </ul>
                  <div className="mt-4 bg-green-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-green-900">Coverage: 25 million people across 5 disaster zones</p>
                  </div>
                </div>
              </div>

              <div className="relative pl-20">
                <div className="absolute left-4 top-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-blue-600">Month 7-12</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">National Integration with SDRF Protocols</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ NDMA (National Disaster Management Authority) certification</li>
                    <li>✓ Integration with State Disaster Response Forces (SDRF)</li>
                    <li>✓ API access for 28 state disaster control rooms</li>
                    <li>✓ Training program for 1,000+ district disaster officers</li>
                    <li>✓ Emergency broadcast integration (TV, radio, SMS)</li>
                  </ul>
                  <div className="mt-4 bg-blue-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-blue-900">Target: Official disaster prediction system for 200+ districts</p>
                  </div>
                </div>
              </div>

              <div className="relative pl-20">
                <div className="absolute left-4 top-6 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-purple-600">Year 2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Global Expansion to Similar Geographies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Bangladesh (monsoon flooding + cyclones)</li>
                    <li>✓ Nepal (Himalayan disasters)</li>
                    <li>✓ Philippines (typhoons + earthquakes)</li>
                    <li>✓ Indonesia (volcanic + tsunami warnings)</li>
                    <li>✓ East Africa (drought + flood prediction)</li>
                  </ul>
                  <div className="mt-4 bg-purple-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-purple-900">Vision: Protect 100 million lives in disaster-prone developing nations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Business Model: Sustainable Impact</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-300">
              <Target className="w-10 h-10 text-orange-600 mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-3">District Governments</h4>
              <p className="text-3xl font-bold text-orange-600 mb-2">₹50</p>
              <p className="text-sm text-gray-700 mb-4">per citizen per year</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Full platform access</li>
                <li>• SDRF integration</li>
                <li>• Training & support</li>
                <li>• Custom dashboards</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-300">
              <MapPin className="w-10 h-10 text-green-600 mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-3">Enterprise Clients</h4>
              <p className="text-3xl font-bold text-green-600 mb-2">Custom</p>
              <p className="text-sm text-gray-700 mb-4">based on deployment scale</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Insurance companies</li>
                <li>• Infrastructure projects</li>
                <li>• Real estate developers</li>
                <li>• Supply chain managers</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300">
              <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-3">Global Markets</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">$2-5</p>
              <p className="text-sm text-gray-700 mb-4">per citizen per year (Year 2+)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• International NGOs</li>
                <li>• UN agencies (UNDRR)</li>
                <li>• Climate fund investors</li>
                <li>• Developing nations</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900 text-white rounded-lg p-6">
            <div className="text-center">
              <p className="text-lg mb-2">
                <span className="font-bold text-orange-400">Year 1 Target Revenue:</span> ₹25 crore
              </p>
              <p className="text-gray-300 text-sm">
                (50 districts × 1 million citizens × ₹50/year) — Fully sustainable operations
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-100 to-green-100 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Partnerships & Validation</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-4">Government & Institutional</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ NDMA (National Disaster Management Authority)</li>
                <li>✓ ISRO Bhuvan (Satellite data partnership)</li>
                <li>✓ IMD (India Meteorological Department)</li>
                <li>✓ IIT Bombay/Delhi (Research validation)</li>
                <li>✓ BMC Mumbai (Pilot deployment partner)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-4">International Recognition</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ UNDRR (UN Disaster Risk Reduction)</li>
                <li>✓ Climate tech accelerator programs</li>
                <li>✓ Global disaster prediction conferences</li>
                <li>✓ World Bank disaster resilience fund</li>
                <li>✓ Gates Foundation climate adaptation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
