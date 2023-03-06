import React from 'react';
import Router from './Router';
import AuthProvider from './redux/AuthProvider';
export default ()=>{
    return(
        <AuthProvider>
            <Router/>
        </AuthProvider>
    )
}


