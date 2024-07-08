import React from 'react';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero';
import Company from './Components/Companies//Companies'
import Residencies  from './Components/Residencies/Residencies';
import Value  from './Components/Value/Value';
import Contact from './Components/Contact/Contact'
import Getstarted from './Components/GetStarted/Getstarted';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <section className='Apps'>

<Header />
<Hero />
<Company />
<Residencies />
<Value />
<Contact />
<Getstarted />
<Footer /> 
</section>       
);
}

export default App;
