const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('get cat');
  res.send('Hello Cat!');
});

router.post('/', (req, res) => {
  console.log('post cat');
  res.send('post cat');
});

router.put('/', (req, res) => {
  console.log('put cat');
  res.send('put cat');
});

router.delete('/', (req, res) => {
  console.log('delete cat');
  res.send('delete cat');
});

module.exports = router;

