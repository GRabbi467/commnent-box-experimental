document.getElementById('btn').addEventListener('click',function(){
    const commentBox = document.getElementById('new-comment');
   // const userComment = commentBox.value;
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;
    document.getElementById('comment-container').appendChild(newComment);
    commentBox.value = '';

   
})