import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { logout } from '../state/actionsCreators'
import { getProducts } from '../state/actionsCreators'
import List from '../components/productList/List'
import Loading from '../components/loading/Loading'
import Search from '../components/productList/Search';

const ListWithLoading = Loading(List)

class Products extends Component {

  componentDidMount = () => {
    const { handleGetProducts } = this.props
    handleGetProducts()
  }

  handleOnClick = () => {
    this.props.handleLogout()
  }

  render() {
    const { products: { products, loading }, filterdProducts } = this.props
    let productsToList = filterdProducts.length > 0 ? filterdProducts : products

    return (
      <Fragment>
        <Search 
          products = { products }
          onClick = {this.handleOnClick}
        />
        <ListWithLoading isLoading = { loading } products = { productsToList }/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
  filterdProducts: state.search.filteredList
})

const mapDispatchToProps = dispatch => ({
  handleGetProducts () {
    dispatch(getProducts())
  },
  handleLogout () {
    dispatch(logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)