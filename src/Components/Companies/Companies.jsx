import React from 'react';
import './Companies.css'
import C1 from './assets/equinix.png'
import C2 from './assets/prologis.png'
import C3 from './assets/realty.png'
import C4 from './assets/tower.png'
import C5 from './assets/value.png'

function Companies() {
  return (
        <section className='Companie'>
            <div className='companies paddings innerWidth flexCenter'>
                <img src={C1} alt='company name'/>
                <img src={C2} alt='company name' />
                <img src={C3} alt='company name'/>
                <img src={C4} alt='company name'/>
                
            </div>
        </section>
  );
}

export default Companies;
