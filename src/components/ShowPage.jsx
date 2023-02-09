import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowPage = ({ match }) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [bookedSeats, setBookedSeats] = useState([]);

  let { flightId } = useParams();
  useEffect(() => {
    const cols = "ABCDEFGHI";
    const numRows = 10;
    let newSeats = [];
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      let row = [];
      for (let seatIndex = 0; seatIndex < cols.length; seatIndex++) {
        const seat = cols[seatIndex] + (rowIndex + 1);
        row = [...row, seat];
      }
      newSeats = [...newSeats, row]
    }
    setSeats(newSeats)
  }, [flightId]);

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
  };


  const handleBookingConfirmation = () => {
    alert("Booking Confirmed!");
    setTimeout(() => {
      window.location.assign("http://localhost:3001");
    }, 1);
  };
  
  
  // const handleBookingConfirmation = async () => {
  //   try {
  //     const response = await axios.post(`/flights/${match.params.flightId}/book_seat`, {
  //       seat: selectedSeat
  //     });
  //     const updatedBookedSeats = [...bookedSeats, selectedSeat];
  //     setBookedSeats(updatedBookedSeats);
  //     alert("Booking Confirmed!");
  //     window.location.assign("http://localhost:3001");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  

  
  return (
  <div className="container text-center">
  <div className="row align-items-center">
  <h1>Available Seats</h1>
    <div className="col-md-3">
    </div>
    <div className="col-md-6">
    <div class="row justify-content-evenly">
      <table style={{ height: "300px", overflow: "auto" }}>
        <tbody>
          {seats.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((seat, seatIndex) => (
                <td key={seatIndex} >
                  {bookedSeats.includes(seat) ? (
                    <span>Booked</span>
                  ) : (
                    <button onClick={() => handleSeatClick(seat)}>
                      {seat}
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    {selectedSeat && (
  <div>
    <h2>Selected Seat: {selectedSeat}</h2>
    <form>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="input-field form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="input-field form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="credit-card">Credit Card:</label>
        <input type="text" id="credit-card" className="input-field form-control" />
      </div>
      <button onClick={handleBookingConfirmation}>Confirm Booking</button>
    </form>
  </div>
)}
    <div className="col-md">
    </div>
  </div>
</div>
  );
};

export default ShowPage;