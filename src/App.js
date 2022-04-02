import React from 'react';
import { useState } from "react"
import ImgGrid from './comps/ImgGrid';
import Model from './comps/Model';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImgGrid setSelectedImg={setSelectedImg}/>
      {
        selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
      }
    </div>
  );
}

export default App;
