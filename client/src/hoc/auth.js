import { Axios } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';
export default function (SpecificComponent, option, adminRoute = null) {
    //null  => 아무나 출입이 가능한 페이지
    //true  => 로그인한 유저만 출입이 가능한 페이지
    //false => 로그인한 유저는 출입 불가능한 페이지
    function AuthenticationCheck() {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response)
                //로그인 하지 않은 상태
                if(!response.payload.isAuth) {
                    console.log('1')
                    if(option) {
                        console.log('2')
                        navigate('/login')
                    }
                } else {
                    //로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        console.log('3')
                        navigate('/')
                    } else {
                        if(option === false)
                        console.log('4')
                        navigate('/')
                    }
                }
            })
        }, [])
        return(
            <SpecificComponent />
        )

    }




    return AuthenticationCheck
}