const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const router = express.Router();
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');

// Set Imgur client ID
const IMGUR_CLIENT_ID = '2d74f1cca3ad0ba'; // Replace with your Imgur client ID

// Use fileUpload middleware
router.use(fileUpload());

// Handle file upload
router.post('/upload', async (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  let sampleFile = req.files.file;
  let uploadPath = path.resolve(__dirname, '../tmp_image', sampleFile.name);

  // Move the file to the desired location
  sampleFile.mv(uploadPath, async (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    try {
      // Create a FormData instance
      const formData = new FormData();
      formData.append('image', fs.createReadStream(uploadPath)); // Read the file as a stream

      // Upload the file to Imgur
      const response = await axios.post('https://api.imgur.com/3/image', formData, {
        headers: {
          'Authorization': `Client-ID ${IMGUR_CLIENT_ID}`,
          ...formData.getHeaders() // Include FormData headers
        }
      });

      // Respond with the image link
      res.json({ url: response.data.data.link });

      // Delete the file after upload
      fs.unlink(uploadPath, (err) => {
        if (err) {
          console.error('Error deleting the file:', err);
        }
      });
    } catch (error) {
      console.error('Error uploading to Imgur:', error);
      res.status(500).json({ msg: 'Error uploading file to Imgur' });

      // Delete the file if there was an error
      fs.unlink(uploadPath, (err) => {
        if (err) {
          console.error('Error deleting the file after upload failure:', err);
        }
      });
    }
  });
});

module.exports = router;
