import React from 'react';


const baseStyles = 'h-auto w-full';

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {

  
}

export const Logo: React.FC<LogoProps> = ({
  className,
  alt = 'Logo da UFBA',
  ...props
}) => {

  const src =  "/ufba-seeklogo.png";
  const classes = [baseStyles, className];
  const finalClassName = classes.filter(Boolean).join(' ');

  return (
    <img
      src={src}
      alt={alt}
      className={finalClassName}
      {...props}
    />
  );
};

export default Logo;