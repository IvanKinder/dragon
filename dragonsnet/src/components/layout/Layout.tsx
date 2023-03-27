import React, {FC, PropsWithChildren, useEffect, useState} from 'react'
import Header from "./header/Header";
import Content from "./Content";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Loader from "../loader/Loader";
import Cookies from 'universal-cookie';


const Layout: FC<PropsWithChildren> = ({children}: any) => {
    const layoutStyle = {
        display: 'grid',
        width: '79vw',
        margin: '0.7vw auto',
        gap: '1.4vh'
    }
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({
        data: '',
        username: ''
    })
    const dispatch = useDispatch()
    const cookies = new Cookies();
    const state = useSelector((state: any) => state);
    const [token, setToken] = useState(state.token.token)
    try {
        useSelector((state: any) => state.token)
    } catch (error) {}

    useEffect(() => {
        if (!token) {
            dispatch({type: 'SET_TOKEN', token: cookies.get('jwt')});
            setToken(cookies.get('jwt'));
        }

        if (cookies.get('jwt')) {
            axios.get(
                'http://localhost:8000/profile/',
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + cookies.get('jwt')
                    }
                }
            ).then((res) => {
                if (res.status === 200) {
                    dispatch({
                        type: 'SET_PROFILE_DATA', profile: {...res.data}
                    });
                    setLoading(false);
                    setData(res.data);
                }
            }).catch(error => {
                if (error.message === 'Request failed with status code 403') {
                    cookies.set('jwt', '');
                    navigate('/');
                }
                navigate('/404');
            });
        } else {
            navigate('/');
        }
    }, [])

    return (
        <>
            <Loader loading={loading}>
            </Loader>
            <div style={layoutStyle}>
                <Header/>
                <Content data={data}/>
            </div>
        </>
    )
}

export default Layout
