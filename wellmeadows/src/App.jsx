import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProcedures, faUserMd, faSignOutAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { SignUp, Login, Homepage, Patients, Wards, Staffs, AddPatients, Supplies, SurgicalSupplies, NonsurgicalSupplies, PharmaceuticalSupplies, AddNextOfKin, AddStaff } from './pages';
import Dropdown from './pages/Dropdown.jsx';
import './pages/styles.css';

const App = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const savedToken = sessionStorage.getItem('token');
    if (savedToken) {
      setToken(JSON.parse(savedToken));
    }
  }, []);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);

  return (
    <div>
      <div className='content' style={{ marginTop: token ? '80px' : '0px' }}>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<Login setToken={setToken} />} />
          {token && (
            <>
              <Route path='/homepage' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>Welcome! {token.user.user_metadata.full_name}</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'><FontAwesomeIcon icon={faHome} /> HOME</a></li>
                      <li><a href='/patients' className='patients'><FontAwesomeIcon icon={faUser} /> PATIENT</a></li>
                      <li><a href='/wards' className='wards'><FontAwesomeIcon icon={faProcedures} /> WARD</a></li>
                      <li><a href='/staffs' className='staffs'><FontAwesomeIcon icon={faUserMd} /> STAFF </a></li>
                      <li><Dropdown /></li>
                      <div className='separator'></div>
                      <li><a href='/' className='signout'><FontAwesomeIcon icon={faSignOutAlt} /> SIGN OUT </a></li>
                    </ul>
                  </nav>
                  <Homepage token={token} />
                </>
              } />
              <Route path='/patients' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>WELLMEADOWS</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'><FontAwesomeIcon icon={faHome} /> HOME</a></li>
                      <li><a href='/patients' className='patients'><FontAwesomeIcon icon={faUser} /> PATIENT</a></li>
                      <li><a href='/wards' className='wards'><FontAwesomeIcon icon={faProcedures} /> WARD</a></li>
                      <li><a href='/staffs' className='staffs'><FontAwesomeIcon icon={faUserMd} /> STAFF </a></li>
                      <li><Dropdown /></li>
                      <div className='separator'></div>
                      <li><a href='/' className='signout'><FontAwesomeIcon icon={faSignOutAlt} /> SIGN OUT</a></li>
                    </ul>
                  </nav>
                  <Patients />
                </>
              } />
              <Route path='/wards' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>WELLMEADOWS</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'><FontAwesomeIcon icon={faHome} /> HOME</a></li>
                      <li><a href='/patients' className='patients'><FontAwesomeIcon icon={faUser} /> PATIENT</a></li>
                      <li><a href='/wards' className='wards'><FontAwesomeIcon icon={faProcedures} /> WARD</a></li>
                      <li><a href='/staffs' className='staffs'><FontAwesomeIcon icon={faUserMd} /> STAFF </a></li>
                      <li><Dropdown /></li>
                      <div className='separator'></div>
                      <li><a href='/' className='signout'><FontAwesomeIcon icon={faSignOutAlt} />  SIGN OUT </a></li>
                    </ul>
                  </nav>
                  <Wards />
                </>
              } />
              <Route path='/staffs' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>WELLMEADOWS</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'><FontAwesomeIcon icon={faHome} /> HOME</a></li>
                      <li><a href='/patients' className='patients'><FontAwesomeIcon icon={faUser} /> PATIENT</a></li>
                      <li><a href='/wards' className='wards'><FontAwesomeIcon icon={faProcedures} /> WARD</a></li>
                      <li><a href='/staffs' className='staffs'><FontAwesomeIcon icon={faUserMd} /> STAFF </a></li>
                      <li><Dropdown /></li>
                      <div className='separator'></div>
                      <li><a href='/' className='signout'><FontAwesomeIcon icon={faSignOutAlt} /> SIGN OUT </a></li>
                    </ul>
                  </nav>
                  <Staffs />
                </>
              } />
              <Route path='/addpatients' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>WELLMEADOWS</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'><FontAwesomeIcon icon={faHome} /> HOME</a></li>
                      <li><a href='/patients' className='patients'><FontAwesomeIcon icon={faUser} /> PATIENT</a></li>
                      <li><a href='/wards' className='wards'><FontAwesomeIcon icon={faProcedures} /> WARD</a></li>
                      <li><a href='/staffs' className='staffs'><FontAwesomeIcon icon={faUserMd} /> STAFF </a></li>
                      <li><Dropdown /> </li>
                      <div className='separator'></div>
                      <li><a href='/' className='signout'><FontAwesomeIcon icon={faSignOutAlt} />  SIGN OUT </a></li>
                    </ul>
                  </nav>
                  <AddPatients />
                </>
              } />
              <Route path='/surgicalsupplies' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>WELLMEADOWS</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'><FontAwesomeIcon icon={faHome} /> HOME</a></li>
                      <li><a href='/patients' className='patients'><FontAwesomeIcon icon={faUser} /> PATIENT</a></li>
                      <li><a href='/wards' className='wards'><FontAwesomeIcon icon={faProcedures} /> WARD</a></li>
                      <li><a href='/staffs' className='staffs'><FontAwesomeIcon icon={faUserMd} /> STAFF</a></li>
                      <li><Dropdown /></li>
                      <div className='separator'></div>
                      <li><a href='/' className='signout'><FontAwesomeIcon icon={faSignOutAlt} /> SIGN OUT </a></li>
                    </ul>
                  </nav>
                  <SurgicalSupplies />
                </>
              } />
              <Route path='/nonsurgicalsupplies' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>WELLMEADOWS</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'><FontAwesomeIcon icon={faHome} /> HOME</a></li>
                      <li><a href='/patients' className='patients'><FontAwesomeIcon icon={faUser} /> PATIENT</a></li>
                      <li><a href='/wards' className='wards'><FontAwesomeIcon icon={faProcedures} /> WARD</a></li>
                      <li><a href='/staffs' className='staffs'><FontAwesomeIcon icon={faUserMd} /> STAFF</a></li>
                      <li><Dropdown /></li>
                      <div className='separator'></div>
                      <li><a href='/' className='signout'><FontAwesomeIcon icon={faSignOutAlt} /> SIGN OUT </a></li>
                    </ul>
                  </nav>
                  <NonsurgicalSupplies />
                </>
              } />
              <Route path='/pharmaceuticalsupplies' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>WELLMEADOWS</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'><FontAwesomeIcon icon={faHome} /> HOME</a></li>
                      <li><a href='/patients' className='patients'><FontAwesomeIcon icon={faUser} /> PATIENT</a></li>
                      <li><a href='/wards' className='wards'><FontAwesomeIcon icon={faProcedures} /> WARD</a></li>
                      <li><a href='/staffs' className='staffs'><FontAwesomeIcon icon={faUserMd} /> STAFF</a></li>
                      <li><Dropdown /></li>
                      <div className='separator'></div>
                      <li><a href='/' className='signout'><FontAwesomeIcon icon={faSignOutAlt} />  SIGN OUT </a></li>
                    </ul>
                  </nav>
                  <PharmaceuticalSupplies />
                </>
              } />
              <Route path='/addnextofkin' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>WELLMEADOWS</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'><FontAwesomeIcon icon={faHome} /> HOME</a></li>
                      <li><a href='/patients' className='patients'><FontAwesomeIcon icon={faUser} /> PATIENT</a></li>
                      <li><a href='/wards' className='wards'><FontAwesomeIcon icon={faProcedures} /> WARD</a></li>
                      <li><a href='/staffs' className='staffs'><FontAwesomeIcon icon={faUserMd} /> STAFF</a></li>
                      <li><Dropdown /></li>
                      <div className='separator'></div>
                      <li><a href='/' className='signout'><FontAwesomeIcon icon={faSignOutAlt} />  SIGN OUT </a></li>
                    </ul>
                  </nav>
                  <AddNextOfKin />
                </>
              } />
              <Route path='/addstaff' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>WELLMEADOWS</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'><FontAwesomeIcon icon={faHome} /> HOME</a></li>
                      <li><a href='/patients' className='patients'><FontAwesomeIcon icon={faUser} /> PATIENT</a></li>
                      <li><a href='/wards' className='wards'><FontAwesomeIcon icon={faProcedures} /> WARD</a></li>
                      <li><a href='/staffs' className='staffs'><FontAwesomeIcon icon={faUserMd} /> STAFF</a></li>
                      <li><Dropdown /></li>
                      <div className='separator'></div>
                      <li><a href='/' className='signout'><FontAwesomeIcon icon={faSignOutAlt} />  SIGN OUT </a></li>
                    </ul>
                  </nav>
                  <AddStaff />
                </>
              } />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
