import React, { Component } from "react";

class SearchResult extends Component {
    render(){
        return (
            <div>
                <h1>Search Result</h1>
                {/* {console.log("this is from S Result", this.props.searches)} */}
                {this.props.searches.map(
                    search => 
                    <ul>
                        <li>Date: {search.date}</li>
                        <li>Flight: {search.flightno} </li>
                        <li> Origin: {search.origin}</li>
                        <li> Destination: {search.destination} </li>
                        <li>Plane: {search.plane_id} </li>
                    </ul>

                )
                }
            </div>
        )
    };
}

export default SearchResult;