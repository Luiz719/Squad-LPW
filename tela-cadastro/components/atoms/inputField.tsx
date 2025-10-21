import React from "react";

interface InputFieldProps {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
    type = "text",
    placeholder,
    value,
    onChange,
    error,
}) => {
    return(
        <div className="flex flex-col w-full">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border rounded-xl px-4 py-2 text-sm outline-none transition-all
                    ${error ? "border-red-500" : "border-gray-300 focus:border-blue-500"}
                    `}
            />
            {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
        </div>
    );
};
