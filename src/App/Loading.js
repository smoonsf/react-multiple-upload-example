import React from 'react';

const Loading = ({ name, status }) => {
  return (
    <div>
      {name}--{status}
    </div>
  );
}

export default Loading;