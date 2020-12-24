import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';
import Header from '../Header';
import Footer from '../Footer';
import Books from '../Books';
// import BookDetails from '../BookDetails';

const App = () =>{
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Header />
          <div className="content main">
            <Route exact path="/" component={Books} />
            {/* <Route exact path="/books/:id" component={BookDetails} /> */}
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;