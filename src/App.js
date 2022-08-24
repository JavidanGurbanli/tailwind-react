import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Manage from './components/Manage';
import Notify from './components/Notify';
import User from './components/User';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Main/>
      <Manage/>
      <Notify/>
      <User/>
      <Footer/>
    </div>
  );
}

export default App;
