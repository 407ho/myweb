import React from "react";
import { Grid, Image, Button, Divider, Icon, Header } from "semantic-ui-react";
import Comments from "./comment.js";

import 펭귄 from "./펭귄.png";
import human from "./human.png";
import anger from "./anger.png";

function App() {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Button Primary> Hello Stranger, I'm King Peng. </Button>
        </Grid.Row>

        <Grid.Row>
          <Image src={펭귄} centered style={{ width: 300, hight: 300 }} />
        </Grid.Row>

        <Grid.Row>
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "999+",
            }}
          />
          <Button
            basic
            color="blue"
            content="Fork"
            icon="fork"
            label={{
              as: "a",
              basic: true,
              color: "blue",
              pointing: "left",
              content: "1000",
            }}
          />
        </Grid.Row>
      </Grid>

      <Divider horizontal>
        <Header as="h4">
          <Icon name="comment outline" />
          Do You Have Anything To Say?
        </Header>
      </Divider>
      <Comments />

      <Grid centered>
        <Button circular color="facebook" icon="facebook" />
        <Button circular color="twitter" icon="twitter" />
        <Button circular color="linkedin" icon="linkedin" />
        <Button circular color="google plus" icon="google plus" />
      </Grid>
    </div>
  );
}

export default App;
