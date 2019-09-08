import React, { Component } from 'react';


class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            item: "",
            ItemsList: []
        }

        this.ChangeHandler = this.ChangeHandler.bind(this);
        this.AddData = this.AddData.bind(this);
        this.DeleteData = this.DeleteData.bind(this);
    }

    ChangeHandler(event){
        var inputValue = event.target.value;
        this.setState({
            item: inputValue
        })
    }

    AddData(){
        var inputValue = this.state.item;
        var CopyOfArray = this.state.ItemsList;
        CopyOfArray.push(inputValue)
        this.setState({
            ItemsList:CopyOfArray
        })
        this.setState({
            item : ""
        })
    }

    DeleteData(event){
        var Id = event.target.id;
        var CopyOfArray = this.state.ItemsList;
        CopyOfArray.splice(Id , 1);
        this.setState({
            ItemsList:CopyOfArray
        })
    }

  render() {

    var List = this.state.ItemsList.map((event,i)=>
        <ul key = {i}>{event} <span onClick = {this.DeleteData} id = {i}>X</span></ul>
    )

    


    return (
     
      <div>
          <div className = "header">
          Todo List App
      </div>
      <div className = "body">
        {List} 
      </div>
      <div className = "footer">
      <input type = "text" value={this.state.item} onChange = {this.ChangeHandler}></input>
       
        <button onClick = {this.AddData}>+</button>
      </div>
      </div>
    )
  }
}

export default Todo;


