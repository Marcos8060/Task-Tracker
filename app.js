// get input fields
const taskInput = document.getElementById('task');
const listgroup = document.querySelector('.list-group');
const randomId = Math.floor(Math.random() * 100);

form.addEventListener('submit',getTask);

function getTask(e){
    e.preventDefault();

    if(taskInput.value){
        listgroup.innerHTML += `
            <div class="list">
                <li class="list-group-item">${taskInput.value}</li>
                <img onclick="removeTask(randomId)" src="https://img.icons8.com/material-rounded/25/fa314a/filled-trash.png"/>
            </div>
        `
    }else{
        clearAlert();
        // create element
        const p = document.createElement('p');
        // add class
        p.className = 'alert alert-danger';
        // text node
        p.appendChild(document.createTextNode('Please include a task!'));
        // get task
        const searchContainer = document.querySelector('.searchContainer');
        // search box
        const search = document.querySelector('.search');
        // insert text
        searchContainer.insertBefore(p,search);
    }
    // clear input after submit
    taskInput.value = '';

    // setTimeout
    setTimeout(()=>{
        clearAlert();
    },2000);
}

// clear alert
function clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
        currentAlert.remove();
    }
}
// removeTask function
function removeTask(id){
    
}

