'use cliente';
import React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    id,
    name,
    checked,
    onChange,
}) => (
        <input
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            onChange={onChange}
            className="accent-blue-600 w-5 h-5"
        />
);
