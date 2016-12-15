var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/local', ['todos']);


// GET All tasks
router.get('/todos',function(req,res,next){
    db.collection('todos').find(function(error,todos){
        if(error){
            res.send(error);
        }
            res.json(todos);
    });
});

// GET single task
router.get('/todo/id/:id',function(req,res,next){
    db.collection('todos').findOne({ _id : mongojs.ObjectId(req.params.id)},function(error,todos){
        if(error){
            res.send(error);
        }
         res.json(todos);
    })
});

// POST save task
router.post('/todos',function(req,res,next){
    var todo = req.body;
    if(!todo.title){
        res.status(400);
        res.json({
            "errorMessage":"Bad data"
        });
    }else{
        db.collection('todos').save(todo,function(error,todos){
            if(error){
                res.send(error);
            }
            res.json(todos);
        })
    }
});

// DELETE task
router.delete('/todo/id/:id',function(req,res,next){
    db.collection('todos').remove({ _id : mongojs.ObjectId(req.params.id)},function(error,todos){
        if(error){
            res.send(error);
        }
         res.json(todos);
    })
});

// PUT update task
router.put('/todo/id/:id',function(req,res,next){
    var todo = req.body;
    var updTodo = {};

    if(todo){
        updTodo = todo;
    }

    if(!updTodo){
        res.status(400);
        res.json({
            "errorMessage":"Bad data"
        });
    }
    db.collection('todos').update({ _id : mongojs.ObjectId(req.params.id)},updTodo,{},function(error,todos){
        if(error){
            res.send(error);
        }
         res.json(todos);
    })
});

module.exports = router;