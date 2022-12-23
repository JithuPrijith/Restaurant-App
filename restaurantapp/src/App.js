import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RestaurantList from "./Components/RestaurantList";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ViewRestaurant from "./Components/ViewRestaurant";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
       <Header/>
       <h2>Restaurant Application</h2>
      </header>
      <Routes>
      <Route path="/" element={<RestaurantList/>}/>
      <Route path="/view-restaurant/:id" element={<ViewRestaurant/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
