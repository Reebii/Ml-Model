// src/components/NaturalDisaster.js
import React from 'react';
import './NaturalDisaster.css';

const NaturalDisaster = ({ title, image, precautions }) => {
  return (
    <div className="natural-disaster">
      <h2>{title}</h2>
      <img src={image} alt={title} className="disaster-image" />
      <div className="precautions">
        <h3>Precautions</h3>
        <ul>
          {precautions.map((precaution, index) => (
            <li key={index}>{precaution}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NaturalDisaster;
