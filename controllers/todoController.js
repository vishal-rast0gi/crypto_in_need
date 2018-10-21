var data = [{item:'abcd'},{item:'cvbh'}];
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});


// for database

var mongoose =  require('mongoose');

//for database conection
mongoose.connect('mongodb://test:test@ds235840.mlab.com:35840/first-todo',{useNewUrlParser:true});

// create a schema
var todoSchema = new mongoose.Schema(
    {  name : String,
        payment : String,
        price : String,
        range : String}
);

//creating model
var Todo = mongoose.model('Todo',todoSchema);

/*
var itemOne = Todo({item: 'Go Gym'}).save(function(err){
    if(err) throw err;
    console.log('Saved');
});
*/

module.exports = function(app){

    app.get('/Dashboard',function (req,res) {
        Todo.find({},function (err,data) {
           if(err) throw err;
           //console.log(data);
           res.render('todo',{todos:data});

        });
       //res.render('todo',{todos:data});
    });
    app.get('/Dashboard/createAdv',function (req,res){
        res.sendFile('D:\\Projects\\todo\\public\\assets\\createAdv.html');
    });
    app.post('/Dashboard/Buy',function (req, res) {
        console.log('AA GAI');
        //console.log(req.body);
        var data = req.body;
        console.log(data.id);
       // res.sendFile('D:\\Projects\\todo\\public\\assets\\createAdv.html');
       //  Todo.findOne({_id:data.id}).then(function (err,doc) {
       //      //console.log(122);
       //      if(err)
       //       throw err;
       //   console.log(doc);
       //  // console.log(123);
       //   //res.render('Buy',{doc:doc});
       // });
        Todo.findById(data.id, function(err, data){
            if(err) throw err;
            else {
                // console.log(data);
                // console.log('asdlkfjhgadsf');
                // res.render('Buy',{doc:data});
                // tadka.json(data);
                console.log(data);
                res.send(data);

            }
                // res.redirect({doc: data},'/Dashboargitd/Buy');
            });
        });

       // res.send("123");

    app.get('/Dashboard/Buy', function(req, res){
        // console.log(res);
        console.log(req.query['id']);
        res.render('Buy', {
            doc: req.query['id']
        });
    });
    app.post('/Dashboard/createAdv',urlencodedParser,function (req,res) {
        var newTodo = new Todo(req.body).save(function (err,data) {
            if(err) throw err;
            res.json(data);
        });

       // data.push(req.body);
        //res.json(data);
    });
    app.delete('/todo/:item',function (req, res) {
        //data = data.filter(function (todo) {
          // return todo.item.replace(/ /g,'-')!==req.params.item;
        //});
        Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function (err,data) {
            if(err) throw err;
            res.json(data);
        });
        //res.json(data);
    });

};