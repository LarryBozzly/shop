import './Filter.scss';
import { MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { DropdownProps } from '../../models/index';






const Filter = ({ name, label, value, options, onChange }: DropdownProps) => {
  

  const onDropdownChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <FormControl variant="outlined" sx={{ minWidth: '200px' }}>
      <InputLabel>{label}</InputLabel>
      <Select className="bg-white mb-5"  value={value} onChange={e => onDropdownChange(e)} label={label}>
        {options.map((option) => (
          <MenuItem key={option.option} value={option.value}>
            {option.option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
