import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  return (
    <div className='dropdown' onMouseEnter={handleDropdown} onMouseLeave={closeDropdown}>
      <button className='dropbtn'>
        <FontAwesomeIcon icon={faPlusCircle} /> SUPPLIES
      </button>
      {dropdown && (
        <div className='dropdown-content'>
          <Link to='/surgicalsupplies' onClick={closeDropdown}>Surgical Supplies</Link>
          <Link to='/nonsurgicalsupplies' onClick={closeDropdown}>Nonsurgical Supplies</Link>
          <Link to='/pharmaceuticalsupplies' onClick={closeDropdown}>Pharmaceutical Supplies</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
