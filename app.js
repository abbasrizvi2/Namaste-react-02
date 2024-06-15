// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement('h1', { id: 'heading', xyz:'randonm value'},'Hello World from React')

// console.log(heading) --> it is a react element(object)
// 'Hello world from React' --> it basically a child of the  h1 tag

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading); -->react element(object) -->has been rendered convert into html and put it into DOM

// how to make nested elements in the react

/* <div id="root">

      <div id="parent">
      
         <div id="child">

            <h1></h1>
       </div>

    </div>

</div> */

// const root = ReactDOM.createRoot(document.getElementById('root'));  //div id = rootis already there
// const parent = React.createElement('div', { id: 'parent' },
//     React.createElement('div', { id: 'child' },
//     React.createElement('h1', { id: 'heading' }, 'Hello from nested React JS')
// ))

// root.render(parent);

// what if root div is not made before you have to start from scratch
// you have to make body tag as root element  --> very very bad practice

// const root = ReactDOM.createRoot(document.querySelector('body'));
// // const root = ReactDOM.createRoot(document.getElementsByTagName('body'));  //ye body pe work nhi krta hai
// const rootDiv = React.createElement(
//   "div",
//   { id: "roots" },
//   React.createElement("div",{ id: "parent" },
//     React.createElement( "div",{ id: "child" },
//     React.createElement("h1",{ id: "heading" },"Hello from the nested React Js!"  )))
// );

// root.render(rootDiv);


//what if there is sibling inside child(two h1 tag or maybe 1 h1 and 1 h2)

// put siblings element inide an array always
//they come to same level

/* <div id="root">

      <div id="parent">
      
         <div id="child">

            <h1></h1>
            <h2></h2>
       </div>

    </div>

</div> */

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const parent = React.createElement('div', { id: 'parent' },
//     React.createElement('div', { id: 'child' },
//     [React.createElement('h1', { id: 'heading 1' }, 'I am an H1'),
//         React.createElement('h2', { id: 'heading 2' }, 'I am an H2')]
//     )
// )

// root.render(parent);




// what if there is 2 child

/* <div id="root">

      <div id="parent">
      
         <div id="child 1>

            <h1></h1>
            <h2></h2>
       </div>
 <div id="child 2">

            <h1></h1>
            <h2></h2>
       </div>
    </div>

</div> */

const root = ReactDOM.createRoot(document.getElementById('root'));

const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child 1' },
    [React.createElement('h1', { id: 'heading 1' }, 'I am an H1 tag'),
        React.createElement('h2', { id: 'heading 2' }, 'I am an H2 Tag')]
    ),
    React.createElement('div', { id: 'child 2' },
    [React.createElement('h1', { id: 'heading 1' }, 'I am an H1 Tag'),
        React.createElement('h2', { id: 'heading 2' }, 'I am an H2 Tag')]
    )]
)

root.render(parent);