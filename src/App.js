import React from "react";
import axios from "axios";
import Formulario from "./components/Formulario";
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostsList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: "laura",
        password: "password123"
      },
      error: "",
      posts: []
    };

    this.logout = this.logout.bind(this);
    console.log("mount phase: constructor");
    this.signin = this.signin.bind(this);
  }

  logout(event) {
    event.preventDefault();

    this.setState({
      user: {
        userName: "",
        password: "",
        status: false
      }
    });
  }

  signin(event) {
    event.preventDefault();

    this.setState({
      user: {
        userName: "wemanconnect",
        password: "anything",
        status: true
      }
    });
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(result => {
      this.setState({
        posts: result.data
      });
    });
  }

  componentDidUpdate() {
    console.log("updating phase: component didupdate");
  }

  componentWillUnmount() {
    console.log("unmounting phase: constructor");
  }
  static getDerivedStateFromError(error) {
    //actualiza el state asi el siguiente render lo mostrara en la ui
    return { error: error };
  }
  componentDidCatch(error, info) {
    console.log("error phase: " + error);
  }

  render() {
    // console.log(this.state.posts);
    // if(this.state.error){
    // return <div>{this.state.error}</div>
    // }
    if (this.state.user.status === false) {
      return (
        <div className="container">
          <Header
            user={this.state.user.userName}
            logout={this.logout}
            signin={this.signin}
          ></Header>
          <Formulario
            userName={this.state.user.userName}
            password={this.state.user.password}
          ></Formulario>
          <footer>By WemanConnect</footer>
        </div>
      );
    } else {
      return (
        <div className="container">
          <Header
            user={this.state.user.userName}
            logout={this.logout}
            signin={this.signin}
          ></Header>
          <PostList posts={this.state.posts} />
          <footer>By WemanConnect</footer>
        </div>
      );
    }
  }
}
