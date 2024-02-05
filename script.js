var tasks = [
    {
        'title': 'finish the english course',
        'date': ' 4/5/2021',
        'isdone': true
    },
    {
        'title': 'finish the javascript course',
        'date': '4/5/2021',
        'isdone': false
    },
    {
        'title': 'reading the books',
        'date': '4/5/2021',
        'isdone': true
    }
]
function getTasksFromTheStorage(){
  var retrivedTasks =  JSON.parse(localStorage.getItem('tasks'));

  tasks = retrivedTasks ?? [];
 }

getTasksFromTheStorage();


function FILLTASKSONTHEPAGE(){
    document.getElementById('tasks').innerHTML = '';

    var index = 0;
 for(var task of tasks){
document.getElementById('tasks').innerHTML += `
        <div  class = 'task ${task.isdone ? 'done':''}'>
            <button onclick='deleteTask(${index})' >
              <span class="material-symbols-outlined">
                delete
              </span>
            </button>
            <button onclick='editTaskName(${index})'>
            <span class="material-symbols-outlined">
                edit
              </span>
            </button>
            <button onclick='toogleTaskCompletion(${index})'>
            <span class="material-symbols-outlined">
            ${task.isdone ? 'cancel':'done'}
          </span>
            </button>
            <h2 class='taskname'>${task.title}</h2>
            <span id='date'>${task.date}</span>
         </div>

`
index++;
 } 
}

FILLTASKSONTHEPAGE();

document.getElementById('add_btn').addEventListener('click' , function addtask(){
    var now = new Date();
    var date = now.getDate() + '/' + (now.getMonth() + 1 ) + '/' + now.getFullYear();
    var taskName = prompt('enter the task name');
    var taskobj = {
        'title':taskName,
        'date': date,
        'isDone':false
    }
    tasks.push(taskobj);
    storeTasks();
    FILLTASKSONTHEPAGE();
});

function deleteTask(index){
 tasks.splice(index , 1);
 storeTasks();
 FILLTASKSONTHEPAGE()
}
function clear(){
    tasks = [];
    storeTasks();
    FILLTASKSONTHEPAGE();
}

function toogleTaskCompletion(index){
 var task = tasks[index];

 task.isdone = !task.isdone;
 storeTasks();
 FILLTASKSONTHEPAGE();
}

function editTaskName(index){
    var task = tasks[index];
    var newTaskName = prompt('enter the new task name ' , task.title);
    task.title = newTaskName;
     storeTasks();
    FILLTASKSONTHEPAGE();
}
function storeTasks(){
var tasksString = JSON.stringify(tasks);   
localStorage.setItem('tasks' , tasksString);0
}