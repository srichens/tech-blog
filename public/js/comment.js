const newCommentHandler = async (event) => {
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
  }; 
};


document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);


