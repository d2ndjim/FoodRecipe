const initializePopUp = () => {
  const popUp = document.querySelector('#modal');
  popUp.innerHTML = `
     <div class = 'container'> 
     <button class = 'close-button'> + </button>
     <img src = "https://static3.depositphotos.com/1002372/164/i/950/depositphotos_1642517-stock-photo-big-food-still-life.jpg" alt = "" >
     <h1> Lolem Ipsum </h1>
     <div class = 'section-one'>  
     <div class = 'part-1'> 
     <span> <b> Category </b> Vegetarian </span>
     </div>
     <div class = 'part-2'> 
     <span> <b> Country </b> Mexico </span>
     </div>
     </div>
     <div class = 'section-two'> 
     <div class = 'description' ><span> <b> Description </b> Text structure refers to how the information within a written text is organized.
      This strategy helps students understand that a text might present a main idea and details; a cause and then its effects;
       and/or different views of a topic.
      Teaching students to recognize common text structures can help students monitor their comprehension.  </span>
      </div>
      <div class = 'country'>
     <span> <b> Country </b> Mexico </span>
     </div>
     </div>
     <div class = 'comment-section'> 
     <ul class = 'comment-list'> 
     <li> Comment 1 </li> 
     <li> Comment 2 </li> 
     <li> Comment 3 </li> 
     <li> Comment 4 </li> 
     </ul>
     </div>
     <div class = 'form'>
     <form action = ''>
     <input type = 'text' placeholder = 'name'>
     <textarea> </textarea>
     <input type = 'submit' value = 'send'>
     </div>
     </div>
    `;
};

export default initializePopUp;