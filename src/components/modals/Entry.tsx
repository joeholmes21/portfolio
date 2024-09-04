import * as React from "react";

interface EntryProps {
    title: string;
    subtitle?: string;
    description?: string;
}

const Entry: React.FC<EntryProps> = ({title, subtitle, description}) => {
    return (
        <div className="p-4 rounded-lg">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    {title && <h3 className="text-lg font-semibold">{title}</h3>}
                    {subtitle && <h4 className="text-sm text-gray-500">{subtitle}</h4>}
                </div>

                {description && (
                    <div className="ml-4 flex-grow max-w-72">
                        <p>{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Entry;
