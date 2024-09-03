import React, { useEffect, useState } from 'react';
import sanityClient from './sanityClient';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch('*[_type == "yourDataType"]')
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {data && data.map((item) => (
        <div key={item._id}>{item.title}</div>
      ))}
    </div>
  );
}

export default App;