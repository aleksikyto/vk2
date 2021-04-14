'use strict';
const sharp = require('sharp');

const makeThumbnail = async (file, thumbnail) =>{
  return await sharp(file).resize(160,160).toFile('thumbnails/' + thumbname);
}