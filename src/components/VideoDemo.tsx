
import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VideoDemo = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">See the Platform in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how operators use our tools to manage thousands of players daily
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Video */}
          <Card className="relative overflow-hidden group cursor-pointer">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative text-center text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 mx-auto w-fit group-hover:scale-110 transition-transform">
                    <Play className="h-12 w-12 fill-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Complete Platform Overview</h3>
                  <p className="text-blue-100">15 min walkthrough of admin panel and key features</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature Videos */}
          <div className="space-y-4">
            <Card className="relative overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-r from-green-700 to-blue-700 aspect-[2/1] flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative text-center text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-2 mx-auto w-fit group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 fill-white" />
                    </div>
                    <h4 className="font-semibold">Player Management</h4>
                    <p className="text-sm text-blue-100">Risk controls & KYC workflow</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-r from-purple-700 to-pink-700 aspect-[2/1] flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative text-center text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-2 mx-auto w-fit group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 fill-white" />
                    </div>
                    <h4 className="font-semibold">Bonus Engine</h4>
                    <p className="text-sm text-blue-100">Campaign creation & automation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-r from-orange-700 to-red-700 aspect-[2/1] flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative text-center text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-2 mx-auto w-fit group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 fill-white" />
                    </div>
                    <h4 className="font-semibold">Payment System</h4>
                    <p className="text-sm text-blue-100">Multi-currency wallet management</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600">Active Operators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
            <div className="text-gray-600">Players Managed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
