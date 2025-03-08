'use client';

import React from 'react';
import { useRoleContext } from '@/contexts/role-context';

interface RoleGateProps {
    allowedRoles: string[];
    children: React.ReactNode;
}

// Component to conditionally render content based on user roles
export const RoleGate: React.FC<RoleGateProps> = ({
    allowedRoles,
    children
}) => {
    const { userRole } = useRoleContext();

    if (!userRole || !allowedRoles.includes(userRole)) {
        return null;
    }

    return <>{children}</>;
};