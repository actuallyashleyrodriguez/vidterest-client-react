import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../actions/addCategory";

class CategoryInput extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCategory(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Category:</label>
                    <input type='text' value={this.state.name} name="name" onChange={this.handleChange}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {addCategory})(CategoryInput)