// const commentPostCardEl = document.querySelector('#comment-post');
// const editPostCardEl = document.querySelector('#edit-post');

// function renderCommentPage(){
//   if (user.username) {
//     commentPostCardEl.classList.add("hidden");
//     editPostCardEl.classList.remove("hidden");

//   } else {
//     editPostCardEl.classList.add("hidden");
//     commentPostCardEl.classList.remove("hidden");
//   }

// };

// renderCommentPage();

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);


