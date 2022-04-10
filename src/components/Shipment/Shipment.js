import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Shipment = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handelNameBlur = event => {
        setName(event.target.value)
    }

    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handelAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handelphoneNumberBlur = event => {
        setPhone(event.target.value);
    }

    const handelCreateUser = event => {
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handelCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Your Name</label>
                        <input onBlur={handelNameBlur} type="text" name="Your Name" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Your Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handelAddressBlur} type="text" name="password" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handelphoneNumberBlur} type="text" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;