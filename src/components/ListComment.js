import React from "react";
import CommentComponent from "./CommentComponent";
import { faker } from "@faker-js/faker";

class ListComment extends React.Component {
  constructor(props) {
    super(props); //untuk memastikan data terkirim dari parent ke children
    //membuat data comment meggunakan faker.js
    const data = [
      {
        name: faker.person.firstName("female"),
        avatar: faker.image.avatar(),
        day: "Today at",
        time: faker.date
          .recent()
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        comment: faker.lorem.words(5),
      },
      {
        name: faker.person.firstName("female"),
        avatar: faker.image.avatar(),
        day: "Today at",
        time: faker.date
          .recent()
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        comment: faker.lorem.words(5),
      },
      {
        name: faker.person.firstName("female"),
        avatar: faker.image.avatar(),
        day: "Today at",
        time: faker.date
          .recent()
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        comment: faker.lorem.words(5),
      },
      {
        name: faker.person.firstName("female"),
        avatar: faker.image.avatar(),
        day: "Today at",
        time: faker.date
          .recent()
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        comment: faker.lorem.words(5),
      },
    ];

    this.state = { comments: data }; //menyimpan data dalam state
  }

  render() {
    const { comments } = this.state; //mendapatkan data komentar dari state
    return (
      //menampilkan comment secara dinamis menggunakan komponen CommentComponent
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
          />
        ))}
      </div>
    );
  }
}

export default ListComment;
