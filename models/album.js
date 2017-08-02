var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Song= require('./song');



var albumSchema = new Schema({
  songs: [Song.schema],
  artistName: String,
  name: String,
  releaseDate: String,
  genres: [String]
});

var Album = mongoose.model('Album',albumSchema);
module.exports=Album;
