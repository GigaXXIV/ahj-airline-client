import React, { Component } from "react";

class SearchResult extends Component {
    render(){
        return (
            <div>
                <h1>Search Result</h1>
                {this.props.searches.flights.map(
                    flight => 
                    <ul>
                        <li>Date: {flight.date}</li>
                        <li>Flight: <a href={`/flights/${flight.id}/showpage`}>{flight.flightno}</a></li>
                        <li> Origin: {flight.origin}</li>
                        <li> Destination: {flight.destination} </li>
                        <li>Plane:{flight.name}</li>
                    </ul>

                )
                }
                {/* {Object.keys(this.props.searches).forEach(key => {
                    console.log("FOR EACH", key, this.props.searches[key])
                })} */}
            </div>
        )
    };
}

export default SearchResult;