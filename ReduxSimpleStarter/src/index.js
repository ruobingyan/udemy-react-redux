import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyCwa_Fl_ivA48nSJ5gXEBzJmT9h9S3_1vU";

// Create a new component. This component should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it on the page (in the DOM )
ReactDOM.render(<App />, document.querySelector(".container"));
