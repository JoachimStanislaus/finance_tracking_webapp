import React from 'react';
import emptyavatar from '../assets/emptyavatar.jpg'; // fallback image

interface AvatarProps {
  imageUrl?: string;
  size?: number; // optional prop to control size
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, size = 34, alt = 'Avatar' }) => {
  return (
    <img
      src={imageUrl || emptyavatar}
      alt={alt}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        objectFit: 'cover',
        backgroundColor: '#ccc',
      }}
    />
  );
};

export default Avatar;