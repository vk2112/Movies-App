import React from 'react';
import { BrowserRouter, Router, Route, Switch, } from 'react-router-dom';
import ShowList from './Components/ShowList';
import ShowDetails from './Components/ShowDetails';
import BookingForm from './Components/BookingForm';
import './App.css'; 

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/details/:id" exact component={ShowDetails}/>
          <Route path="/book/:id">
            <BookingForm />
          </Route>
          <Route path="/">
            <ShowList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
