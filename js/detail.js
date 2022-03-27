function getDynamicdata() {
  let id = localStorage.getItem("id");
  let getBlogs = localStorage.getItem("blogs");
  let array = JSON.parse(getBlogs);
  let project = array[id].project;
  let image = array[id].image;
  let description = array[id].description;
  console.log(project);
  document.getElementById("detail-project").innerHTML = `
    <h1 class="text-center">${project}</h1>
  `;
  document.getElementById("detail-description").innerHTML = `
  <p>${description}</p>
  `;
  document.getElementById("detail-image").innerHTML = `
    <img src="${image}" class="image" alt="" />
  `;
  //   console.log(project);
}
getDynamicdata();
