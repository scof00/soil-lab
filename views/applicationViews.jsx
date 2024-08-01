import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router";
import { Navbar } from "../components/navbar/navbar";
import { Home } from "../components/home/home";
import { NewSubmission } from "../components/new submissions/newSubmission";


export const ApplicationViews = () => {

  return(
    <Routes>
      <Route
      path="/"
      element={
        <>
        <Navbar/>
        <Outlet/>
        </>
      }
      >
        <Route path="/" element={<Home/>}/>
        <Route path="/newSubmission" element={<NewSubmission/>}/>
        
      </Route>
    </Routes>
    
  )
};