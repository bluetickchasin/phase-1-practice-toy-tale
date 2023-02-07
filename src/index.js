let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

fetch(`http://localhost:3000/toys`)
.then(response =>
  response.json()
)
.then (data => {
  const andysToys = document.querySelector("#toy-collection");
  data.forEach((toy,index) => {
    const div = document.createElement('div')
    div.id = `toy-${index}`;
    div.textContent = toy.name;
    andysToys.appendChild(div);
  });
});


/* <div class="card">
  <h2>Woody</h2>
  <img src="[toy_image_url]" class="toy-avatar" />
  <p>4 Likes</p>
  <button class="like-btn" id="[toy_id]">Like ❤️</button>
</div> */


