import React from "react";

interface CheckboxProps {
    id: string;
    name: string;
    checked: boolean;
    onChange: () => void;
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
