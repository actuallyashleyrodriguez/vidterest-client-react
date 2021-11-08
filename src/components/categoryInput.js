import React, { Component } from "react";

class CategoryInput extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = () => {

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

export default CategoryInput