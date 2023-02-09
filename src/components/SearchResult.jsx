import React, { Component } from "react";

class SearchResult extends Component {
    render(){
        return (
            <div >
                <h3>Search Result</h3>
                <div className="tabletag">
                <table style={{width: "50%"}}>
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
                </div>
        )
    };
}

export default SearchResult;
