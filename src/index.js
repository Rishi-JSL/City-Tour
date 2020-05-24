import React from 'react';
import ReactDOM from 'react-dom';



import Nav from './components/NavBar/NavBar';
import Cities from './components/Cities/Cities';

//import "../node_modules/font-awesome/css/font-awesome.min.css";


const CityTour = ()=>{
  return(
    <React.Fragment>
        <Nav />
        <Cities />
    </React.Fragment>
  )
}
ReactDOM.render(<CityTour />,document.getElementById("root"))
