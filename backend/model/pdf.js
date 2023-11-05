const mongoose=require('mongoose'); 

const PdfSchema= new mongoose.Schema({
    pdf: {
        type:String,
        require:true,
      },    
   
   
});

const Pdf=mongoose.model('pdfUpload',PdfSchema);
module.exports=Pdf;