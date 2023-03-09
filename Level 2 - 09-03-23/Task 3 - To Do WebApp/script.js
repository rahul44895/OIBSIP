let form = document.querySelector(".form");
let task_list = document.querySelector(".task-list");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let val = document.querySelector("#input").value;
  if (!val) {
    alert("Please enter a task");
    return;
  }
  let task_container = document.createElement("div");
  task_container.classList.add("task-container");
  let input_value = document.createElement("input");
  input_value.setAttribute("readonly", "");
  input_value.value = val;
  task_container.appendChild(input_value);
  let edit = document.createElement("button");
  edit.innerHTML = "Edit";
  task_container.appendChild(edit);
  
  let delete_btn = document.createElement("button");
  delete_btn.innerHTML = "Delete";
  task_container.appendChild(delete_btn);
  
  let done = document.createElement("button");
  done.innerHTML = "Done";
  task_container.appendChild(done);

  task_list.prepend(task_container);
  console.log("Submitted\t" + val);
  document.querySelector("#input").value = "";
  edit.addEventListener("click", () => {
    if (edit.innerHTML == "Edit") {
      input_value.removeAttribute("readonly");
      edit.innerHTML = "Save";
    } else {
      input_value.setAttribute("readonly", "");
      edit.innerHTML = "Edit";
    }
  });
  delete_btn.addEventListener("click", () => {
    task_list.removeChild(task_container);
  });
  done.addEventListener('click',()=>{
    if(done.innerHTML=='Done'){
      
    task_container.classList.add('striked');
    input_value.value="Completed\t"+input_value.value;
    task_list.appendChild(task_container);
    edit.style.display="none";
    done.innerHTML="Not Done"
    done.style.width="90px"
    }
    else{
      task_container.classList.remove('striked');
      input_value.value=input_value.value.substring(10);
      task_list.prepend(task_container)
      edit.style.display="block";
      done.innerHTML="Done"
      done.style.width=""
    }
  });
});
