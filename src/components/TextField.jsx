/* eslint-disable react/prop-types */
import {FormControl,FormGroup} from 'react-bootstrap';
const TextField = ({ placeholder, type, onChange,value}) => {
  return (
    <FormGroup>
      <FormControl
        size="lg"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </FormGroup>
  );
};

export default TextField;