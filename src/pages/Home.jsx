import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import { FaArrowUp } from 'react-icons/fa';
import OurServices from '../components/OurServices';
import Chooseus from '../components/Chooseus';
import AboutStravix from '../components/AboutStravix';
import OurProject from '../components/OurProject';
import OurClient from '../components/OurClient';
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi"; // still here but actually not used now — you can remove if you want
import Contactcomp from '../components/Contactcomp';
import Background from "../assets/imagesuse/background1.jpg";
import SEO from '../components/seo/Seo';
import { useInView } from 'react-intersection-observer';
import performanceImg from '../assets/imagesuse/performance1.jpg';
import philosophy from '../assets/Images/strategy.webp';

const Home = () => {
  const faqs = [
    {
      "question": "What makes Stravix.Media different from other agencies?",
      "answer": "We blend \"Old School\" strategy with \"New Age\" execution. We don't just chase trends; we build sustainable funnels while keeping your brand relevant and cool."
    },
    {
      "question": "Do you work with startups or established enterprises?",
      "answer": "Both. We love the agility of startups and the scale of enterprises. Our strategies are scalable and custom-tailored to your specific growth stage."
    },
    {
      "question": "What industries do you specialise in?",
      "answer": "Our experience is vast, covering D2C, Online Gambling, FinTech, EdTech, Lifestyle, and B2B SaaS. If your customers are online, we know how to find them."
    },
    {
      "question": "How do you measure success?",
      "answer": "We move beyond vanity metrics (likes) to value metrics—Leads, ROAS (Return on Ad Spend), Conversion Rates, and Brand Recall."
    },
    {
      "question": "How do we get started?",
      "answer": "Simply hit the \"Contact Us\" button. We’ll set up a discovery call to audit your current digital presence and map out a growth plan."
    }
  ];

  const stats = [
    { value: "50+", label: "Brands Scaled" },
    { value: "1.5M+", label: "Organic Reach Generated Last Month" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "24/7", label: "Real-time Optimization" },
  ];

  // ────────────────────────────────────────────────
  // Reusable FAQ Item with simple toggle
  // ────────────────────────────────────────────────
  const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className={`transition-all duration-700 border-b border-gray-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left py-4 flex justify-between items-center"
        >
          <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
          <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
        </button>
        {isOpen && (
          <p className="text-lg text-gray-700 pb-4">{faq.answer}</p>
        )}
      </div>
    );
  };

  return (
    <div>
      <SEO
        title="Stravix Media | Strategy-First Digital Marketing Agency"
        description="Stravix Media is a strategy-first digital marketing agency focused on growth, execution, and results."
        keywords="digital marketing agency, strategy-first marketing, growth marketing"
        canonicalUrl="https://Stravix.media/"
        ogImage={Background}
        author="Stravix Media"
      />
      <Banner />




        <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] lg:h-[300px] md:order-2">
              <img
                src={Background}
                alt="The Stravix.Media Edge Image"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="space-y-8 md:order-1">
              <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px] tracking-normal mb-3 text-gray-900">
               The Stravix Media Edge
              </h1>
              <p className="text-xl text-gray-700">Welcome to Stravix.Media. We are where raw creativity meets rigid data. In a world cluttered
with average content and skipped ads, we are the scroll-stoppers. We aren’t just an agency; we
are your brand’s extended growth team. With years of experience navigating the ever-shifting
algorithms and trends, we have mastered the art of turning "views" into "value."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl ">
              <img
                src={philosophy}
                alt="Stravix founders and team"
                className="w-full h-auto md:h-[300px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="space-y-5 ">
             <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
              Our Philosophy
              </h1>
              <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
We believe that digital marketing isn&#39;t about throwing spaghetti at the wall. It’s about precision.
It’s about understanding human psychology and backing it up with hard analytics. From
startups looking for their first 100 customers to legacy brands looking for a Gen-Z refresh,
we’ve done it all with flair and finesse.
              </p>
               
            </div>
          </div>
        </div>
      </section>

    
      <OurServices />
         {/* Stats Section – unchanged 
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
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px] tracking-normal text-center mb-3 text-black">
            FAQs
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <Contactcomp />
    </div>
  );
};

export default Home;