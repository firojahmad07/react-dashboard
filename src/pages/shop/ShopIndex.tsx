import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { Main } from '@/layouts/demo4/main/Main';
import { Demo4Layout } from '@/layouts/demo4';
import { useContext, useEffect, useMemo } from 'react';
import { SidebarContext } from '@/layouts/demo4/DashboardLayoutProvider';

import {
    WorkFlowDasbhard
} from '@/pages/workflow/WorkFlowDasbhard';

const ShopIndex = () => {
    const context = useContext(SidebarContext)
        const sideBarMenuData = useMemo(
            () => [
                {
                    title: "Sales Navigation",
                    children: [
                        { title: "Orders", path: "/shop/orders" },
                        { title: "Payments", path: "/shop/payments" },
                        { title: "Invoices", path: "/shop/invoices" },
                        { title: "Customers", path: "/shop/customers" }
                    ],
                },
                
            ],
            []
        );
        useEffect(() => {
            if (context?.setSidebarMenu) {
                context.setSidebarMenu(sideBarMenuData);
            }
        }, [context]);
    return (
        <Routes>
            <Route>
                <Route path='/orders' element={ <WorkFlowDasbhard /> } />
                <Route path='/payments' element={ <WorkFlowDasbhard /> } />
                <Route path='/invoices' element={ <WorkFlowDasbhard /> } />
                <Route path='/customers' element={ <WorkFlowDasbhard /> } />
            </Route>
            <Route index element={<Navigate to='/shop/orders' />} />
        </Routes>
    )
}

export {ShopIndex} 
