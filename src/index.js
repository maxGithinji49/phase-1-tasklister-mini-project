document.addEventListener("DOMContentLoaded", () => {
  let form= document.querySelector ('form');
  form.addEventListener ('submit',
 (e)=> {
    e.preventDefault ();
    let mySubmit = document.getElementById ('new-task-description');
    newSubmit (mySubmit.value);
    form.reset ();
  });

});

function newSubmit (todo) {
    //  console.log (todo);
     let p = document.createElement ('p');
     let btn = document.createElement ('button');
     btn.addEventListener ('click', deleteTodoList)
     btn.textContent= ('x')
     p.textContent = `${todo} `;
     document.querySelector ("#tasks").appendChild (p);
     p.appendChild (btn);
     console.log (p)
}

function deleteTodoList (e) {
     e.target.parentNode.remove ()
}