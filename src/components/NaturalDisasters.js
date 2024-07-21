// src/components/NaturalDisasters.js
import React from 'react';
import NaturalDisaster from './NaturalDisaster';
import earthquakeImage from '../images/earthquake.jpg'; // Add your images in the 'src/images' directory
import floodImage from '../images/flood.jpg';

const NaturalDisasters = () => {
  const earthquakePrecautions = [
    'Drop, Cover, and Hold On during shaking.',
    'Stay indoors until the shaking stops.',
    'Move to an open area if you are outdoors.'
  ];

  const floodPrecautions = [
    'Move to higher ground immediately.',
    'Avoid walking or driving through flood waters.',
    'Listen to emergency broadcasts for updates.'
  ];

  return (
    <div className="natural-disasters">
      <NaturalDisaster
        title="Earthquake"
        image={earthquakeImage}
        precautions={earthquakePrecautions}
      />
      <NaturalDisaster
        title="Flood"
        image={floodImage}
        precautions={floodPrecautions}
      />
    </div>
  );
};

export default NaturalDisasters;
