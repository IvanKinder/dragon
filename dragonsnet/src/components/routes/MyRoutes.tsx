import React, {FC} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import {routes} from "./list";
import Error404 from "../errors/Error404";
import Layout from "../layout/Layout";
import Login from "../pages/auth/Login";

const MyRoutes: FC = () => {
    // const isAuth = true;
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/profile" element={<Layout/>}/>
                    {/*<Route path="/chats" element={<BodyContainer chatsList={chatsList} setChatsList={setChatsList} messageList={messageList} setMessageList={setMessageList}/>}/>*/}
                    {/*<Route path="/chat">*/}
                    {/*    <Route path=":id" element={*/}
                    {/*        <MyForm chatsList={chatsList} setChatsList={setChatsList} messageList={messageList} setMessageList={setMessageList}/>*/}
                    {/*    }/>*/}
                    {/*</Route>*/}
                    <Route path="404" element={<Error404/>}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MyRoutes
