import React, { useState } from 'react';

const Image = (props) => {
  const [src, setSrc] = useState(props.src)
  const [error, setError] = useState(false);
  
  const onError = () => {
    if (!error) {
      setSrc(props.fallbackSrc)
      setError(true)
    }
  }
  
  return (
    <img
      src={src}
      onError={onError}
      alt={props.alt}
    />
  );
}

export default Image;