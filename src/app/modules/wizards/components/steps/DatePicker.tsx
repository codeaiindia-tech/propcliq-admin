import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
const DatePickerInput = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [open, setOpen] = useState(false);
    const anchorRef = React.useRef(null);

    const handleDateChange = (date:any) => {
        setSelectedDate(date);
        setOpen(false);
    };

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <TextField
                ref={anchorRef}
                label="Select Date"
                value={selectedDate ? new Date(selectedDate).toLocaleDateString() : ''}
                onFocus={handleClick}
                InputProps={{
                    endAdornment: (
                        <IconButton onClick={handleClick} aria-label="calendar" edge="end">
                            <CalendarTodayIcon />
                        </IconButton>
                    ),
                }}
                fullWidth
            />
            {open && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker />
                    </DemoContainer>
                </LocalizationProvider>
            )}
        </div>
    );
};

export default DatePickerInput;
