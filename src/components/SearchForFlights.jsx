import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import axios from "axios";




// URL for flights and planes 
const FLIGHTS_URL = "http://localhost:3000/flights.json";
const PLANES_URL = "http://localhost:3000/planes.json";

class SearchForFlights extends Component {
    // save the state of the form
    constructor(){
        super();
        this.state = {
            flights: [{},],
            planes:[{},]

        }
        // this.saveSearches = this.saveSearches.bind(this);
        this.findFlights = this.findFlights.bind(this);
    }

    findFlights = (content) => {
        const origin = content.origin;
        const destination = content.destination;  
        axios.get(FLIGHTS_URL).then(
            (response) => {
                let matchedFlights = [];
                response.data.forEach((flight) => {
                    if (flight.origin === origin && flight.destination === destination) {
                        // console.log("response", {flights: flight })
                        matchedFlights.push(flight);
                    }
                })
                this.setState({
                    flights: matchedFlights
                })
            });
            
    }

    render()   {
        return (
            <div>
                <h1>Parent Component: Search For Flights </h1>
                <SearchForm onSubmit={ this.findFlights }/>
                <SearchResult searches={ this.state }/>
            </div>
        )
    }
}

export default SearchForFlights;