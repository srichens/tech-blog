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

  const title = document.querySelector('#comment-name').value.trim();  
  const content = document.querySelector('#comment-desc').value.trim();

  if (title && content) {
    const response = await fetch(`/api/comments`, {
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
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.comment-list')
  .addEventListener('click', delButtonHandler);
