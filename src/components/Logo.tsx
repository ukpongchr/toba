import React from 'react';

export const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => (
  <img 
    src="https://i.imgur.com/AOXJt5M.png" 
    alt="Toba Oduwaiye Logo" 
    className={className}
  />
);

export default Logo;
