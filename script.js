this.students = [];
this.completedTasks = [];
this.ele = document.getElementById('todo-list');

function fetchData() {
     
    var data = "";
    if (this.students.length > 0) {
        for (i = 0; i < this.tasks.length; i++) {
        data += `<tr>
                 <td>${i+1} .</td>
                 <td>${this.tasks[i]}</td>
                 <td><button onclick="editTask(${i})" class="edit-task">Edit</td>
                 <td><button onclick="completeTask(${i})" class="complete-task">Complete</td>
                 <td><button onclick="deleteTask(${i})" class="delete-task">Delete</td>
                 </tr> `
        } 
        document.getElementById('todo-list1').innerHTML = data;
    }

    var data2 = "";
    // if (this.completedTasks.length > 0){
    //     for (j = 0; j < this.completedTasks.length; j++) {
    //         data2 += `<tr>
    //                     <td>${j+1}</td>
    //                     <td>${this.completedTasks[j]}</td>
    //                     <td><button onclick="deleteCompletedTask(${j})" class="delete-task">Delete</td>
    //                 </tr>`
    //     }
    //     document.getElementById('todo-list2').innerHTML = data2;
    // }
}

function addTask() {
    ele = document.getElementById('add-name');
    var name = ele.value;
    ele = document.getElementById('add-loc');
    var loc = ele.value;
    ele = document.getElementById('add-cgpa');
    var cgpa = ele.value;

    if (name && loc && cgpa)  {
      students.push(name, loc, cgpa);
      ele.value = '';
      this.fetchData();
    }
}

function deleteTask(item) {
    this.tasks.splice(item, 1);
    this.fetchData();
}

function deleteCompletedTask(item) {
    this.completedTasks.splice(item, 1);
    this.fetchData();
}

function completeTask(item) {
    completedTasks.push(tasks[item]);
    this.tasks.splice(item, 1);
    this.fetchData();
}

function editTask(item) {
    var el = document.getElementById('edit-1');
    el.value = this.tasks[item];
    document.getElementById('edit-box').style.display = 'table-row';
    self = this;

    var el = document.getElementById('edit-2');
    el.value = this.tasks[item];
    document.getElementById('edit-box').style.display = 'table-row';
    self = this;

    var el = document.getElementById('edit-3');
    el.value = this.tasks[item];
    document.getElementById('edit-box').style.display = 'table-row';
    self = this;

    var el = document.getElementById('edit-4');
    el.value = this.tasks[item];
    document.getElementById('edit-box').style.display = 'table-row';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      var task = el.value;
      if (task) {
        self.tasks.splice(item, 1, task.trim());
        self.fetchData();
        CloseInput();
      }
    }
}

function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  }