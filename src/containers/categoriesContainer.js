import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/fetchCategories";
import Categories from "../components/categories";

class CategoriesContainer extends Component {

    componentDidMount(){
        this.props.fetchCategories()
    }
    render() {
        return (
            <div>
                <Categories/>
            </div>
        )
    }
}



export default connect(null, {fetchCategories})(CategoriesContainer)