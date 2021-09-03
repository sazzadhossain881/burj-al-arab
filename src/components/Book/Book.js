import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

const Book = () => {
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate };
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };

    const handleCheckOutDate = (date) => {
        const newDates = { ...selectedDate };
        newDates.checkOut = date;
        setSelectedDate(newDates);
    };

    const handleBooking = () => {

    }

    const { bedType } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Hello,{loggedInUser.name}!Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>

            <div style={{ marginLeft: "390px" }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Check In Date"
                            value={selectedDate.checkIn}
                            onChange={handleCheckInDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Check Out Date"
                            format="MM/dd/yyyy"
                            value={selectedDate.checkOut}
                            onChange={handleCheckOutDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                    <Button onClick={handleBooking} variant="contained" color="primary" style={{ marginRight: "500px" }}>Book Now</Button>
                </MuiPickersUtilsProvider>
            </div>
        </div>
    );
};

export default Book;