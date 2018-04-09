// CommentModel

Comment.all = [];

function Comment(comment, imageId) {
  this.imageId = this.constructor.all.length;
  this.comment = comment;
  this.constructor.all.push(this);
}


Comment.prototype.findImage(imageId) = function() {
  return $("ul#image-" + imageId).attr('data-id');
}

Comment.prototype.commentEl = function() {
  return `<li id="image-comment-${this.imageId}" data-id="${this.imageId}">
    <p>${this.comment}</p>
  </li>`;
};
