"use client";
import React from "react";
import { InputField } from "../atoms/textInput";
import Label from "../atoms/label";

interface FormFieldProps {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    id: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    step?: string; 
}

export const FormField: React.FC<FormFieldProps> = ({
    label,
    type = "text",
    placeholder,
    value,
    id,
    name,
    onChange,
    error,
    step, 
}) => {
    return (
        <div>
            <Label htmlFor={id}>{label}</Label>
            <InputField
                type={type}
                placeholder={placeholder}
                value={value}
                id={id}
                name={name}
                onChange={onChange}
                error={error}
                step={step} 
            />
        </div>
    );
}