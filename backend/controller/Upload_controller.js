const Pdf = require("../model/pdf");
// const pdfParse = require('pdf-parse');
const fs = require('fs');


module.exports.Home = function (req, res) {
  res.send("hello");
};

// Creating a PDF in the database
module.exports.uploadPdf = async (req, res) => {
  const fileName = req.file.filename;
  try {
    await Pdf.create({ pdf: fileName });
    res.header("Content-Type", "application/pdf"); // Set Content-Type header
    res.sendFile(path.join(__dirname, `../files/${fileName}`)); // Send the file in the response
  } catch (err) {
    res.json({ status: err });
  }
};


module.exports.getFiles = async (req, res) => {
  try {
    Pdf.find({}).then((data) =>{
      res.send({status:"OK", data:data})
    })
  } catch (error) {
    res.send({status:"ERROR", error})
  }
}