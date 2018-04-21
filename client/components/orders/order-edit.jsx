import React, {Component} from 'react'
import {fetchOrders, callOrderUpdate} from '../../store'
import {Button, Dropdown, NavItem} from 'react-materialize'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


export class OrderEdit extends Component {
  constructor(props){
    super(props)
    this.handleClickShipped = this.handleClickShipped.bind(this)
    this.handleClickProcess = this.handleClickProcess.bind(this)
    this.handleClickCancel = this.handleClickCancel.bind(this)
    this.state = {
        id: props.content.id,
        shipped: props.content.shipped,
        startProcessing: props.content.startProcessing,
        cancel: props.content.cancel
    }
  }

  handleClickShipped () {
    const id = this.props.content.id
      this.setState({
        shipped: new Date()}, () => {
        console.log('sjhipped clicked.. state is ', this.state.shipped)
      })
    this.props.orderUpate(id, this.state)
  }

  handleClickProcess () {
    const id = this.props.content.id
    this.setState({
      startProcessing: new Date()}, () => {
      console.log('processed clicked.. state is ', this.state.startProcessing)
    })
    
    this.props.orderUpate(id, this.state)
  }

  handleClickCancel () {
    const id = this.props.content.id
    this.setState({
      cancel: new Date()}, () => {
        console.log('cancel clicked.. state is ', this.state.cancel)
      
    })
    
    this.props.orderUpate(id, this.state)
  }
    render(){

    return (
      <div>
      <Dropdown trigger={
          <Button>Edit me!</Button>
        }>
        {this.props.content.startProcessing === null && this.props.content.cancel === null ?
        <NavItem onClick={this.handleClickProcess}>Begin Processing</NavItem>
        : ( this.props.content.shipped || this.props.content.cancel ? <div /> : 
          <NavItem onClick={this.handleClickShipped}>Mark Shipped</NavItem>
        )
      }
      <NavItem onClick={this.handleClickCancel}>Cancel</NavItem>
      </Dropdown>
      </div>
    )

  }
}

const mapState = state => {
  return {orders: state.orders,
          products: state.products
        };
}

const mapDispatch = dispatch => {
  return {
    getOrders: () => {
      dispatch(fetchOrders())
    },
    orderUpate: (id, updates) => {
      dispatch(callOrderUpdate(id, updates))
    }
  };
}

export default connect(mapState, mapDispatch)(OrderEdit);
