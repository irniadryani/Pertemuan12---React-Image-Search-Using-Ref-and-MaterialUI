import React from "react";

class CommentComponent extends React.Component {
  render() {
    const { avatar, name, day, time, comment, like, onLike } = this.props; //menerima variabel dari props

    return (
      <div className="comment">
        <a className="avatar">
          <img src={avatar} alt="avatar" />
        </a>
        <div className="content">
          <a className="author">{name}</a>
          <div className="metadata">
            <span className="date">
              {day} {time} <a>| Liked: {like}</a>
            </span>
          </div>
          <div className="text">{comment}</div>
          <div className="actions">
            <button onClick={onLike}>Click me</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentComponent;
