import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

class SearchForFlights extends Component {
    render(){
        return(
            <div>
              
                {/* child components to be updated by Andrew*/}
                <SearchForm />
                <SearchResults />
            </div>
        )
    }

}

export default SearchForFlights;