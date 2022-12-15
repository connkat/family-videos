import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [year, setYear] = React.useState('');

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1990}>1990</MenuItem>
          <MenuItem value={1991}>1991</MenuItem>
          <MenuItem value={1992}>1992</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
