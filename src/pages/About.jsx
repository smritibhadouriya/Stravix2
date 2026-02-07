import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaRocket, FaTwitter } from "react-icons/fa";
import background from '../assets/imagesuse/aboutbg.jpg';
import Seo from "../components/seo/Seo";
import EnquiryModal from '../components/Enquiry';
import Tech from '../assets/imagesuse/tech.jpg'
import vision from '../assets/imagesuse/vision.jpg'
import fun from '../assets/imagesuse/fun.jpg'
import { FaLinkedin } from "react-icons/fa6";
export default function AboutUs() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    title: "About Stravix Media | Your External Growth Engine",
    description: "We are digital natives, data geeks, and creative rebels building sustainable growth for brands in a fast-changing digital world.",
    keywords: ["about Stravix media", "digital marketing agency", "performance marketing", "creative strategy", "data-driven marketing"],
    href: "https://Stravix.media/about-us",
  };

  const differentiators = [
    {
      title: "The Visionaries",
      desc: "We don't just look at 1 quarter at a time. We build long-term, sustainable growth strategies that evolve with your brand.",
      img: vision,
      alt: "Strategic roadmap for long-term business vision",
    },
    {
      title: "The Tech",
      desc: "We use AI not to replace humans, but to give them superpowers. This allows our team to focus 80% of their time on creative strategy rather than repetitive tasks.",
      img: Tech,
      alt: "AI unlocking creativity in marketing",
    },
    {
      title: "The Vibe",
      desc: "Professional? Yes. Boring? Never. We believe the best work happens when you’re genuinely having fun solving hard problems.",
      img: fun,
      alt: "Energetic and fun team culture",
    },
  ];

  const founders = [
  {
    name: "Omkar",
    role: "Visionary Leader",
    desc: "Passion for scaling brands through innovative digital strategies. Sees 3 years ahead when others see quarters.",
    image: "https://via.placeholder.com/400x400/1a1a1a/ffffff?text=Omkar", // ← replace with real image
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Harry",
    role: "Creative Powerhouse",
    desc: "Crafts viral campaigns that blend culture, emotion, and sharp storytelling. Lives for the moment the idea clicks.",
    image: "https://via.placeholder.com/400x400/1a1a1a/ffffff?text=Harry",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Hermione",
    role: "Data Science Expert",
    desc: "Turns chaotic data into crystal-clear growth paths. Obsessed with ROI you can actually see on the bank statement.",
    image: "https://via.placeholder.com/400x400/1a1a1a/ffffff?text=Hermione",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % differentiators.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="font-sans bg-white">
        <link rel="preload" href={background} as="image" />
      <Seo
       title={seoData.title}
        description={seoData.description}
         keywords={seoData.keywords} 
         canonicalUrl={seoData.href}
         ogImage={background}
  author="Stravix Media"
          />

      {/* Hero Header */}
      <header
        className="relative text-center py-20 md:py-32 px-4 md:px-8 bg-cover bg-no-repeat bg-center overflow-hidden bg-black"
        style={{ backgroundImage: `url(${background})` ,
       loading: "lazy"}}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto">
           <h2 className="text-4xl   font-semibold mb-6 text-white leading-tight animate-fade-in-up">
            Young Enough to Innovate. Experienced Enough to Deliver.
          </h2>
           <p className="text-xl  text-white/80 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
         
          </p>
        </div>
      </header>

      {/* Intro Section – Mobile: Image first, then text */}
      <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/6913338/pexels-photo-6913338.jpeg"
                alt="Stravix Media team brainstorming"
                className="w-full h-auto md:h-[300px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="space-y-8 order-2 lg:order-1">
              <h4 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
                Who We Are?
              </h4>
               <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
              Stravix.Media was born out of a rebellion against boring, cookie-cutter marketing. We saw
agencies rinsing and repeating the same strategies for every client. We decided to change that.
We are a collective of strategists, artists, data nerds, and storytellers.
              </p>
           
            </div>
          </div>
        </div>
      </section>



      {/* Founder’s Story – Mobile: Image first, then text */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl ">
              <img
                src="https://www.shutterstock.com/image-photo/professionals-diverse-group-collaborate-boardroom-600nw-2431976515.jpg"
                alt="Stravix founders and team"
                className="w-full h-auto md:h-[300px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="space-y-5 ">
             <h4 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
               Our Journey & Expertise
              </h4>
              <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
               
Over the years, we have weathered every digital storm—from the death of organic reach to the
rise of short-form video. Our team carries a wealth of experience, having managed millions in
ad spend and built brands from scratch. We don&#39;t guess; we know what works because we’ve
been in the trenches.
              </p>
               
            </div>
          </div>
        </div>
      </section>

            {/* Meet the Founders */}
      <section className="relative overflow-hidden py-13" style={{ background: 'linear-gradient(180deg, #111488 0%, #0d1066 100%)' }}>
        <div className="absolute inset-0 bg-white/10"></div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Meet the Founders
      </h2>
      <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
        Young Blood. Old Souls. Sharp Minds.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
      {founders.map((founder, index) => (
        <div
          key={index}
          className="group flex flex-col items-center text-center"
        >
          {/* Circular avatar */}
          <div className="relative mb-6">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Optional subtle ring on hover */}
            <div className="absolute inset-0 rounded-full border-4 border-[#F16D34] opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Name & Role */}
          <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
          <p className="text-[#F16D34] font-medium text-lg mb-4">{founder.role}</p>

          {/* Description */}
          <p className="text-white/80 leading-relaxed max-w-xs mx-auto mb-6">
            {founder.desc}
          </p>

          {/* Social icons */}
          <div className="flex gap-5">
            {founder.social.linkedin && (
              <a
                href={founder.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F16D34] transition-colors"
              >
                <FaLinkedinIn size={22} />
              </a>
            )}
            {founder.social.twitter && (
              <a
                href={founder.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F16D34] transition-colors"
              >
                <FaTwitter size={22} />
              </a>
            )}
            {founder.social.instagram && (
              <a
                href={founder.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F16D34] transition-colors"
              >
                <FaInstagram size={22} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>

      </section>

            {/* Founder’s Story – Mobile: Image first, then text */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl ">
              <img
                src="https://www.shutterstock.com/image-photo/professionals-diverse-group-collaborate-boardroom-600nw-2431976515.jpg"
                alt="Stravix founders and team"
                className="w-full h-auto md:h-[300px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="space-y-5 ">
             <h4 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal  mb-3 text-gray-900 animate-fade-in-up">
             Our Culture
              </h4>
              <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
We are vibrant, loud, and passionate. We celebrate failures as learning curves and win as team
milestones. When you work with Stravix.Media, you don’t get a vendor; you get a partner who
loses sleep over your KPIs so you don’t have to.
              </p>
               
            </div>
          </div>
        </div>
      </section>



{/* Updated "What Makes Us Different?" Section 
      <section className="py-15 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
            <h1 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px] text-center tracking-normal  mb-6 text-gray-900 animate-fade-in-up">
            What Makes Us Different?
          </h1>

          {/* Large screens (md+): Horizontal 3-column grid 
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl  shadow-xl transition-all duration-500 bg-white hover:scale-105 hover:shadow-2xl ${
            index === activeIndex
              ? "ring-2 ring-[#F16D34] ring-offset-2 "
              : " hover:shadow-2xl"
          }`}
              >
                {/* Full height image on top 
                <div className="overflow-hidden h-50">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content below image 
                 <div className="px-4 py-2 text-left space-y-2">
            <h3
              className={`  transition-colors duration-300 text-xl  font-medium mb-2  leading-tight animate-fade-in-up ${
                index === activeIndex ? "text-[#F16D34]" : "text-gray-800 group-hover:text-[#F16D34]"
              }`}
            >
              {item.title}
            </h3>
           <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
              {item.desc}
            </p>
          </div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

             {/* Indicator dots for large screens (same as original)
    <div className="hidden md:flex justify-center mt-10 gap-4">
      {differentiators.map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all duration-500 ${
            index === activeIndex ? "w-12 bg-[#F16D34]" : "w-2 bg-gray-300"
          }`}
        />
      ))}
    </div>

          {/* Small screens (<md): Full-width horizontal carousel (one card at a time)
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {differentiators.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="group relative overflow-hidden rounded-3xl shadow-xl bg-white">
                      {/* Full height image on top 
                      <div className="overflow-hidden h-50">
                        <img
                          src={item.img}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content below image 
                      <div className="p-4 text-left space-y-2">
                        <h3 className="text-xl  font-medium mb-2 text-gray-800 leading-tight animate-fade-in-up">
                          {item.title}
                        </h3>
                       <p className="text-xl  text-gray-800 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel indicators
            <div className="flex justify-center mt-8 gap-4">
              {differentiators.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === activeIndex ? "w-12 bg-[#F16D34]" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

           
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="pt-20 pb-2 text-center bg-[#2D2D2D]">
          <h6 className="text-4xl   font-semibold mb-6 text-white leading-tight animate-fade-in-up">
          Enough about us.<br className="sm:hidden  " /> Let’s talk about you.
        </h6>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-semibold mb-10">
          Ready to turn creativity into measurable growth?
        </p>
        <button
          onClick={openEnquiry}
          className="inline-flex items-center px-8 py-4 bg-[#F16D34] text-white font-bold text-lg rounded-full hover:bg-[#F16D34]/90 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow"
        >
          Get in Touch <FaRocket className="ml-2" />
        </button>
      </section>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />
    </div>
  );
}