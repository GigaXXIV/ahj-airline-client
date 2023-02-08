import React,{ Component, useState } from "react";
import axios from "axios";

const FLIGHTS_URL =`http://localhost:3000/flights.json`

class Admin extends Component {
    constructor(){
        super();
        this.state = {
         flights:[]   
        };
        this.saveFlights = this.saveFlights.bind(this);
    }

    //react lifecycle method
    componentDidMount(){
        const fetchFlights = () => {
        axios.get(FLIGHTS_URL).then(
            response =>{
                this.setState({
                    flights:response.data
                });
                setTimeout(fetchFlights,1000);
            }
        ).catch(error=>{
            console.log(error);
        })
    };
        fetchFlights();
    }

    saveFlights = (flights) =>{
        // console.log(flights);
        // this.setState({flights:[flights, ...this.state.flights]});
        axios.post(FLIGHTS_URL,flights).then(
            response =>{
                this.setState({
                    flights:[response.data,...this.state.flights]
                })
            }
        )
    }


    render() {
        return (
            <div>
                Admin can create a flight
                <FlightCreateForm onSubmit={ this.saveFlights }/> 
                <NewFlights flights={ this.state.flights }/>
            </div>
        )
    }
}


const FlightCreateForm = (props) => {
    // const [flight, setFlight] = useState("");

    const [flight, setFlight] = useState({
        flightno: '',
        origin: '',
        destination: '',
        date: '',
        name: ''
      });

    const _handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "origin" || name === "destination") {
            setFlight({ ...flight, [name]: value.toUpperCase() });
        } else {
            setFlight({ ...flight, [name]: value });
        };
    }


    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(flight);
        setFlight("")
    }

    return (
        <form onSubmit={ _handleSubmit }>
            <input type="text" placeholder="Flight Number" name="flightno" value={ flight.flightno} onChange={ _handleChange }/>
            <input type="text" placeholder="Origin" name="origin" value={ flight.origin } onChange={ _handleChange }/>
            <input type="text" placeholder="Destination" name="destination" value={ flight.destination }  onChange={ _handleChange }/>
            <input type="date" placeholder="date" name="date" value={ flight.date } onChange={ _handleChange } /> 
            <input type="text" placeholder="Plane Name" name="name" value={ flight.name } onChange={ _handleChange } />
            <input type="submit" value="Create" />
        </form>
    )
}

const NewFlights = (props) => {
    return (
        <div>
            <h1>All Flights</h1>
            <table style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th style={{padding: "10px"}}>Flight Number</th>
                        <th style={{padding: "10px"}}>Origin</th>
                        <th style={{padding: "10px"}}>Destination</th>
                        <th style={{padding: "10px"}}>Date</th>
                        <th style={{padding: "10px"}}>Plane Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.flights.map((flight, index) => (
                        <tr key={ index }>
                            <td style={{padding: "10px"}}>{ flight.flightno }</td>
                            <td style={{padding: "10px"}}>{ flight.origin }</td>
                            <td style={{padding: "10px"}}>{ flight.destination }</td>
                            <td style={{padding: "10px"}}>{ flight.date }</td>
                            <td style={{padding: "10px"}}>{ flight.name }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}





export default Admin;