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


document
  .querySelector('.update-form')
  .addEventListener('submit', editFormHandler);


