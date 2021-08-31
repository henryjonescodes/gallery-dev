import React, {useState} from 'react'
import ImageGrid from '../components/ImageScroller/ImageGrid/ImageGrid';
import Modal from '../components/ImageScroller/Modal/Modal';
import Title from '../components/Common/Title';
import UploadForm from '../components/ImageScroller/UploadForm/UploadForm';

const Photography = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <>
            <Title/>
            <UploadForm/>
            <ImageGrid setSelectedImg ={setSelectedImg}/>
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg ={setSelectedImg}/>}
        </>
    );
}

export default Photography