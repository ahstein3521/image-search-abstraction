var Search = require('bing.search');
var SearchResults=require('./model')

//require('../secret')

var search = new Search(process.env.BING);

module.exports=function(term,page,callback){
	page=Number(page);
	
	var skip=(page-1)*9;   
    
    var Root="/results?term="+term+"&offset=";
    
    var next=(page!=10)? page+1: 1; 
    var prev=(page!=1)? page-1:10;

    next=Root+next,prev=Root+prev 

    search.images(term,{top:9,skip},function(err, results) {
        if(err){
            return callback(null,err)
        }
        else{
        	var data={results,prev,next}

            return callback(data)
        }
    })
}