class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    this.$addCommentForm.each((index, commentForm) => {
      $(commentForm).on('submit', (e) => {
        e.preventDefault()
        let imageId = $(commentForm).attr('data-id');
        let comment = $(commentForm).children('.user-text').val();

        let commentObject =  {
          imageId: imageId,
          comment: comment
        }
        this.render(commentObject);
      });
    })
  }
  render(commentObject){
    let imageContainer = $('ul#image-' + commentObject.imageId)
    imageContainer.append(`<li id="image-comment-${commentObject.imageId}" data-id="${commentObject.imageId}">
    <p>${commentObject.comment}</p>
  </li>`);
  }
}
