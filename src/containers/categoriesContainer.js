import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/fetchCategories";

class CategoriesContainer extends Component {

    componentDidMount(){
        this.props.fetchCategories()
    }
    render() {
        return (
            <div>
                Hi!
            </div>
        )
    }
}



export default connect(null, {fetchCategories})(CategoriesContainer)