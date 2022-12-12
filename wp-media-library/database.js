var db = new PouchDB('todos');
var remoteCouch = false;

function addTodo(text) {
    var todo = {
        _id: new Date().toISOString(),
        title: text,
        completed: false
    };
    db.put(todo, function callback(err, result) {
        if (!err) {
            console.log('Successfully posted a todo!');
        }
    });
}

addTodo("test");

function showTodos() {
    db.allDocs({ include_docs: true, descending: true }, function (err, doc) {
        console.log(doc.rows);
    });
}

showTodos();

