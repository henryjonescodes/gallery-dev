import React from 'react'
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
    const { docs } = useFirestore('images');
    console.log("docs",docs);
    return (
        // <div className="img-grid">images</div>
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.downloadURL} alt="uploaded pic"/>
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;
