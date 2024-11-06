import { useState } from 'react'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: '', email: '', phone: '', dob: ''
  })

  const isValid = ({ email, phone, dob }) => {
    if (!email.includes('@')) {
      alert("Invalid email. Please check your email address.")
      return false;
    }
    if (phone.trim().length != 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.")
      return false;
    }
    if (new Date(dob) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.")
      return false;
    }
    return true;
  }
  const handleChange = (e) => {
    const key = e.target.id;
    const val = e.target.value;
    setUserDetails({ ...userDetails, [key]: val })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValid(userDetails)) {
      setUserDetails({
        username: '', email: '', phone: '', dob: ''
      });
      // setShowModal(false);
    }
  };
  const handleClose = (e) => {
    if (e.target.className === 'modal') setShowModal(false)
  }
  return (
    <main>
      <h1>User Details Modal</h1>
      <button onClick={() => setShowModal(true)}>Open Form</button>
      {showModal &&
        <div className="modal" onClick={handleClose}>
          <div className="modal-content">
            <form onSubmit={handleSubmit} >
              <h2>Fill Details</h2>
              <div className='form-field'>
                <label htmlFor='username'>UserName</label>
                <input type='text' id='username' value={userDetails.username} placeholder='Enter your username' onChange={handleChange} required />
              </div>
              <div className='form-field'>
                <label htmlFor='email'>Email Address</label>
                <input type='email' id='email' value={userDetails.email} placeholder='Enter your email' onChange={handleChange} required />
              </div>
              <div className='form-field'>
                <label htmlFor='phone'>Phone Number</label>
                <input type='number' id='phone' value={userDetails.phone} placeholder='Enter your phone number' onChange={handleChange} required />
              </div>
              <div className='form-field'>
                <label htmlFor='dob'>Date of Birth</label>
                <input type='date' id='dob' value={userDetails.dob} placeholder='dd-mm-yyyy' onChange={handleChange} required />
              </div>
              <button className='submit-button' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      }
    </main>
  )
}

export default App