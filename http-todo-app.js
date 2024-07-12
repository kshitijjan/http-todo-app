const express = require("express");
const app = express();

const todo = []

const generateID = () => {
    const id = "id" + Math.random().toString(16).slice(2)
    return id;
}
app.disable('etag'); 

app.get('/todos', (req, res) => {
    
    const lengthOfTasks = todo.length;

    if(lengthOfTasks>0){
        res.status(200).json(todo)
    }
    else{
        res.status(404).json({msg: "No tasks"})
    }
    
})

app.get('/todos/:id', (req, res) => {

    let getStatus = false;
    for(let i = 0; i<todo.length; i++){
        if(todo[i].id == req.params.id){
            res.status(200).send(todo[i]);
            getStatus = true;
        }
    }
    if(!getStatus){
        res.status(404).json({msg: "Item not found"});
    }
})

app.use(express.json());

app.post('/todos', (req, res) => {
    const itemTitle = req.body.title;
    const itemCompleted = req.body.completed;
    const itemDescription = req.body.description;
    const id = generateID();
    const item = {
        id: id,
        title : itemTitle,
        completed: itemCompleted,
        description: itemDescription
    }

    todo.push(item);
    res.status(201).json({
        status: "Task created",
        id: id
    })
})


app.put('/todos/:id', (req, res) => {
    const itemID = req.params.id;
    let updateTitle = req.body.title;
    let updateCompleted = req.body.completed;
    let updateDescription = req.body.description;
    let updateStatus = false;
    
    for(let i = 0; i<todo.length; i++){
        if(todo[i].id == itemID){
            if(updateTitle){
                todo[i].title = updateTitle;
            }
            if(updateCompleted == true || updateCompleted == false){
                todo[i].completed = updateCompleted;
            }
            if(updateDescription){
                todo[i].description = updateDescription;
            }
            updateStatus = true;
            
        }
    }
    if(updateStatus){
        res.status(200).json({msg: "Update Completed"})
    }
    else{
        res.status(404).json({msg: "Item not found"})
    }
})

app.delete('/todos/:id', (req, res) => {
    const deleteID = req.params.id;
    let deleteStatus = false;
    let indexOfID = -1;

    for(let i = 0; i<todo.length; i++){
        indexOfID++;
        if(todo[i].id == deleteID){
            todo.splice(indexOfID, 1);
            deleteStatus = true;
        }
    }
    if(deleteStatus){
        res.status(200).json({msg: "Item Deleted"})
    }
    else{
        res.status(404).json({msg: "Item not found"})
    }
})

app.listen(3000)