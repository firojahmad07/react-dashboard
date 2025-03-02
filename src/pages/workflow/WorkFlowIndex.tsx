import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { Main } from '@/layouts/demo4/main/Main';
import { Demo4Layout } from '@/layouts/demo4';

import {
    WorkFlowDasbhard
} from '@/pages/workflow/WorkFlowDasbhard';

const WorkFlowIndex = () => {
    return (
        <Routes>
            <Route element={<Demo4Layout />}>
                <Route path='/dashboard' element={ <WorkFlowDasbhard /> } />
            </Route>
            <Route index element={<Navigate to='/workflow/dashboard' />} />
        </Routes>
    )
}

export {WorkFlowIndex} 
