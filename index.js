const urlbackend = "http://localhost:3000/posts";

// read operation

fetch (urlbackend)
.then(Response=>Response.json())
.then(posts=> console.log(posts))
.catch(error=> console.error(error));

// create operation

function createData(){
    const newPost = {title: "Post 3", body: "This is post 3" };

fetch(urlbackend, {
    method: "POST",
    headers: {'content-Type' : 'application/json'},
    body: JSON.stringify(newPost)
}).then(Response => Response.json())
    .then(post => console.log(post))
    .catch(error => console.error(error));
}

createData();


// update operation 

function updateData(){
    const updatePost = {title: "Updated post", body: "this the updated post "};

fetch(urlbackend + "/2" , {
    method: 'PUT',
    headers: {'content-Type' : 'application/json'},
    body: JSON.stringify(updatePost)
}).then(Response => Response.json())
    .then(post => console.log(post))
    .catch(error => console.error(error));
}

// updateData();


// Delete operation

function DeleteData(){
    fetch(urlbackend+"/72",{
    method: 'DELETE'
}).then(Response => console.log(Response.status))
    .catch (error => console.error(error));

}

// DeleteData();


