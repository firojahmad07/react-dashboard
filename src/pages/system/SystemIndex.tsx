import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { Demo4Layout } from '@/layouts/demo4';
import {
    WorkFlowDasbhard
} from '@/pages/workflow/WorkFlowDasbhard';

const SystemIndex = () => {
    
    return (
        <Routes>
            <Route element={<Demo4Layout />}>
                <Route path='/catalog-monintoring' element={ <WorkFlowDasbhard /> } />
                <Route path='/configuration' element={ <WorkFlowDasbhard /> } />
                {/* user navigation */}
                <Route path='/users' element={ <WorkFlowDasbhard /> } />
                <Route path='/roles' element={ <WorkFlowDasbhard /> } />
                <Route path='/user-groups' element={ <WorkFlowDasbhard /> } />
            </Route>
            <Route index element={<Navigate to='/system/catalog-monintoring' />} />
        </Routes>
    )
}

export {SystemIndex} 
