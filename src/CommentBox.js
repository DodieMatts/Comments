import React, { Component } from 'react';
import Comment from './Comment.js';

class CommentBox extends Component {
constructor() {
	super();

	this.state = {
		showComments: false
	};
}

  render() {
     const comments = this._getComments();
     let commentNodes;
     let buttonText = 'Show Comments';

     if (this.state.showComments){
     	commentNodes = <div className="comment-list"> {comments} </div>;
     }

     if (this.state.showComments) {
     	buttonText = 'Hide Comments'
     }
  

    return(
    <div className="comment-box">
      <h4 className="comment-count"> {this._getCommentsTitle(comments.length)}
      	<div>
	        	<button onClick={this._handleClick.bind(this)} variant="Hide" className="comment-footer-hide"> {buttonText} </button>
	    	</div>
	  </h4>
	        	<div className="comment-list">
	            {commentNodes}
       		</div>
    </div>
          );
  }

    _getComments()
{

      const commentList = [
        {id: 1, author:"Cecilia Cooke", body:"Great work son Im really proud of you!"},
        {id: 2, author:"Denis Cooke", body:"Excellent progress being made"},
        {id: 3, author:"Denis Cooke", body:"Excellent progress being made"}
      ];
  
  return commentList.map((comment)=>{
        return (
          <Comment author= {comment.author} body= {comment.body} key={comment.id} />
          );
        });

}

_getCommentsTitle(commentCount) {
	  if(commentCount === 0){
	    return 'No Comments yet';
	  } else if (commentCount === 1){
	    return '1 Comment';
	  } else {
	    return `${commentCount} comments`;
	  }
}

_handleClick() {
	this.setState ({
		showComments: !this.state.showComments
	});
}


}

export default CommentBox;