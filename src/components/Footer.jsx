import React from 'react';
// import { MDBFooter } from 'mdb-react-ui-kit';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <p>
            Order From Ahmedabad,Bangalore,Chennai,Delhi,Gurgaon,Hyderabad,Kolkata,Mumbai,Pune & more.
          </p>
        </section>

         
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 All  Copyright Reserverd By : 
        <a className='text-white' href='#'>
          Sandeep Gurjar
        </a>
      </div>
    </MDBFooter>
  );
}