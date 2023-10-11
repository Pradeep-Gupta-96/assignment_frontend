// src/ParticleEffect.js

import React from 'react';
import Particles from 'react-particles-js';

const ParticleEffect = () => {
  return (
    <div className="particle-container">
      <Particles
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#000000',
            },
            // ... other particle configuration options
          },
          // ... other configuration options
        }}
      />
    </div>
  );
};

export default ParticleEffect;
