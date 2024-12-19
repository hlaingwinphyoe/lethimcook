import React from 'react';
import SectionTitle from '../common/SectionTitle';
import CommunityGrid from './CommunityGrid';
import CommunityCallToAction from './CommunityCallToAction';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Join Our Community"
          subtitle="Be part of the culinary revolution in crypto"
        />
        <CommunityGrid />
        <CommunityCallToAction />
      </div>
    </section>
  );
};

export default Community;