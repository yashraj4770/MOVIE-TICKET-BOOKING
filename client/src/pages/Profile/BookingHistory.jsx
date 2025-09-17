import "./Layout.css";
import Booking from "./Booking.json";

function Profile() {
  return (
    <div className="bg">
      <div className="sign-in">
        <div className="sign-in-form">
          <h1>Booking History</h1>
          <table className="booking-table">
            <tr>
              <th>Movie</th>
              <th>Date/Time</th>
                <th>Seats</th>
            </tr>
            {
                Booking.map((item) => (
                    <tr key={item.id}>
                     
                        <td>{item.movie}</td>
                        <td>{item.date}</td>
                
                        <td>{item.seats}</td>
                    </tr>
                ))
            }
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
