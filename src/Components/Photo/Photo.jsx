import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ title, url }) => (
    <div>
        <img src={url} alt="thumbnail" />
        <span>{title}</span>
    </div>
);

Photo.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
};

Photo.defaultProps = {
    url: '',
};

export default Photo;
