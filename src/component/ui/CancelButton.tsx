import React from "react";

interface CancelButtonProps extends React.ButtonHTMLAttributes <HTMLButtonElement>{
    children: React.ReactNode;
}

export const CancelButton: React.FC<CancelButtonProps> = ({children, ...props}) =>{
    return(
        <button {...props} className="px-4 py-2 bg-transparent border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-100 hover:text-orange-500">
            {children}
        </button>
    )
}