import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/fetchCategories";
import Categories from "../components/categories";
import CategoryInput from "../components/categoryInput";


class CategoriesContainer extends Component {

    componentDidMount(){
        this.props.fetchCategories()
    }
    render() {
        return (
            <div>
                <CategoryInput/>
                <Categories categories={this.props.categories}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}



export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)