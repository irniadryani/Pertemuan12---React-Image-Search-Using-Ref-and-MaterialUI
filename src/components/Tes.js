// import React from "react";
// import CommentComponent from "./CommentComponent";
// import { faker } from "@faker-js/faker";

// class ListComment extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       comments: [],
//       DataisLoaded: false,
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//       .then((res) => res.json())
//       .then((json) => {
//         // Tambahkan properti like pada setiap komentar
//         const commentsWithLikes = json.map((comment) => ({
//           ...comment,
//           like: 0,
//         }));
//         this.setState({
//           comments: commentsWithLikes,
//           DataisLoaded: true,
//         });
//       });
//   }

//   //function ketika button di klik maka jumlah like akan bertambah
//   handleLike = (index) => {
//     const newComments = [...this.state.comments];
//     newComments[index].like += 1;
//     this.setState({ comments: newComments });
//   };

//   render() {
//     const { DataisLoaded, comments } = this.state; // mendapatkan data komentar dari state
//     if (!DataisLoaded) {
//       return <div>Loading...</div>;
//     }

//     return (
//       //menampilkan komentar secara dinamis
//       <div className="ui comments">
//         <h3 className="ui dividing header">Comments</h3>
//         {comments.map((comment, index) => (
//           <CommentComponent
//             key={index}
//             // avatar={comment.avatar}
//             name={comment.name}
//             // day={comment.day}
//             // time={comment.time}
//             comment={comment.body}
//             like={comment.like}
//             onLike={() => this.handleLike(index)}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default ListComment;

import React from "react";
import CommentComponent from "./CommentComponent";
import { faker } from "@faker-js/faker";

class ListComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      DataisLoaded: false,
      valueName: "",
      valueComment: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newComment = {
      id: this.state.comments.length + 1,
      name: this.state.valueName,
      body: this.state.valueComment,
      like: 0,
      avatar: faker.image.avatar(),
      day: "Today at",
      time: faker.date
        .recent()
        .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    this.setState((prevState) => ({
      comments: [...prevState.comments, newComment],
      valueName: "",
      valueComment: "",
    }));
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((json) => {
        const commentsWithLikes = json.slice(0, 5).map((comment) => ({
          ...comment,
          like: 0,
          avatar: faker.image.avatar(),
          day: "Today at",
          time: faker.date
            .recent()
            .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }));
        this.setState({
          comments: commentsWithLikes,
          DataisLoaded: true,
        });
      });
  }

  handleLike = (index) => {
    const newComments = [...this.state.comments];
    newComments[index].like += 1;
    this.setState({ comments: newComments });
  };

  render() {
    const { DataisLoaded, comments, valueName, valueComment } = this.state;

    if (!DataisLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        {comments.map((comment, index) => (
          <CommentComponent
            key={index}
            avatar={comment.avatar}
            name={comment.name}
            day={comment.day}
            time={comment.time}
            comment={comment.body}
            like={comment.like}
            onLike={() => this.handleLike(index)}
          />
        ))}
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="valueName"
                value={valueName}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Comment:
              <input
                type="text"
                name="valueComment"
                value={valueComment}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default ListComment;
