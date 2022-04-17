async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('input[name="comment-body"]').value.trim();
  
    const blogId = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            blogId,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
          
        } alert(response.statusText);
          document.querySelector('#comment-form').style.display = "block";
      }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
