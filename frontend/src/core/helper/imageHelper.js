import React from 'react';

const ImageHelper = ({ product }) => {
  const imageUrl = product ? product.image : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOllEP5jJmUjVwvXZmI_wTXeelxg_cqlp-IVV8gU5y&s`;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageUrl}
        style={{ maxHeight: '100%', maxWidth: '100%' }}
        className="mb-3 rounded"
        alt=""
      />
    </div>
  );
};

export default ImageHelper;
