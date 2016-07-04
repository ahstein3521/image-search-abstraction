var Bing_Search=require('./search')
var SearchTerms=require('./model');

module.exports=function(app){
  
  app.get('/results',function(req,res){

    var term=req.query.term;
    var page=(req.query.offset)? req.query.offset:1; 
    var format=req.query.format;
    
      SearchTerms.create({term},function(err){
        if(err) throw err;
      })
      
      Bing_Search(term,page,function(d,error){

        if(format=="json"){
          return res.send(d.data)
        }
        res.render('partials/results',{image:d.results,prev:d.prev,next:d.next,page,layout:"layouts/layout"})
    })

  })
  app.get('/recent',function(req,res){
    SearchTerms.find({}).sort({createdAt:-1}).exec(function(err,data){
      

      if(err){ 
        throw err;
      }
      else if(req.query.json){
        return res.send(data)
      }
      else{
        res.render('partials/searchTerms',{terms:data,layout:"layouts/layout"})
      }
    })
  })
}