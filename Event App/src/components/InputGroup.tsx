import type { ChangeEvent } from "react";

interface InputGroupProps {
    name: string;
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    type?: string;
    isTextArea?: boolean;
    rows?: number;
    className?: string;
}

export function InputGroup({
    name,
    label,
    value,
    onChange,
    error,
    type = "text",
    isTextArea = false,
    rows = 3,
    className = "",
}: InputGroupProps) {
    const InputType = isTextArea ? "textarea" : "input";
    <div className={className}>
        <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
            {label}
        </label>
        <InputType
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            rows={isTextArea ? rows : undefined}
            type={isTextArea ? undefined : type}
            className={`w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"
                }`} />
        {error && <p className="mt-1 text-small text-red-500">{error}</p>}
    </div>;

}