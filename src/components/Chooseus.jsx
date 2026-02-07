import { BiMinusCircle, BiPlusCircle } from "react-icons/bi"; // still here but actually not used now — you can remove if you want

export default function Chooseus() {
  const stats = [
    { value: "50+", label: "Brands Scaled" },
    { value: "1.5M+", label: "Organic Reach Generated Last Month" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "24/7", label: "Real-time Optimization" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/30 to-white">
      {/* The Stravix.Media Edge – Two Paragraphs */}
      <div className="relative z-10 py-16 md:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14 text-gray-900">
            The Stravix.Media Edge
          </h2>

          <div className="space-y-8 md:space-y-10 text-center md:text-left">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-800 max-w-4xl mx-auto">
              Welcome to Stravix.Media. We are where raw creativity meets rigid data. In a world cluttered
              with average content and skipped ads, we are the scroll-stoppers. We aren’t just an agency; we
              are your brand’s extended growth team. With years of experience navigating the ever-shifting
              algorithms and trends, we have mastered the art of turning "views" into "value."
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-gray-800 max-w-4xl mx-auto">
              Our Philosophy: We believe that digital marketing isn't about throwing spaghetti at the wall. 
              It’s about precision. It’s about understanding human psychology and backing it up with hard 
              analytics. From startups looking for their first 100 customers to legacy brands looking for 
              a Gen-Z refresh, we’ve done it all with flair and finesse.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section – unchanged */}
      <div className="relative z-10 w-full py-16 sm:py-20 bg-[#111488]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl font-semibold mb-2 text-white leading-tight">
                  {stat.value}
                </div>
                <div className="text-xl text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}