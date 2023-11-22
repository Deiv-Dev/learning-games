import React from "react";

interface InputLabelProps {
    htmlFor?: string;
    value: string;
    className?: string;
    children?: React.ReactNode;
}

const InputLabel: React.FC<InputLabelProps> = ({
    value,
    className = "",
    children,
    ...props
}) => {
    return (
        <label
            {...props}
            className={
                `block font-medium text-sm text-gray-700 dark:text-gray-300 ` +
                className
            }
        >
            {value || children}
        </label>
    );
};

export default InputLabel;
