import React from 'react'
import { Route, Routes } from "react-router-dom";
import Chat from './Chat';
import DashBoard from './DashBoard';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard/>}></Route>
      <Route path="/chat" element={<Chat />}></Route>
    </Routes>
  )
}

export default Main