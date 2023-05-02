import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Grouped() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Выберите регион" />}
    />
  );
}


const top100Films = [
  { title: 'Алтайский край'},
  { title: 'Москва'},
  { title: 'Краснодарский край'},
  { title: 'Симферополь'},
  { title: 'Московская область'},
  { title: 'Республика Алтай'},
  { title: 'Владивосток'},
];