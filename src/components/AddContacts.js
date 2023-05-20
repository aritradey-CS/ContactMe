import React, { Component } from "react";

export class AddContacts extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    // this.props.history.push("/");
  };

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            <h3>Add Contact</h3>
          </h5>

          <p className="card-text">
            <form className="ui form" onSubmit={this.add}>
              <div className="field">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>

              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
            </form>
          </p>

          <div className="card-link">
            <button className="btn btn-success">Add</button>
          </div>
          {/* <a href="#" class="card-link">Another link</a> */}
        </div>
      </div>
    );
  }
}

export default AddContacts;
