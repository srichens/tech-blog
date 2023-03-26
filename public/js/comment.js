// const newCommentButtonEl = document.getElementById("new-comment-btn");
// const newCommentCardEl = document.querySelector('#new-comment');
// const dashboardCardEl = document.querySelector('#dashboard');

// function newCommentHandler(event){
//   event.preventDefault();

//   dashboardCardEl.classList.add("hidden");
//   newCommentCardEl.classList.remove("hidden");
// };

// newCommentButtonEl.addEventListener("click", newCommentHandler);

const newCommentHandler = async (event) => {
// const newCommentHandler = (event) => {
  event.preventDefault();
console.log('this even listener is working');
 
  const comment_text = document.querySelector('#comment-desc').value.trim();
  console.log(comment_text);
  const blogpost_id = document.querySelector('#blogpost-id').textContent;
  console.log(blogpost_id);

  try  {
    const response = await fetch(`/api/blogposts/${blogpost_id}`, {
      method: 'POST',
      body: JSON.stringify({ comment_text, blogpost_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {  
      document.location.replace(`/blogpost/${blogpost_id}`);     
    } else {
      alert('Failed to comment on blog post');
    }
  } catch (err) {
    console.error(err);
  }  
};

// const delButtonHandler = async (event) => {
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
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);

// document
//   .querySelector('.comment-list')
//   .addEventListener('click', delButtonHandler);
