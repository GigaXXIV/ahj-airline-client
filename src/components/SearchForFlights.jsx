import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";


class SearchForFlights extends Component {
    // save the state of the form
    constructor(){
        super();
        this.state = {
            searchTems: [
                {origin: "SFX", destination: "SFO",},
            ]

        }
        this.saveSearches = this.saveSearches.bind(this);
    }

    // method for the component to interact with the search form
    saveSearches = (content)=>{
        const origin = content.origin;
        const destination = content.destination;
        this.setState({
            searchTems: [{origin, destination},...this.state.searchTems]
        })
        console.log('we have updated:', this.state.searchTems);
    }

    render()   {
        return (
            <div>
                <h1>Parent Component: Search For Flights </h1>
                <SearchForm onSubmit={ this.saveSearches }/>
                <SearchResult searches={ this.state.searchTems }/>
            </div>
        )
    }
}

export default SearchForFlights;