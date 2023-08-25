
import React, { FC} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./navbar/Navbar"
import { Contact } from "./component/Contact";
import { CreateContact } from "./component/CreateContact";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { MapsCharts } from "./component/MapsCharts";
import { EditContact } from "./component/EditContact";

// import Navbar from './component/navbar/Navbar'


const App : FC = ()=> {
  
  
  return(
   <Provider store= {store}>
    <Router>
      <Navbar />
      <Routes>     
        <Route path="/contact" element= {<Contact />} />
        <Route path="/maps" element={<MapsCharts />}  />
        <Route path="/create-contact" element= {<CreateContact />} />
        <Route path="/editContact/:id" element= {<EditContact />} />
      </Routes>
    </Router>
    </Provider>
  )
}



export default App