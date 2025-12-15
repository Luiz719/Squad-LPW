import React from 'react';


const baseStyles = 'font-medium text-sm text-gray-700';


export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  ...props
}) => {

  const finalClassName = [baseStyles, className].filter(Boolean).join(' ');

  return (
    <label className={finalClassName} {...props}>
      {children}
    </label>
  );
};

export default Label;