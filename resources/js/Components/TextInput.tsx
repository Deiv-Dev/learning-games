import React, {
    forwardRef,
    useEffect,
    useRef,
    InputHTMLAttributes,
} from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    isFocused?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (props.isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [props.isFocused]);

    return (
        <input
            {...props}
            ref={ref ?? inputRef}
            className={
                "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " +
                (props.className ?? "")
            }
        />
    );
});

export default TextInput;
