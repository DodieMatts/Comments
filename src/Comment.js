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
        <footer class="social" >
          <a href="https://www.facebook.com/dodie.matthew" target="_blank" rel="noopener norefferrer"><img src="/images/facebook.jpg" width="50" height="50" alt="facebook icon" class="FB" /></a>
          <a href="https://www.instagram.com/prime.prospect/?hl=en" target="_blank" rel="noopener norefferrer"><img src="/images/IG.jpg" width="50" height="50" alt="Instagram icon" class="IG" /></a>
        </footer >

      	</div>
     );
  }
}

export default Comment;