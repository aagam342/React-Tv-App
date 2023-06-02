import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ShowList from "./Components/ShowList";
import ShowDetails from "./Components/ShowDetails";
import BookTicketForm from "./Components/BookTicketForm";

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            TV Shows App
          </Link>
        </div>
      </nav>
      <div className="container mt-4 ">
        <Routes>
          <Route exact path="/" element={<ShowList />}></Route>
          <Route path="/show/:showId" element={<ShowDetails />}></Route>
          <Route path="/book-ticket" element={<BookTicketForm />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
