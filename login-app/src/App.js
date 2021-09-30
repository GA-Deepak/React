import { Route, Switch } from "react-router";
import "./App.css";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";
import About from "./Components/About";
import { useState } from "react";
import Edit from "./utils/Edit";
import View from "./utils/View";
function App() {
  const [user, setuser] = useState([]);
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const [Image, setImage] = useState("");
  const [position, setposition] = useState(0);
  const [editfname, seteditfname] = useState("");
  const [editlname, seteditlname] = useState("");
  const [editage, seteditage] = useState("");
  const [editemail, seteditemail] = useState("");
  const [editimage, seteditimage] = useState("");
  const [viewfname, setviewfname] = useState("");
  const [viewlname, setviewlname] = useState("");
  const [viewage, setviewage] = useState("");
  const [viewemail, setviewemail] = useState("");
  const [viewimage, setviewimage] = useState("");

  const view = (el) => {
    setviewfname(el.fname);
    setviewlname(el.lname);
    setviewemail(el.email);
    setviewage(el.age);
    setviewimage(el.image);
  };

  const edit = (e) => {
    seteditfname(e.fname);
    seteditlname(e.lname);
    seteditemail(e.email);
    seteditage(e.age);
    seteditimage(e.image);
    setposition(user.indexOf(e));
  };

  const save = () => {
    let a = [...user];
    const obj = {
      fname: editfname,
      lname: editlname,
      age: editage,
      email: editemail,
      image: editimage,
    };
    a.splice(position, 1, obj);
    setuser(a);
  };

  const newList = () => {
    const regExp = /^[a-zA-Z]+$/;
        if (!regExp.test(Fname) || !regExp.test(Lname)) {
          alert("Please enter your valid name");
          return false;
        } else {
    const User = [...user];
    const fullUser = {
      fname: Fname,
      lname: Lname,
      age: Age,
      email: Email,
      image: Image,
    };
    User.push(fullUser);

    setuser(User);
    setFname("");
    setLname("");
    setAge("");
    setEmail("");
    setImage("");
  }
  };

  const handeleChange = ({ currentTarget: input }) => {
    setFname(input.value);
  };
  const handeleChange1 = ({ currentTarget: input }) => {
    setLname(input.value);
  };
  const handeleChange2 = ({ currentTarget: input }) => {
    setAge(input.value);
  };
  const handeleChange3 = ({ currentTarget: input }) => {
    setEmail(input.value);
  };
  const handeleChange4 = ({ currentTarget: input }) => {
    seteditfname(input.value);
  };
  const handeleChange5 = ({ currentTarget: input }) => {
    seteditlname(input.value);
  };
  const handeleChange6 = ({ currentTarget: input }) => {
    seteditage(input.value);
  };
  const handeleChange7 = ({ currentTarget: input }) => {
    seteditemail(input.value);
  };
  const handleDelete = (event) => {
    const User = user.filter((m) => m !== event);
    setuser(User);
  };

  return (
    <div>
     
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/Dashboard"
          render={(props) => (
            <Dashboard
              {...props}
              user={user}
              handleDelete={handleDelete}
              edit={edit}
              view={view}
            />
          )}
        />
        <Route exact path="/Home" component={Home} />
        <Route
          exact
          path="/AddUser"
          render={(props) => (
            <AddUser
              {...props}
              newList={newList}
              setImage={setImage}
              handeleChange={handeleChange}
              handeleChange1={handeleChange1}
              handeleChange2={handeleChange2}
              handeleChange3={handeleChange3}
            />
          )}
        />
        <Route
          exact
          path="/Edit"
          render={(props) => (
            <Edit
              {...props}
              save={save}
              editfname={editfname}
              editlname={editlname}
              editage={editage}
              editemail={editemail}
              editimage={editimage}
              seteditimage={seteditimage}
              handeleChange4={handeleChange4}
              handeleChange5={handeleChange5}
              handeleChange6={handeleChange6}
              handeleChange7={handeleChange7}
            />
          )}
        />
        <Route
          exact
          path="/View"
          render={(props) => (
            <View
              {...props}
              viewfname={viewfname}
              viewlname={viewlname}
              viewage={viewage}
              viewemail={viewemail}
              viewimage={viewimage}
            />
          )}
        />
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  );
}

export default App;
