import React from 'react';
import Calculate from '../Calculate';

const Result = () => {
  const { Lead, Tail, Displacement } = Calculate();
  return (
    <div>
        <div>Lead Slurry {Lead()} bbl</div>
        <div>Tail Slurry {Tail()} bbl</div>
        <div>Displacement {Displacement()} bbl</div>
    </div>
  )
}

export default Result;
