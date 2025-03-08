'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRoleContext } from '@/contexts/role-context';

interface SidebarItem {
    name: string;
    path: string;
    icon: string;
    requiresAdmin?: boolean;
}

const sidebarItems: SidebarItem[] = [
    { name: 'Dashboard', path: '/dashboard', icon: 'grid' },
    { name: 'Policies', path: '/dashboard/policies', icon: 'file-text' },
    { name: 'Claims', path: '/dashboard/claims', icon: 'clipboard' },
    { name: 'Customers', path: '/dashboard/customers', icon: 'users' },
    { name: 'Analytics', path: '/dashboard/analytics', icon: 'bar-chart' },
    { name: 'Settings', path: '/dashboard/settings', icon: 'settings' },
    { name: 'User Management', path: '/dashboard/users', icon: 'user-plus', requiresAdmin: true },
];

export default function Sidebar() {
    const pathname = usePathname();
    const { userRole, isAdmin } = useRoleContext();

    if (!userRole) return null;

    return (
        <div className="w-64 bg-slate-800 h-screen text-white p-4 fixed left-0 top-0">
            <div className="mb-8 pt-4">
                <h2 className="text-2xl font-bold text-center">Insurance Dashboard</h2>
            </div>

            <nav className="space-y-2">
                {sidebarItems.map((item) => {
                    if (item.requiresAdmin && !isAdmin) return null;

                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`flex items-center p-2 rounded-md hover:bg-slate-700 ${isActive ? 'bg-slate-700' : ''}`}
                        >
                            <span className={`icon-${item.icon} mr-2`}></span>
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}