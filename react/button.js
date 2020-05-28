'use strict';

const e = React.createElement;

const LikeButton = ()=>{
  const [text,textFun] = React.useState('state text');
  return (
    <button onClick={()=>alert(text)}>react button</button>
  );
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);