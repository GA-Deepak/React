import React, { Component } from "react";
import NewList from "./NewComponent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
class AddItem extends Component {
  state = {
    listData: [],
    text: "",
    text1: "",
  };

  newList = () => {
    const { listData, text, text1 } = this.state;
    const regExp = /^[a-zA-Z]+$/;
    if (!regExp.test(text) || !regExp.test(text1)) {
      alert("Please enter your valid name");
      return false;
    } else {
      const ListData = [...listData];
      const fullName = { fname: this.state.text, lname: this.state.text1 };
      ListData.push(fullName);

      this.setState({ listData: ListData });
      this.setState({ text: "", text1: "" });
    }
  };

  handeleChange = ({ currentTarget: input }) => {
    this.setState({ text: input.value });
  };
  handeleChange1 = ({ currentTarget: input }) => {
    this.setState({ text1: input.value });
  };
  handleDelete = (toDo) => {
    const listData = this.state.listData.filter((m) => m !== toDo);
    this.setState({ listData });
  };

  render() {
    return (
      <>
        <Typography align="center">
          <h1>List Of Names</h1>
          <h6>
            <label htmlFor="fname">
              Firstname:
              <TextField
                 required
                 id="filled-required"
                 label="Required"
                 variant="filled"
                 size="small"
                value={this.state.text}
                onChange={this.handeleChange}
              />
            </label>
          </h6>
          <h6>
            <label htmlFor="lname">
              Lastname:
              <TextField
                required
                id="filled-required"
                label="Required"
                variant="filled"
                size="small"
                value={this.state.text1}
                onChange={this.handeleChange1}
              />
            </label>
          </h6>
          <Button
            variant="contained"
            color="primary"
            aria-label="contained primary button"
            onClick={() => {
              this.newList();
            }}
            type="submit"
          >
            {" "}
            add
          </Button>
        </Typography>
        <NewList
          listDataArr={this.state.listData}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default AddItem;
