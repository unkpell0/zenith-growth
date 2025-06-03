import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="py-2 md:py-3"> {/* Further reduced padding */}
      <div className="w-full border-t border-brand-border opacity-20"></div>
    </div>
  );
};

export default SectionDivider;