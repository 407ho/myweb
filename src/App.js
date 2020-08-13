import React from 'react';
import {Image, Button} from 'semantic-ui-react'

import 펭귄 from "./펭귄.png"





function App(){
  return (

    <div>

    <Button Primary> Hello Stranger, I'm Penguin. </Button>
    <Image src = {펭귄} centered style = { {"width" : 300, "hight" : 300} }/  >

    </div>
  );
}

export default App;
