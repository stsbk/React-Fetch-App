import React, { useState, useEffect } from 'react';
import PhotoService from '../../Services/PhotoService';
import Photo from '../../Components/Photo';

const Photos = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        PhotoService.getPhotos()
            .then((photos) => {
                setData(photos);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            {data.map((photo) => <Photo title={photo.title} url={photo.url} />)}
        </div>
    );
};

export default Photos;
