// src/pages/services/Service.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import EnquiryModal from '../components/Enquiry';
import Contactcomp from '../components/Contactcomp';
import Seo from '../components/seo/Seo';

// Images (added placeholders for branding and creative; adjust paths as needed)
import performanceBg from '../assets/imagesuse/performancebg.jpg';
import performanceImg from '../assets/imagesuse/performance1.jpg';
import prBg from '../assets/imagesuse/prbg.jpg';
import prImg from '../assets/imagesuse/pr.jpg';
import seoBg from '../assets/imagesuse/seobackground.jpg'; // Repurposed for branding bg
import seoImg from '../assets/imagesuse/seomarketing.jpg'; // Repurposed for branding img
import socialBg from '../assets/imagesuse/socialbg.jpg';
import socialImg from '../assets/imagesuse/socialpage.jpg';
// import creativeBg from '../assets/imagesuse/creativebg.jpg'; // Add actual path if available
// import creativeImg from '../assets/imagesuse/creative.jpg'; // Add actual path if available
// import brandingBg from '../assets/imagesuse/brandingbg.jpg'; // Add actual path if available
// import brandingImg from '../assets/imagesuse/branding.jpg'; // Add actual path if available
import BrandingBanner from '../assets/Images/brandingbanner.webp';
import BrandingBannerFinal from '../assets/Images/brandingbannerfinal.jpg';

import creativeBanner from '../assets/Images/creativebanner.webp';
import creative from '../assets/Images/creative.webp';

import SocialBannerFinal from '../assets/Images/socialBanner.jpg'
import SocialBanner from '../assets/Images/social.webp';
// Icons (unchanged)
import {
  FaFunnelDollar, FaSearchDollar, FaChartPie, FaRocket,
  FaNewspaper, FaFireAlt, FaUserTie,
  FaSearch, FaFileAlt, FaMapMarkerAlt, FaChartBar,
  FaVideo, FaCommentDots, FaUsers, FaChartLine, FaPen,
} from 'react-icons/fa';

const iconMap = {
  FaFunnelDollar, FaSearchDollar, FaChartPie, FaRocket,
  FaNewspaper, FaFireAlt, FaUserTie,
  FaSearch, FaFileAlt, FaMapMarkerAlt, FaChartBar,
  FaVideo, FaCommentDots, FaUsers, FaChartLine, FaPen,
};

// ────────────────────────────────────────────────
// Updated configs with added fields for SEO, images, etc., based on JSON structure
// Unified 'deliverables' and 'services' handling in component logic
// Added icons arrays per service
// Added ctaText, background, mainImage, mainImageAlt, seo objects
// ────────────────────────────────────────────────
const serviceConfigs =  {
    "Branding": {
      "headline": "More Than a Logo. We Build Legacies.",
      "description": {
        "title": "The Soul of Your Business",
        "content": "Your brand is what people say about you when you leave the room. At Stravix.Media, we shape that conversation. Branding is not just about picking a nice color palette; it’s about strategic positioning. We dig deep into market research, competitor analysis, and consumer psychology to carve out a unique space for you in the market."
      },
      "expertise": "We have helped businesses transition from \"commodities\" to \"loved brands.\" Whether it's a complete rebrand or building a new identity from scratch, our vast experience ensures your visual and verbal identity resonates with your target audience instantly.",
      "deliverables": [
        "Brand Strategy & Positioning: The \"Why\" and \"How\" of your business.",
        "Visual Identity: Logos, typography, and color psychology.",
        "Brand Voice: How you speak to your customers.",
        "Brand Guidelines: The rulebook for consistency."
      ],
      "icons": ["FaChartBar", "FaPen", "FaCommentDots", "FaFileAlt"],
      "ctaText": "Get Started",
      "background": BrandingBannerFinal, // Use placeholder if needed
      "mainImage": BrandingBanner, // Use placeholder if neede
      "mainImageAlt": "Branding Image",
      "seo": {
        "title": "Branding Services | Stravix.Media",
        "description": "Shape your brand's conversation with strategic positioning, market research, and more at Stravix.Media.",
        "keywords": ["branding", "brand strategy", "visual identity", "brand guidelines"],
        "canonical": "/services/branding",
        "ogImage": seoImg
      },
      "faqs": [
        {
          "question": "How long does a branding exercise take?",
          "answer": "Typically 4 to 8 weeks. Great brands aren't built in a day; we take the time to research and iterate to perfection."
        },
        {
          "question": "Do I really need a brand strategy, or just a logo?",
          "answer": "A logo without strategy is just a drawing. Strategy ensures your logo communicates the right message to the right people."
        },
        {
          "question": "Can you refresh an existing brand without changing everything?",
          "answer": "Absolutely. We call this a \"Brand Refresh.\" We keep the core equity you’ve built but modernize the look and feel for today’s audience."
        },
        {
          "question": "What do I get at the end of the project?",
          "answer": "You receive a comprehensive Brand Book containing your logo files, usage guidelines, tone of voice, and visual assets."
        },
        {
          "question": "Does branding impact sales?",
          "answer": "Yes. Consistent branding builds trust, and trust drives conversions. It allows you to charge a premium for your products."
        }
      ]
    },
    "Creative": {
      "headline": "Design That Speaks. Copy That Sells.",
      "description": {
        "title": "Visuals That Stop the Scroll",
        "content": "In the attention economy, you have 3 seconds to make an impact. Stravix.Media creates high-octane creative assets that demand attention. We don't just \"design\"; we communicate. Our creative team combines artistic flair with marketing logic to ensure every pixel serves a purpose."
      },
      "expertise": "From viral reels to high-converting landing pages, our portfolio is a testament to our versatility. We have decades of combined experience in graphic design, motion graphics, and copywriting. We understand the nuances of platform-specific content—what works on LinkedIn won't work on TikTok, and we know exactly how to adapt.",
      "services": [
        "Graphic Design & Illustration",
        "Video Production (Reels, Shorts, Ads)",
        "Copywriting & Scriptwriting",
        "UI/UX Design for Web"
      ],
      "icons": ["FaPen", "FaVideo", "FaFileAlt", "FaSearch"],
      "ctaText": "Get Started",
      "background": creativeBanner, // Use placeholder if needed
      "mainImage": creative,
      "mainImageAlt": "Creative Image",
      "seo": {
        "title": "Creative Services | Stravix.Media",
        "description": "Create impactful designs, videos, and copy that stop the scroll at Stravix.Media.",
        "keywords": ["graphic design", "video production", "copywriting", "ui ux design"],
        "canonical": "/services/creative",
        "ogImage": seoImg
      },
      "faqs": [
        {
          "question": "Do you create video content?",
          "answer": "Yes! Video is king. We script, edit, and produce motion graphics, reels, and explainer videos."
        },
        {
          "question": "Can you work with our existing brand guidelines?",
          "answer": "Strictly. We ensure all creative output is 100% compliant with your established brand identity."
        },
        {
          "question": "How many revisions do you offer?",
          "answer": "We usually offer 2-3 rounds of iterations to ensure the final output matches your vision perfectly."
        },
        {
          "question": "Do you write the ad copy too?",
          "answer": "Yes, our service is holistic. We pair stunning visuals with persuasive copy to maximize impact."
        },
        {
          "question": "What formats do you deliver?",
          "answer": "We deliver all standard formats (MP4, JPG, PNG, GIF) optimized for the specific platforms they will live on."
        }
      ]
    },
    "PR": {
      "headline": "We Get People Talking About You.",
      "description": {
        "title": "Reputation is Everything",
        "content": "In a digital world, news travels fast. We ensure it’s the right news. Stravix.Media’s PR division focuses on building authority and trust. We don't just send out press releases; we craft narratives. We position your founders as thought leaders and your brand as a market pioneer."
      },
      "expertise": "Leveraging deep connections with media houses, journalists, and digital influencers, we bridge the gap between your brand and the public. Our team is experienced in both traditional media coverage and modern digital PR, ensuring you are visible where it matters most.",
      "services": [
        "Media Relations & Press Releases",
        "Crisis Management",
        "Thought Leadership (Op-Eds, Interviews)",
        "Influencer Outreach"
      ],
      "icons": ["FaNewspaper", "FaFireAlt", "FaUserTie", "FaUsers"],
      "ctaText": "Get Started",
      "background": prBg,
      "mainImage": prImg,
      "mainImageAlt": "PR Image",
      "seo": {
        "title": "PR Services | Stravix.Media",
        "description": "Build authority and trust with media relations, crisis management, and more at Stravix.Media.",
        "keywords": ["public relations", "media relations", "crisis management", "influencer outreach"],
        "canonical": "/services/pr",
        "ogImage": prImg
      },
      "faqs": [
        {
          "question": "How is Digital PR different from Traditional PR?",
          "answer": "Traditional PR focuses on newspapers and TV. Digital PR focuses on online publications, backlinks, and social mentions, which also helps your SEO."
        },
        {
          "question": "Can you guarantee a feature in a top newspaper?",
          "answer": "No ethical PR agency guarantees coverage, as it depends on editorial discretion. However, our high acceptance rate speaks for itself."
        },
        {
          "question": "Do you handle crisis management?",
          "answer": "Yes. If things go wrong, we step in immediately to control the narrative and mitigate damage to your reputation."
        },
        {
          "question": "Is PR only for big companies?",
          "answer": "Not at all. Startups need PR to attract investors and early adopters. We have specific packages for different stages of growth."
        },
        {
          "question": "How do you measure PR success?",
          "answer": "We track media impressions, share of voice, sentiment analysis, and website traffic spikes resulting from coverage."
        }
      ]
    },
    "SocialMedia": {
      "headline": "Building Communities, Not Just Followers.",
      "description": {
        "title": "Social Media Marketing is a Two-Way Street",
        "content": "Most agencies treat social media like a megaphone. We treat it like a telephone. We focus on engagement, conversation, and community building. Stravix.Media turns your social channels into vibrant hubs where your customers love to hang out."
      },
      "expertise": "We have mastered the algorithms of Instagram, LinkedIn, Twitter (X), and YouTube. Our team stays ahead of trending audio, meme culture, and professional discourse. We have successfully grown accounts from zero to hero, leveraging organic strategies that create loyal fanbases.",
      "services": [
        "Social Media Strategy & Content Calendar",
        "Reels & Short-form Content Creation",
        "Community Management (Replying to comments/DMs)",
        "Influencer Marketing Campaigns"
      ],
      "icons": ["FaChartLine", "FaVideo", "FaCommentDots", "FaUsers"],
      "ctaText": "Get Started",
      "background": SocialBannerFinal,
      "mainImage": SocialBanner,
      "mainImageAlt": "Social Media Image",
      "seo": {
        "title": "Social Media Services | Stravix.Media",
        "description": "Build engaged communities with social media strategies, content creation, and more at Stravix.Media.",
        "keywords": ["social media marketing", "content calendar", "community management", "influencer campaigns"],
        "canonical": "/services/socialmedia",
        "ogImage": socialImg
      },
      "faqs": [
        {
          "question": "Which platforms should my business be on?",
          "answer": "It depends on your audience. B2B thrives on LinkedIn; Lifestyle thrives on Instagram/Pinterest. We help you choose the right mix."
        },
        {
          "question": "How often will you post?",
          "answer": "Consistency is key. We typically recommend 3-5 posts a week, including a mix of static posts, stories, and reels."
        },
        {
          "question": "Do you reply to comments?",
          "answer": "Yes. Community management is part of the package. We engage with your audience to keep the algorithm happy."
        },
        {
          "question": "How long does it take to see growth?",
          "answer": "Organic growth is a marathon, not a sprint. You will see engagement improvements in month 1, but significant follower growth usually kicks in by months 3-6."
        },
        {
          "question": "Do you use templates?",
          "answer": "NO. Every piece of content is custom-created for your brand to ensure it stands out in the feed."
        }
      ]
    }
  };


// ────────────────────────────────────────────────
// Reusable Card (updated to handle parsed items)
// ────────────────────────────────────────────────
const DeliverCard = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Icon = iconMap[item.icon];

  return (
    <div
      ref={ref}
      className={`p-4 md:p-6 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="text-center space-y-3 group h-full flex flex-col justify-center">
        <div className="flex justify-center">
          {Icon && (
            <Icon className="text-3xl md:text-4xl text-[#F16D34] group-hover:scale-110 transition-transform duration-300" />
          )}
        </div>
        <h2 className="text-xl font-medium mb-2 text-gray-800 leading-tight">
          {item.title}
        </h2>
        <p className="text-xl text-gray-800">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

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
      className={` transition-all duration-700  border-b border-gray-300 ${
        inView ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-y-12 '
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
      <p className="text-lg text-gray-700">{faq.answer}</p>
      )}
    </div>
  );
};

// ────────────────────────────────────────────────
// Main component – fixed lookup logic, parsed deliverables/services into objects with icons
// Changed config.subheadline to config.description.content
// Changed config.introTitle to config.description.title
// Changed config.introText to config.description.content
// Changed config.StravixEdge to config.expertise
// Fixed default slug to 'performancemarketing'
// Added keyMap for slug to config key lookup
// Added FAQ section after What We Deliver
// ────────────────────────────────────────────────
const Service = () => {
  const { service } = useParams();
  const location = useLocation();

  const normalizedSlug = (service || 'performancemarketing').toLowerCase().trim();

  const keyMap = {
    'branding': 'Branding',
    'creative': 'Creative',
    'pr': 'PR',
    'socialmedia': 'SocialMedia',
    'performancemarketing': 'PerformanceMarketing',
    'performance': 'PerformanceMarketing', // Fallback for possible 'performance' slug
  };

  const key = keyMap[normalizedSlug] || 'PerformanceMarketing';
  const config = serviceConfigs[key];

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  // Prepare whatWeDeliver by parsing strings and assigning icons
  const rawItems = config.services || config.deliverables || [];
  const whatWeDeliver = rawItems.map((itemStr, idx) => {
    const parts = itemStr.split(/:\s*/);
    const title = parts[0] || itemStr;
    const desc = parts[1] || '';
    const icon = config.icons?.[idx] || 'FaRocket'; // Default icon if none
    return { title, desc, icon };
  });

  // Optional: Service schema (updated to use headline and description.content)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": config.headline,
    "provider": {
      "@type": "Organization",
      "name": "Stravix Media"
    },
    "serviceType": config.headline,
    "areaServed": "India",
    "description": config.description.content,
    "url": config.seo?.canonical,
  };

  const length = whatWeDeliver.length;

  return (
    <div className="bg-white">
      <Seo
        title={config.seo?.title || "Stravix Media Services"}
        description={config.seo?.description || ""}
        keywords={config.seo?.keywords || []}  // ← now safe array
        canonicalUrl={config.seo?.canonical || location.pathname}
        ogImage={config.seo?.ogImage}
        author="Stravix Media"
        schema={serviceSchema}  // optional
      />

      <link rel="preload" href={config.background} as="image" />

      {/* Hero – updated subheadline */}
      <header
        className="relative text-center py-25  px-4 md:px-8 bg-cover bg-no-repeat overflow-hidden bg-black"
        style={{ backgroundImage: `url(${config.background})` }}
      >
        <div className="absolute inset-0 bg-gray-800/60 z-0"></div>
        <div className="relative max-w-6xl mx-auto pt-20 z-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-white leading-tight animate-fade-in-up">
            {config.headline}
          </h1>
      
          <button
            onClick={openEnquiry}
            className="inline-flex items-center px-8 py-4 bg-[#F16D34] text-white font-bold text-lg rounded-full hover:bg-[#F16D34]/90 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow"
          >
            {config.ctaText} <FaRocket className="ml-2" />
          </button>
        </div>
      </header>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />

      {/* Intro Section – updated introTitle and introText */}
      <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] lg:h-[350px] md:order-2">
              <img
                src={config.mainImage}
                alt={config.mainImageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="space-y-8 md:order-1">
              <h3 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px] tracking-normal mb-3 text-gray-900">
                {config.description.title}
              </h3>
              <p className="text-xl text-gray-700">{config.description.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver – updated to use whatWeDeliver parsed array */}
    <section className="relative overflow-hidden py-14 md:py-10 bg-blue-900/10">
        <div className="absolute inset-0 bg-gray-100"></div>
        <div className="relative px-4 md:px-8 space-y-8 md:space-y-12">
          <div className="text-center space-y-4">
            <h3 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px] tracking-normal text-center mb-3 text-black">
              What We Deliver?
            </h3>
          </div>

          <div
            className={`grid lg:px-20 grid-cols-1 md:grid-cols-3 lg:grid-cols-${length} gap-4 md:gap-2 divide-y-2 md:divide-x-2 lg:divide-y-0 divide-black/20`}
          >
            {whatWeDeliver.map((item, index) => (
              <DeliverCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>



      {/* Stravix Edge – updated to use expertise */}
      <section
        className="p-12 md:p-16 text-center animate-slide-in bg-blue-900/10"
        style={{ background: 'linear-gradient(180deg, #111488 0%, #0d1066 100%)' }}
      >
        <h3 className="text-4xl font-semibold mb-4 text-white">Our Expertise</h3>
        <p className="text-xl text-white/80 max-w-4xl mx-auto">{config.expertise}</p>
      </section>

         {/* FAQ Section */}
      <section className="py-20 bg-gray-100 ">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px] tracking-normal text-center mb-3 text-black">
            FAQs
          </h3>
          <div className="space-y-4">
            {config.faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;