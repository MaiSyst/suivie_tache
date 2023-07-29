/* eslint-disable react/prop-types */
import {Button} from 'react-bootstrap';
const MaiButton = ({ label, icon, onClick }) => {
  return (
    <Button onClick={onClick}>
      {icon}
      {label}
    </Button>
  );
};

export default MaiButton;