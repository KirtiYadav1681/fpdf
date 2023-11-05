import React,{useState, useEffect} from 'react';
import axios from 'axios';
import PdfComp from './PdfComp';

const ShowPdf = () => {
    const [allImage,setAllImage] = useState(null);
    const [pdfFile,setPdfFile] = useState(null);


    useEffect(() => {
        getPdf();
    },[]);

    const getPdf = async() =>{
        const result = await axios.get("http://localhost:2000/get-files");
        setAllImage(result.data.data);
    }

    const showPdf = (pdf) => {
    setPdfFile(`http://localhost:2000/files/${pdf}`)
      }


  return (
    <div>
        <div className='uploaded'>
        <h5>Uploaded PDFs: </h5>
        <div className='output-div'>
        {allImage?.map((pdf,index) => {
          return (  <div className='inner-div' key={index}>
        <h6>{pdf.title}</h6>
          <button className='btn btn-primary' onClick={() => showPdf(pdf.pdf)}>Show PDF</button>
        </div>)
        })}
        </div>
      </div>

    <div>
          <PdfComp pdfFile={pdfFile} />
    </div>

    </div>
  )
}

export default ShowPdf