import React, { useState } from 'react';
import { supabase } from '../client';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const AddPatient = () => {
  const navigate = useNavigate();

  const [patientData, setPatientData] = useState({
    telephoneNumber: '',
    fullName: '',
    dateOfBirth: '',
    sex: '',
    maritalStatus: '',
    dateRegistered: '',
    detailsOfNextOfKin: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Auto-generate patient number
      const patientNumber = `Patient_${Date.now()}`;

      const { data, error } = await supabase
        .from('patient')
        .insert([
          {
            patientnumber: patientNumber,
            telephonenumber: patientData.telephoneNumber,
            fullname: patientData.fullName,
            dateofbirth: patientData.dateOfBirth,
            sex: patientData.sex,
            maritalstatus: patientData.maritalStatus,
            dateregistered: patientData.dateRegistered,
            detailsofnextofkin: patientData.detailsOfNextOfKin,
            address: patientData.address,
          },
        ]);

      if (error) {
        throw error;
      }

      console.log('Patient data inserted successfully:', data);
      navigate('/addnextofkin', { state: { patientNumber } });
    } catch (error) {
      console.error('Error inserting patient data:', error);
    }
  };

  return (
    <div className='title'>
      <div className='common-container2'>
        <div>
        <h2>Patient</h2>
          <div className='inputs'>
            <p className='input-text'>Telephone Number:</p>
            <input
              className='telephoneNumber'
              type='tel'
              placeholder='Telephone Number'
              name='telephoneNumber'
              value={patientData.telephoneNumber}
              onChange={handleChange}
            />
            <p className='input-text'>Full Name:</p>
            <input
              className='fullName'
              type='text'
              placeholder='Full Name'
              name='fullName'
              value={patientData.fullName}
              onChange={handleChange}
            />
            <p className='input-text'>Date of Birth:</p>
            <input
              className='dateOfBirth'
              type='text'
              placeholder='YYYY-MM-DD'
              name='dateOfBirth'
              value={patientData.dateOfBirth}
              onChange={handleChange}
            />
            <p className='input-text'>Sex:</p>
            <input
              className='sex'
              type='text'
              placeholder='Sex'
              name='sex'
              value={patientData.sex}
              onChange={handleChange}
            />
          </div>
          <div className='inputs'>
            <p className='input-text'>Marital Status:</p>
            <input
              className='maritalStatus'
              type='text'
              placeholder='Marital Status'
              name='maritalStatus'
              value={patientData.maritalStatus}
              onChange={handleChange}
            />
            <p className='input-text'>Date Registered:</p>
            <input
              className='dateRegistered'
              type='text'
              placeholder='YYYY-MM-DD'
              name='dateRegistered'
              value={patientData.dateRegistered}
              onChange={handleChange}
            />
            <p className='input-text'>Details of Next of Kin:</p>
            <input
              className='detailsOfNextOfKin'
              type='text'
              placeholder='Details of Next of Kin'
              name='detailsOfNextOfKin'
              value={patientData.detailsOfNextOfKin}
              onChange={handleChange}
            />
            <p className='input-text'>Address:</p>
            <input
              className='address'
              type='text'
              placeholder='Address'
              name='address'
              value={patientData.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='actions'>
          <button className='cancel' type='button' onClick={() => navigate('/patients')}>
            Cancel
          </button>
          <button className='submit' type='button' onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
