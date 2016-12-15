var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/local', ['todos']);


// GET All tasks
router.get('/tasks',function(req,res,next){
    db.collection('todos').find(function(error,todos){
        if(error){
            res.send(error);
        }
            res.json(todos);
    });
});

// GET single task
router.get('/task/id/:id',function(req,res,next){
    db.collection('todos').findOne({ _id : mongojs.ObjectId(req.params.id)},function(error,todos){
        if(error){
            res.send(error);
        }
         res.json(todos);
    })
});

// POST save task
router.post('/task',function(req,res,next){
    var todo = req.body;
    if(!todo.title){
        res.status(400);
        res.json({
            "errorMessage":"Bad data"
        });
    }else{
        db.collection('todos').save(task,function(error,todos){
            if(error){
                res.send(error);
            }
            res.json(todos);
        })
    }
});

// DELETE task
router.delete('/task/id/:id',function(req,res,next){
    db.collection('todos').remove({ _id : mongojs.ObjectId(req.params.id)},function(error,todos){
        if(error){
            res.send(error);
        }
         res.json(todos);
    })
});

// PUT update task
router.put('/task/id/:id',function(req,res,next){
    var todo = req.body;
    var updTask = {};

    if(todo){
        updTask = todo;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "errorMessage":"Bad data"
        });
    }
    db.collection('todos').update({ _id : mongojs.ObjectId(req.params.id)},updTask,{},function(error,todos){
        if(error){
            res.send(error);
        }
         res.json(todos);
    })
});

module.exports = router;