'use strict';

const express = require('express');
const router = new express.Router();

router.get('/', (req, res, next) => {
  res.json({ 
    type: 'success', 
    data: { 
      title: 'Home Page' 
    } 
  });
});

module.exports = router