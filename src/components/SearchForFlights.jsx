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
            flights: [
                {flightno:"",
                origin: "", 
                destination: "",
                date:"",
            },
            ]

        }
        // this.saveSearches = this.saveSearches.bind(this);
        this.findFlights = this.findFlights.bind(this);
    }

    // React lifecycle method
    // componentDidMount() {
    //     axios.get(FLIGHTS_URL).then(
    //         (response) => {
    //             console.log("this is axios :", response.data);
    //             // send the API data to the state 
    //             response.data.forEach((flight) => {
    //                 console.log('!!!!', flight.destination) 
    //             })

    //             this.setState({ flights: response.data });
    //         }

    //     )

    // }

    // method for the component to interact with the search form
    // saveSearches = (content)=>{
    //     const origin = content.origin;
    //     const destination = content.destination;
    //     this.setState({
    //         flights: [{origin, destination},...this.state.flights]
    //     })
    //     console.log('we have updated:', this.state.flights);
    // }


    // method to find flights with origin and destination; interacting with the search form
    // TODO: saveSearches should be for 'admin' 
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
            })
    }

    render()   {
        return (
            <div>
                <h1>Parent Component: Search For Flights </h1>
                <SearchForm onSubmit={ this.findFlights }/>
                <SearchResult searches={ this.state.flights }/>
            </div>
        )
    }
}

export default SearchForFlights;