const express = require('express');
const router=express.Router();

const upload = require('../config/multer');


const UploadController=require('../controller/Upload_controller');
const UserController= require('../controller/user_controller');

// Home
router.get('/',UploadController.Home);

// Pdf Management
router.post("/uploadPdf",upload.single('file'),UploadController.uploadPdf);
router.get('/get-files',UploadController.getFiles);


// User-Authentication
router.post("/register",UserController.register);
router.post("/login",UserController.login);



module.exports=router;