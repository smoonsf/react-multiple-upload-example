import React from 'react';

const Indicator = ({ indicator }) => {
  return (
    <div>
      {indicator.name}--{indicator.status}
    </div>
  );
}

export default Indicator;