import React, { useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';
type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  image: string;
};
export function OurStory() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const timelineEvents: TimelineEvent[] = [{
    year: '1962',
    title: 'The Beginning',
    description: "Maria and Giuseppe Rossi open a small trattoria in the heart of the city, serving traditional recipes from their hometown in Tuscany. With just six tables, Nonna's Table quickly became known for its handmade pasta and warm hospitality.",
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    year: '1975',
    title: 'Expansion',
    description: "After years of success, the Rossi family purchases the neighboring building, expanding Nonna's Table to accommodate more guests. Their son Antonio joins the family business, bringing with him new ideas while honoring traditional techniques.",
    image: 'https://images.unsplash.com/photo-1574966739987-65ee4e7a990c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    year: '1988',
    title: 'Award Recognition',
    description: "Nonna's Table receives its first culinary award for 'Best Traditional Italian Restaurant.' Maria's signature ragu sauce becomes so popular that customers begin asking to purchase it by the jar to take home.",
    image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    year: '1995',
    title: 'The New Generation',
    description: "Antonio's daughter Sofia graduates from culinary school and returns to Nonna's Table, bringing contemporary techniques while preserving her grandmother's recipes. The restaurant introduces a wood-fired pizza oven imported from Naples.",
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    year: '2008',
    title: 'Renovation & Revival',
    description: "After a complete renovation that preserved the restaurant's historic charm while modernizing the kitchen, Nonna's Table reopens to critical acclaim. The family introduces seasonal menus highlighting local ingredients.",
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    year: '2022',
    title: "Today's Legacy",
    description: "Now in its fourth generation of family ownership, Nonna's Table continues to serve the community with the same passion and dedication as when Maria and Giuseppe first opened their doors. The restaurant celebrates its 60th anniversary with a special menu featuring dishes from each decade.",
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }];
  const toggleEvent = (index: number) => {
    setActiveEvent(activeEvent === index ? null : index);
  };
  const nextEvent = () => {
    if (activeEvent === null) {
      setActiveEvent(0);
    } else if (activeEvent < timelineEvents.length - 1) {
      setActiveEvent(activeEvent + 1);
    }
  };
  const prevEvent = () => {
    if (activeEvent === null) {
      setActiveEvent(timelineEvents.length - 1);
    } else if (activeEvent > 0) {
      setActiveEvent(activeEvent - 1);
    }
  };
  return <section id="our-story" className="relative py-20 md:py-32 bg-amber-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <img src="https://images.unsplash.com/photo-1607867534411-1b3c7c8d3567?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" className="absolute -right-20 -top-20 w-64 h-64 object-cover rounded-full" />
        <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" className="absolute -left-20 bottom-40 w-48 h-48 object-cover rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-orange-600 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-gray-800 mb-6">
            Our Story
          </h2>
          <p className="font-serif text-lg text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to a beloved institution, discover the rich
            history of Nonna's Table and the family that made it all possible.
          </p>
        </div>
        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-6 bottom-6 w-1 bg-amber-200"></div>
          <div className="absolute left-4 top-6 bottom-6 w-1 bg-amber-600" style={{
          height: `${(activeEvent !== null ? activeEvent + 1 : 0) * 100 / timelineEvents.length}%`
        }}></div>
          <div className="space-y-12 relative">
            {timelineEvents.map((event, index) => <div key={index} className="relative pl-12">
                {/* Timeline node */}
                <button onClick={() => toggleEvent(index)} className={`absolute left-0 top-1 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 transition-all duration-300 flex items-center justify-center
                    ${activeEvent === index ? 'border-amber-600 bg-white scale-125' : 'border-amber-600 bg-amber-100 hover:scale-110'}`} aria-label={`View event from ${event.year}`}>
                  {activeEvent === index && <div className="w-2 h-2 bg-amber-600 rounded-full animate-scaleIn"></div>}
                </button>
                {/* Year and title */}
                <div className="flex items-center mb-2">
                  <span className="font-script text-2xl text-amber-600">
                    {event.year}
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <h3 className="font-script text-xl text-gray-800">
                    {event.title}
                  </h3>
                </div>
                {/* Expandable content */}
                <div className={`overflow-hidden transition-all duration-500 ${activeEvent === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className={`bg-white p-5 rounded-xl shadow-md mb-4 ${activeEvent === index ? 'animate-fadeInUp' : ''}`}>
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <p className="font-serif text-gray-700">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-amber-200 -translate-y-1/2"></div>
          <div className="absolute left-0 top-1/2 h-1 bg-amber-600 -translate-y-1/2 transition-all duration-500" style={{
          width: `${(activeEvent !== null ? activeEvent + 1 : 0) * 100 / timelineEvents.length}%`
        }}></div>
          {/* Navigation buttons */}
          <div className="flex justify-between mb-8">
            <button onClick={prevEvent} className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors duration-300" aria-label="Previous event">
              <ChevronLeftIcon className="w-6 h-6 text-amber-600" />
            </button>
            <button onClick={nextEvent} className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors duration-300" aria-label="Next event">
              <ChevronRightIcon className="w-6 h-6 text-amber-600" />
            </button>
          </div>
          {/* Timeline nodes */}
          <div className="relative h-24 mb-8">
            {timelineEvents.map((event, index) => <button key={index} onClick={() => toggleEvent(index)} className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 transition-all duration-300
                  ${activeEvent === index ? 'border-amber-600 bg-white scale-125 z-10' : 'border-amber-600 bg-amber-100 hover:scale-110'}
                  ${index === 0 ? 'left-0' : index === timelineEvents.length - 1 ? 'right-0' : ''}`} style={{
            left: index === 0 ? '0%' : index === timelineEvents.length - 1 ? 'auto' : `${index * 100 / (timelineEvents.length - 1)}%`
          }} aria-label={`View event from ${event.year}`}>
                {activeEvent === index && <div className="w-2 h-2 bg-amber-600 rounded-full animate-scaleIn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>}
              </button>)}
          </div>
          {/* Years display */}
          <div className="relative h-12 mb-8">
            {timelineEvents.map((event, index) => <div key={index} className={`absolute font-script text-xl transition-all duration-300
                  ${activeEvent === index ? 'text-amber-600 scale-110' : 'text-gray-500'}
                  ${index === 0 ? 'left-0 text-left' : index === timelineEvents.length - 1 ? 'right-0 text-right' : 'text-center transform -translate-x-1/2'}`} style={{
            left: index === 0 ? '0%' : index === timelineEvents.length - 1 ? 'auto' : `${index * 100 / (timelineEvents.length - 1)}%`
          }}>
                {event.year}
              </div>)}
          </div>
          {/* Active event content */}
          {activeEvent !== null && <div className="bg-white rounded-xl shadow-xl p-8 animate-fadeInUp">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <img src={timelineEvents[activeEvent].image} alt={timelineEvents[activeEvent].title} className="w-full h-64 lg:h-full object-cover rounded-lg shadow-md" />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="font-script text-3xl text-gray-800 mb-2">
                    {timelineEvents[activeEvent].title}
                  </h3>
                  <div className="inline-block bg-amber-100 px-4 py-1 rounded-full mb-4">
                    <span className="font-script text-xl text-amber-600">
                      {timelineEvents[activeEvent].year}
                    </span>
                  </div>
                  <p className="font-serif text-gray-700 text-lg leading-relaxed">
                    {timelineEvents[activeEvent].description}
                  </p>
                </div>
              </div>
            </div>}
        </div>
        {/* Italian-inspired decorative elements */}
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="#D97706" />
            <path d="M72 25H28v50h44V25zm-4 46H32V29h36v42z" fill="#D97706" />
            <path d="M38 40h24v4H38zm0 10h24v4H38zm0 10h24v4H38z" fill="#D97706" />
          </svg>
        </div>
        <div className="absolute top-20 left-10 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L63.5 36.5H100L70.5 59.5L84.5 96L50 74.5L15.5 96L29.5 59.5L0 36.5H36.5L50 0Z" fill="#D97706" />
          </svg>
        </div>
      </div>
    </section>;
}