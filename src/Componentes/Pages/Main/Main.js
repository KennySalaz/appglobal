import React from "react";
import styled from "styled-components";
import Dashboard from "./PagesDashboard/Dashboard";
import Sidebar from "./PagesDashboard/Sidebar";




const Main = () => {
  return (
    <Div>
       
     <Sidebar />
     <Dashboard />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;


export default Main
