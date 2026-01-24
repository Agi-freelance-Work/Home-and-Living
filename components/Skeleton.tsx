import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangle' | 'circle' | 'text';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangle',
  width,
  height,
  animation = 'pulse'
}) => {
  const baseClasses = 'bg-gray-200';
  
  let shapeClasses = '';
  switch (variant) {
    case 'circle':
      shapeClasses = 'rounded-full';
      break;
    case 'text':
      shapeClasses = 'rounded-md';
      break;
    default:
      shapeClasses = 'rounded-xl';
  }

  let animationClasses = '';
  switch (animation) {
    case 'pulse':
      animationClasses = 'animate-pulse';
      break;
    case 'wave':
      animationClasses = 'animate-pulse';
      break;
    case 'none':
      animationClasses = '';
      break;
    default:
      animationClasses = 'animate-pulse';
  }

  const style: React.CSSProperties = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      className={`${baseClasses} ${shapeClasses} ${animationClasses} ${className}`}
      style={style}
      aria-label="Loading content"
    />
  );
};

export default Skeleton;