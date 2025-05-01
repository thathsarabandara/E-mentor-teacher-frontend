import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes <HTMLButtonElement>{
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({children, ...props}) =>{
    return(
        <button {...props} className="px-4 py-2 bg-orange-500 border-2 border-orange-500 text-white rounded hover:bg-white hover:text-orange-500">
            {children}
        </button>
    )
}