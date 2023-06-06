import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShowContext } from '../context/ShowContext';

const BookingForm = () => {
  const removeHTMLTags = (text) => {
    const regex = /<[^>]+>/g;
    return text.replace(regex, '');
  };

  const { id } = useParams();
  const { getShowById, selectedShow } = useContext(ShowContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ticketCount, setTicketCount] = useState(1);
  const[isBookingSuccess,setIsBookingSuccess]=useState(false);
  const storedBookingDetails = localStorage.getItem('bookingDetails');
const initialBookingDetails = storedBookingDetails ? JSON.parse(storedBookingDetails) : {};


const [bookingDetails, setBookingDetails] = useState(initialBookingDetails);
const [name, setName] = useState(bookingDetails.name || '');
const [email, setEmail] = useState(bookingDetails.email || '');

  useEffect(() => {
    // Retrieve the booking details from localStorage
    const storedBookingDetails = localStorage.getItem('bookingDetails');

    if (storedBookingDetails) {
      // Parse the JSON string back to an object
      const parsedBookingDetails = JSON.parse(storedBookingDetails);

      // Set the form fields with the stored values
      
      setBookingDetails(parsedBookingDetails);
      setName(parsedBookingDetails.name || '');
      setEmail(parsedBookingDetails.email || '');
      setPhoneNumber(parsedBookingDetails.phoneNumber);
      setTicketCount(parsedBookingDetails.ticketCount);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleChangeTicketCount = (e) => {
    setTicketCount(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking logic here
    // Save name, email, phoneNumber, ticket count, and other relevant details to localStorage
    const bookingDetails = {
      showId: selectedShow.id,
      showName: selectedShow.name,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      ticketCount: ticketCount,
    };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    setIsBookingSuccess(true);
    console.log('Booking details:', bookingDetails);
   
  };

  if (!selectedShow) {
    return <p>Loading booking form...</p>;
  }

  return (
    <div style={{ color: 'white' }} className='p-4'>
      <h1>Booking Form</h1>
      <h2>{selectedShow.name}</h2>
      <p>{removeHTMLTags(selectedShow.summary)}</p>
      <form onSubmit={handleSubmit} style={{width:"80vw",margin:"0 auto"}}>
        <div>
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
          <input type="tel" className="form-control" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
       
<div>
  <label htmlFor="ticketCount" className="form-label">Ticket Count:</label>
  <input
    type="number"
    id="ticketCount"
    min="1"
    value={ticketCount}
    className="form-control"
    onChange={handleChangeTicketCount}
  />
</div>
        <button type="submit" className="btn btn-primary mt-2 mb-2">Book Ticket</button>
      </form>
      <Link to={`/shows/${selectedShow.id}`} className="btn btn-secondary m-5">Back to Show Details</Link>
    </div>
  );
};

export default BookingForm;
