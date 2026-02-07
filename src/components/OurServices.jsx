import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// // Icon imports from react-icons (using mostly Font Awesome & friends)
import { 
  FaPalette,          // for Branding / identity / design
  FaLightbulb,        // for Creative / ideas
  FaChartLine,        // for Performance / growth / ads
  FaUsers,            // for Social & PR / community
} from 'react-icons/fa';

const services = [
  {
    name: 'Branding',
    description: 'Giving your business a soul.',
    path: 'Branding',
    icon: <FaPalette className="w-16 h-16  text-white" />, // orange accent color
  },
  {
    name: 'Creative',
    description: 'Visuals that demand attention.',
    path: 'Creative',
    icon: <FaLightbulb className="w-16 h-16  text-white" />,
  },
  {
    name: 'Performance',
    description: 'Ads that actually convert.',
    path: 'Performance',
    icon: <FaChartLine className="w-16 h-16  text-white" />,
  },
  {
    name: 'Social & PR',
    description: 'Building communities and managing reputations.',
    path: 'Social & PR',
    icon: <FaUsers className="w-16 h-16  text-white" />,
  },
];

const OurServices = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle dot click to set the selected service
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Handle next
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Determine number of visible services based on screen size
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3; // Large screens (lg)
    if (window.innerWidth >= 768) return 2;  // Medium screens (md)
    return 1;                                // Small screens (sm)
  };

  // Calculate visible services
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div className="px-4 py-8 md:px-8 md:py-12 lg:px-8 lg:py-8 bg-[#111488]">
      <div className="max-w-6xl mx-auto text-center">
             <h2 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px]  tracking-normal text-center mb-3  text-white  animate-fade-in-up">
  Our Services
</h2>
      </div>
    
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 transition-transform duration-500 ease-in-out">
            {services.map((service, index) => {
              const serviceSlug = service.path.toLowerCase().replace(/\s+/g, '-');
              return (
                <div
                  key={index}
                  onClick={() => navigate(`/service/${serviceSlug}`)}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/service/${serviceSlug}`)}
                  role="button"
                  tabIndex={0}
                  className=" p-6  flex flex-col items-center text-center cursor-pointer"
                >
                  <div>
                    <div className=" p-4 mb-4 rounded-full bg-[#F16D34]/80 inline-flex items-center justify-center">
                  {service.icon}
                </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{service.name}</h3>
                    <p className="text-white/80 mt-2">{service.description}</p>
                  </div>
                  <Link
                    to={`/service/${serviceSlug}`}
                    className="mt-4 sm:mt-6 inline-block font-medium text-sm sm:text-base md:text-lg text-white/80 hover:text-[#F16D34] transition-colors"
                    aria-label={`Learn more about our ${service.name.toLowerCase()} services`}
                  >
                    Learn more <span className="ml-2">&rarr;</span>
                  </Link>
                </div>
              );
            })}
          </div>
      
        </div>
   
    </div>
  );
};

export default OurServices;

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// // Icon imports from react-icons (using mostly Font Awesome & friends)
// import { 
//   FaPalette,          // for Branding / identity / design
//   FaLightbulb,        // for Creative / ideas
//   FaChartLine,        // for Performance / growth / ads
//   FaUsers,            // for Social & PR / community
// } from 'react-icons/fa';

// const services = [
//   {
//     name: 'Branding',
//     description: 'Giving your business a soul.',
//     path: 'Branding',
//     icon: <FaPalette className="w-16 h-16 lg:w-20 lg:h-20 text-[#F16D34]" />, // orange accent color
//   },
//   {
//     name: 'Creative',
//     description: 'Visuals that demand attention.',
//     path: 'Creative',
//     icon: <FaLightbulb className="w-16 h-16 lg:w-20 lg:h-20 text-[#F16D34]" />,
//   },
//   {
//     name: 'Performance',
//     description: 'Ads that actually convert.',
//     path: 'Performance',
//     icon: <FaChartLine className="w-16 h-16 lg:w-20 lg:h-20 text-[#F16D34]" />,
//   },
//   {
//     name: 'Social & PR',
//     description: 'Building communities and managing reputations.',
//     path: 'Social & PR',
//     icon: <FaUsers className="w-16 h-16 lg:w-20 lg:h-20 text-[#F16D34]" />,
//   },
// ];

// const OurServices = () => {
//   const navigate = useNavigate();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Handle dot click to set the selected service
//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   // Handle next
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
//   };

//   // Auto-scroll every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   // Determine number of visible services based on screen size
//   const getVisibleCount = () => {
//     if (window.innerWidth >= 1024) return 3; // lg
//     if (window.innerWidth >= 768) return 2;  // md
//     return 1;                                // sm
//   };

//   const [visibleCount, setVisibleCount] = useState(getVisibleCount());

//   useEffect(() => {
//     const handleResize = () => {
//       setVisibleCount(getVisibleCount());
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="px-4 py-8 md:px-8 md:py-12 lg:px-8 lg:py-8">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="font-inter font-bold text-[30px] md:text-[34.3px] leading-[45px] tracking-normal text-center mb-3 text-gray-900 animate-fade-in-up">
//           Our Services
//         </h2>
//       </div>

//       <div className="overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 transition-transform duration-500 ease-in-out">
//           {services.map((service, index) => {
//             const serviceSlug = service.path.toLowerCase().replace(/\s+/g, '-');

//             return (
//               <div
//                 key={index}
//                 onClick={() => navigate(`/service/${serviceSlug}`)}
//                 onKeyDown={(e) => e.key === 'Enter' && navigate(`/service/${serviceSlug}`)}
//                 role="button"
//                 tabIndex={0}
//                 className="p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition-shadow rounded-xl"
//               >
//                 <div className="mb-4">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
//                   {service.name}
//                 </h3>
//                 <p className="text-gray-600 mt-2">{service.description}</p>

//                 <Link
//                   to={`/service/${serviceSlug}`}
//                   className="mt-4 sm:mt-6 inline-block font-medium text-sm sm:text-base md:text-lg hover:text-[#F16D34] transition-colors"
//                   aria-label={`Learn more about our ${service.name.toLowerCase()} services`}
//                 >
//                   Learn more <span className="ml-2">→</span>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurServices;