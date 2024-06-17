import React, { useEffect, useState } from 'react';
import './styles.css';
import { supabase } from '../client';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProcedures, faUserMd, faSignOutAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Patients = ({ token }) => {
  
  let navigate =useNavigate();

  const [fetchError, setFetchError] = useState(null);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const { data, error } = await supabase.from('patient').select();

        if (error) {
          setFetchError('Could not fetch the Patients');
          setPatients([]);
          console.error(error);
        }

        if (data) {
          setPatients(data);
          setFetchError(null);
        }
      } catch (error) {
        console.error('Error fetching patients:', error.message);
        setFetchError('Could not fetch patients.');
        setPatients([]);
      }
    };

    fetchPatients();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        navigate('/addpatients');
    } catch (error) {
        alert(error.message);
    }
}

  return (
    <div className='title'>
      <div className='common-container'>
        <div className='actions' >
          <input className='search' type='search' placeholder='Search' name='search' />
          <button type='Button'onClick={handleSubmit}>Add New Patient</button>
        </div>
        <div className='table-container'>
          <table className='patients-table'>
            <thead>
              <tr>
                <th>Patient Number</th>
                <th>Telephone Number</th>
                <th>Fullname</th>
                <th>Date of Birth</th>
                <th>Sex</th>
                <th>Marital Status</th>
                <th>Date Registered</th>
                <th>Details of Next of Kin</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.patientnumber}>
                  <td>{patient.patientnumber}</td>
                  <td>{patient.telephonenumber}</td>
                  <td>{patient.fullname}</td>
                  <td>{patient.dateofbirth}</td>
                  <td>{patient.sex}</td>
                  <td>{patient.maritalstatus}</td>
                  <td>{patient.dateregistered}</td>
                  <td>{patient.detailsofnextofkin}</td>
                  <td>{patient.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;
