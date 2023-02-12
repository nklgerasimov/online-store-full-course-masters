import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import { SHOP_ROUTE } from '../utils/consts';
import {Context} from '../index'
import { observer } from 'mobx-react-lite';

const AppRouter = observer( () => {
    const {user} = useContext(Context)

    console.log(user)
    // const isAuth = false
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact></Route>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact></Route>
            )}

            {/* redirect */}
        </Routes>
    );
});

export default AppRouter;