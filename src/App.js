import React from 'react';
// import ImageGrid from './components/ImageGrid/Image';
// import Modal from './components/Modal';
// import Title from './components/Title';
// import UploadForm from './components/UploadForm';
import Photography from './pages/photography';

function App() {
  // const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Photography/>
    </>
    // <div className="App">
    //   <Title/>
    //   <UploadForm/>
    //   <ImageGrid setSelectedImg ={setSelectedImg}/>
    //   {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg ={setSelectedImg}/>}
    // </div>
  );
}

export default App;
