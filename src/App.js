import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import BioGenomics from './component/BioGenomics';
import Mview from './component/Mview';
import News from './component/News';
  


function App() {

  return (
    <Router>
        <Mview />
        <BioGenomics />
        <News />
    </Router>
  );
}

export default App;
