
import React from 'react';
import MetaTags from '../components/MetaTags';

const About: React.FC = () => {
  return (
    <>
      <MetaTags 
        title="About | Homiee"
        description="Learn about Homiee's story, mission, and commitment to quality. We believe a well-designed home is a foundation for a well-lived life."
        keywords="about homiee, company story, interior design philosophy, sustainable furniture, ethical sourcing"
        canonicalUrl="https://www.homiee.studio/about"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold serif mb-6">Our Story</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Homiee was founded on a simple belief: a well-designed home is a foundation for a well-lived life. 
            We started as a small artisan studio in 2024 and have grown into a platform for modern living solutions.
          </p>
        </div>
        
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-24">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Workspace"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold serif mb-4">Quality First</h3>
            <p className="text-gray-600">
              We source only the finest materials, from sustainably harvested oak to hand-woven textiles, ensuring our products stand the test of time.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold serif mb-4">Functional Beauty</h3>
            <p className="text-gray-600">
              A piece of furniture should be as useful as it is beautiful. We prioritize ergonomics and practicality in every design we offer.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold serif mb-4">Ethical Sourcing</h3>
            <p className="text-gray-600">
              Our partners share our commitment to fair wages and environmental stewardship, making your choice for Homiee a choice for good.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-clay/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold serif mb-8">Meet the Creative Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden aspect-square rounded-2xl mb-4">
                  <img 
                    src={`https://picsum.photos/seed/team${i}/400/400`} 
                    alt="Team member" 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h4 className="font-bold">Team Member {i}</h4>
                <p className="text-gray-500 text-sm">Design Specialist</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
