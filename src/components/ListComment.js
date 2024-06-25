import React from "react";
import CommentComponent from "./CommentComponent";
import { faker } from "@faker-js/faker";

class ListComment extends React.Component {
  constructor(props) {
    super(props);
    // membuat data comment menggunakan faker.js
    const data = [
      {
        name: faker.person.firstName("female"),
        avatar: faker.image.avatar(),
        day: "Today at",
        time: faker.date
          .recent()
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        comment: faker.word.words(5),
        like: 0,  
      },
      {
        name: faker.person.firstName("female"),
        avatar: faker.image.avatar(),
        day: "Today at",
        time: faker.date
          .recent()
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        comment: faker.word.words(5),
        like: 0,  
      },
      {
        name: faker.person.firstName("female"),
        avatar: faker.image.avatar(),
        day: "Today at",
        time: faker.date
          .recent()
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        comment: faker.word.words(5),
        like: 0,  
      },
      {
        name: faker.person.firstName("female"),
        avatar: faker.image.avatar(),
        day: "Today at",
        time: faker.date
          .recent()
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        comment: faker.word.words(5),
        like: 0,  
      },
    ];

    this.state = { comments: data }; // menyimpan data dalam state
  }

  //function ketika button di klik maka jumlah like akan bertambah
  handleLike = (index) => {
    const newComments = [...this.state.comments];
    newComments[index].like += 1;
    this.setState({ comments: newComments });
  };


  render() {
    const { comments } = this.state; // mendapatkan data komentar dari state
    return (
      //mnemampilkan komentar secara dinamis
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        {comments.map((comment, index) => (
          <CommentComponent
            key={index}
            avatar={comment.avatar}
            name={comment.name}
            day={comment.day}
            time={comment.time}
            comment={comment.comment}
            like={comment.like}
            onLike={() => this.handleLike(index)}
          />
        ))}
      </div>
    );
  }
}

export default ListComment;
