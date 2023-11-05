import React from 'react';

const PdfComp = ({ pdfFile }) => {
  return (
    <div className='pdf-container'>
      {pdfFile ? (
        <iframe
          title='PDF Viewer'
          src={pdfFile}
          width='100%'
          height='500px'
        />
      ) : (
        <p>No PDF selected</p>
      )}
    </div>
  );
};

export default PdfComp;
