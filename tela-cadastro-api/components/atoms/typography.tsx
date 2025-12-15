
import React, { ReactNode } from 'react';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'label'
  | 'body'
  | 'caption';


const variantMapping: Record<TypographyVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  label: 'label',
  body: 'p',
  caption: 'span',
};


const variantClasses: Record<TypographyVariant, string> = {
  h1: 'font-bold text-4xl text-bank-primary', 
  h2: 'font-semibold text-2xl text-bank-secondary', 
  h3: 'font-semibold text-xl text-bank-text', 
  label: 'font-medium text-sm text-gray-700', 
  body: 'font-normal text-base text-gray-800', 
  caption: 'font-light text-xs text-gray-500', 
};

export interface TypographyProps {

  variant: TypographyVariant;
  children: ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,  
  children,
  className,
}) => {
  const Tag = variantMapping[variant];

  const finalClassName : string = className? className : variantClasses[variant];

  return <Tag className={finalClassName}>{children}</Tag>;
};

export default Typography;