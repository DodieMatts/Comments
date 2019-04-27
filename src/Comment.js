import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return(
      <div className="comment">
          <h4 className="comment-header"> {this.props.author} </h4>
          <p className="comment-body">
          {this.props.body}
          </p>
        	<div className= "comment-footer">
          <button variant="delete" className="comment-footer-delete "> Delete </button>
        	</div>


      	</div>
     );
  }
}

export default Comment;