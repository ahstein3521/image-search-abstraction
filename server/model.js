var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var schema=new Schema({
	term:String,
	// results:Array
},{
	timestamps:true
});



module.exports= mongoose.model('Searches',schema)




