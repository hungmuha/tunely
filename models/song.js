var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var songSchema = new Schema({
	trackNumer: Number,
	name:String
});

var Song = mongoose.model('Song',songSchema);
module.exports=Song;