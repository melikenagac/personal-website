import React from 'react';

type BadgeVariant = 'secondary' | 'primary' | 'success'; // Add other variants as needed

interface BadgeProps {
    children: React.ReactNode;
    variant: BadgeVariant;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant, className = '' }) => {
    const variantClasses: Record<BadgeVariant, string> = {
        secondary: 'bg-gray-200 text-gray-800',
        primary: 'bg-blue-200 text-blue-800',
        success: 'bg-green-200 text-green-800',
        // Add other variants here
    };

    return (
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${variantClasses[variant]} ${className}`}>
            {children}
        </span>
    );
}; 