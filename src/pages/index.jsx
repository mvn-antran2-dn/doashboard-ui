import React from 'react'
import { Route, Routes } from "react-router-dom";
import Chat from './Chat';
import DashBoard from './DashBoard';
import Profile from './Profile';
import Test from './test';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard/>}></Route>
      <Route path="/chat" element={<Chat />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/test" element={<Test />}></Route>
    </Routes>
  )
}

export default Main