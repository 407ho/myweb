import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

import human from "./human.png";
import anger from "./anger.png";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Avatar src={human} />
      <Comment.Content>
        <Comment.Author as="a">Human </Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 01:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>Really? Aren't you a Penguin?</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      commentsList: [],
    };
  }

  render() {
    console.log(this.state.commentsList);
    console.log(this.state.inputContent);
    return (
      <Comment.Group centered style={{ marginLeft: "550px" }}>
        <Header as="h3" dividing>
          Comments
        </Header>



        {this.state.commentsList.map(comments => <SingleComment content = {comments}/>)}




        <Comment>
          <Comment.Avatar src={human} />
          <Comment.Content>
            <Comment.Author as="a">Human </Comment.Author>
            <Comment.Metadata>
              <div>Yesterday at 01:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>Really? Aren't you a Penguin?</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src={anger} />
              <Comment.Content>
                <Comment.Author as="a">King Peng</Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text> Yes, I'm a Penguin.</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder="댓글!!!"
            onChange={(e) => this.setState({ inputContent: e.target.value })}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() =>
              alert(
                this.setState((prevState) => {
                  return {
                    commentsList: [...prevState.commentsList, this.state.inputContent],
                  };
                })
              )
            }
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
