import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowPage = ({ match }) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [bookedSeats, setBookedSeats] = useState([]);

  let { flightId } = useParams();
  useEffect(() => {
    const cols = "ABCD";
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

  const handleBookingConfirmation = async () => {
    try {
      const response = await axios.post(`/flights/${match.params.flightId}/book_seat`, {
        seat: selectedSeat
      });
      const updatedBookedSeats = [...bookedSeats, selectedSeat];
      setBookedSeats(updatedBookedSeats);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <div>
      <h1>Available Seats</h1>
      <table style={{ height: "300px", overflow: "auto" }}>
        <tbody>
          {seats.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((seat, seatIndex) => (
                <td key={seatIndex}>
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
      {selectedSeat && (
        <div>
          <h2>Selected Seat: {selectedSeat}</h2>
          <button onClick={handleBookingConfirmation}>Confirm Booking</button>
        </div>
      )}
    </div>
  );
};

export default ShowPage;