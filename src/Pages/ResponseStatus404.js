import React from 'react';

const ResponseStatus404 = ({ message404, statusMessage }) => (
  <div
    style={{
      textAlign: 'center',
      marginTop: '2vmin',
      color: 'brown',
    }}
  >
    <h2>404 --- ERROR --- 404</h2>
    <p>{message404}</p>
    <p>{statusMessage}</p>
  </div>
);

export default ResponseStatus404;
