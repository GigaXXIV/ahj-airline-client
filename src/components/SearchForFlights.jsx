import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import axios from "axios";




// URL for flights 
const FLIGHTS_URL = "http://localhost:3000/flights.json";

class SearchForFlights extends Component {
    // save the state of the form
    constructor(){
        super();
        this.state = {
            searchTems: [
                {origin: "SFX", destination: "SFO",}, // dummy data for testing, TODO: removed later 
            ]

        }
        this.saveSearches = this.saveSearches.bind(this);
    }

    // React lifecycle method
    componentDidMount() {
        axios.get(FLIGHTS_URL).then(
            (response) => {
                console.log("this is axios :", response.data);
            }

        )

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