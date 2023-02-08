import React, { Component } from "react";

class SearchResult extends Component {
    render(){
        return (
            <div>
                <h1>Search Result</h1>
                <table style={{width: "100%"}}>
                    <thead>
                        <tr>
                            <th style={{padding: "10px"}} >Date</th>
                            <th style={{padding: "10px"}} >Flight</th>
                            <th style={{padding: "10px"}} >Origin</th>
                            <th style={{padding: "10px"}} >Destination</th>
                            <th style={{padding: "10px"}} >Plane</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.searches.flights.map(
                            flight => 
                                <tr key={flight.id}>
                                    <td style={{padding: "10px"}}>{flight.date}</td>
                                    <td style={{padding: "10px"}}><a href={`/flights/${flight.id}/showpage`}>{flight.flightno}</a></td>
                                    <td style={{padding: "10px"}}>{flight.origin}</td>
                                    <td style={{padding: "10px"}}>{flight.destination}</td>
                                    <td style={{padding: "10px"}}>{flight.name}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    };
}

export default SearchResult;
