import React from "react";
import "./App.css";

const App = () => {
  return (
  <html>
    <div class="container">
    <div class="FormStyle">
    <form>
        <div class="LeftFormStyle">
            <h2>Add new Task</h2>
            <p>Title:</p>
            <input type="text" id="titleEntry" />
            <p>Description:</p>
            <textarea id="textEntry" cols="50" rows="5"></textarea>
        </div>
    </form>
    <div class="UpperRightFormStyle">
        <p>Heli</p>
        <button onclick="addTask()">Hello</button>
    </div>
    </div>


  </div>
  

  
  <h1 class="HeadTitle">TASK MANAGER</h1>

  <div class="grid-container">
    <div class="c1">
        Available
    </div>
    <div class="c2">
        In-Progress
    </div>
    <div class="c3">
        Completed
    </div>
</div>

<div class="grid-container">
    <div class="item1" id="Available">
        <div class="task">
            <h1>Hiya</h1>
            <body>
                <p>FGo to scool</p>
                <p>Due date: 10.5.20</p>
            </body>
        </div>
    </div>
    <div class="item2" id="In-Progress">2</div>
    <div class="item3">3</div>
  </div>
  </html>
  );
};

export default App;
