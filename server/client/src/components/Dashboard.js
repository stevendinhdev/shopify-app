import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../actions';
import Sidebar from './Sidebar';
import TourList from './TourList';
import DatesList from './DatesList';
import OrdersList from './OrdersList';
import EmailEdit from './emailForm/EmailEdit';

class Dashboard extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentDidMount() {
    console.log('==== Dashboard mounted!');
    this.props.dispatch(fetchUser());
  }

  render() {
    const { pathname } = this.props.history;
    console.log('Dashboard props', this.props);
    return (
      <div className="dashboard--container">
        <Sidebar history={this.props.history} />
        <Switch>
          <Route path="/edit-email" component={EmailEdit} />
          <Route path="/dates" component={DatesList} />
          <Route path="/orders" component={OrdersList} />
          <Route path="/" component={TourList} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.userAuth });

export default connect(mapStateToProps)(withRouter((Dashboard)));
