const newPostButtonEl = document.getElementById("new-post-btn");
const newPostCardEl = document.querySelector('#new-post');
const dashboardCardEl = document.querySelector('#dashboard');

function newPostFormHandler(event){
  event.preventDefault();

  dashboardCardEl.classList.add("hidden");
  newPostCardEl.classList.remove("hidden");
};

newPostButtonEl.addEventListener("click", newPostFormHandler);

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-name').value.trim();  
  const content = document.querySelector('#post-desc').value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogposts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      newPostCardEl.classList.add("hidden");
      dashboardCardEl.classList.remove("hidden");
      document.location.replace('/dashboard');     
    } else {
      alert('Failed to create blog post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id);

    const response = await fetch(`/api/blogposts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);
