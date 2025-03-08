'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { currentUser } from '@/lib/sample-data';

interface RoleContextType {
    userRole: string | null;
    setUserRole: (role: string | null) => void;
    isAdmin: boolean;
}

const RoleContext = createContext<RoleContextType>({
    userRole: null,
    setUserRole: () => { },
    isAdmin: false,
});

export const useRoleContext = () => useContext(RoleContext);

// In a real application, this would fetch the user's role from Okta
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [userRole, setUserRole] = useState<string | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    // Simulate fetching role from authentication provider
    useEffect(() => {
        // This would be replaced with actual Okta integration
        const fetchUserRole = async () => {
            try {
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 500));

                // In a real app, this would come from Okta
                const role = currentUser.role;
                setUserRole(role);
                setIsAdmin(role === 'IAC Admin');
            } catch (error) {
                console.error('Error fetching user role:', error);
            }
        };

        fetchUserRole();
    }, []);

    return (
        <RoleContext.Provider value={{ userRole, setUserRole, isAdmin }}>
            {children}
        </RoleContext.Provider>
    );
};