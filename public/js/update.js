// const newPostButtonEl = document.getElementById("new-post-btn");
// const newPostCardEl = document.querySelector('#new-post');
// const dashboardCardEl = document.querySelector('#dashboard');

// function newPostFormHandler(event){
//   event.preventDefault();

//   dashboardCardEl.classList.add("hidden");
//   newPostCardEl.classList.remove("hidden");
// };

// newPostButtonEl.addEventListener("click", newPostFormHandler);

const editFormHandler = async (event) => {
  event.preventDefault();
  console.log("this even handler is working");

  const title = document.querySelector('#update-name').value.trim();  
  const content = document.querySelector('#update-desc').value.trim();
  const update_id = document.querySelector('#update-id').textContent;
  console.log(title);
  console.log(content);
  console.log(update_id);

try { 
      
      const response = await fetch(`/api/blogposts/${update_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blog post');
      }
    } catch (err) {
      console.error(err);
    }; 
   
};

// const deleteHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/blogposts/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to delete post');
//     }
//   }
// };

document
  .querySelector('.update-form')
  .addEventListener('submit', editFormHandler);

// document
//   .querySelector('.delete-comment')
//   .addEventListener('click', deleteHandler);
