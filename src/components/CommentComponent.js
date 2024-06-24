import React from "react";

class CommentComponent extends React.Component {
  render() {
    //mengambil nilai properti dari props untuk digunakan dalam komponen
    const { avatar, name, day, time, comment } = this.props;
    return (
      //mengatur struktur dalam menampilkan comment
      <div className="comment">
        <a className="avatar">
          <img src={avatar} alt="avatar" />
        </a>
        <div className="content">
          <a className="author">{name}</a>
          <div className="metadata">
            <span className="date">
              {day} {time}
            </span>
          </div>
          <div className="text">{comment}</div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentComponent;
