import { Route, Routes, Navigate } from 'react-router-dom'
import { useContext, useEffect, useMemo } from 'react';
import { SidebarContext } from '@/layouts/demo4/DashboardLayoutProvider';

import {
    WorkFlowDasbhard
} from '@/pages/workflow/WorkFlowDasbhard';

const ActivityIndex = () => {
    const context = useContext(SidebarContext)
    const sideBarMenuData = useMemo(
        () => [
            {
                title: "Activity Navigation",
                children: [
                    { title: "Dashboard", path: "/dashboard" },
                    { title: "Proposals", path: "/proposals" },
                    { title: "Process tracker", path: "/account/appearance" },
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
                <Route path='/dashboard' element={<WorkFlowDasbhard />} />
                <Route path='/proposals' element={<WorkFlowDasbhard />} />
            </Route>
            <Route index element={<Navigate to='/dashboard' />} />
        </Routes>
    )
}

export { ActivityIndex } 
