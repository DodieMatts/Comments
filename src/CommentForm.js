import React, { Component } from 'react';

class CommentForm extends Component {
	render() {
		return (
					<form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
						<label> JOIN THE DISCUSSION </label>
							<div className="comment-form-fields"> 
								<input placeholder=" Whats your name? " ref={(input) => this._author = input} className="nameInput"/>
								<br />
								<textarea placeholder="Join the discussion... " ref={(textarea) => this._body = textarea} className="commentInput">
							</textarea>
							</div>
							<div className="comment-form-actions">
								<button type="submit" className="postComment">
								POST COMMENT
								</button>
							</div>
					</form>
			);
	}

	_handleSubmit(event) {
		event.preventDefault();

		let author = this._author;
		let body = this._body;

		this.props.addComment(author.value, body.value);
	}
}

export default CommentForm;