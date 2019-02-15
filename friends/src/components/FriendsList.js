import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchList, saveFriend, deleteFriend, updateFriend} from '../actions';
import Friend from './Friend';
import './FriendsList.css';

class FriendsList extends Component {

    state = {
        name: '',
        age: '',
        email: '',
        formClass: 'inactive' 
    }

    componentDidMount(){
        this.props.fetchList();
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    saveFriend = e => {
        e.preventDefault();
        this.props.saveFriend(this.state);
    }

    deleteFriend = (e, id) => {
        e.preventDefault();
        console.log(id);
        this.props.deleteFriend(id);
    }

    updateFriend = (e, id, x) => {
        e.preventDefault();
        console.log(id, x);
        this.props.updateFriend(id, x);
    }

    formToggle = e => {
        e.preventDefault();
        if(this.state.formClass === 'inactive'){
            this.setState({
                ...this.state,
                formClass: 'active'
            })
        }
        else {
            this.setState({
                ...this.state,
                formClass: 'inactive'
            })
        }
    };

    render(){
        return(
            <div className='big-box'>
                <div className='friend-form'>
                    <button className='friend-form-button' onClick={this.formToggle}>Add New Friend</button>
                    <form className={`add-friend ${this.state.formClass}`} onSubmit={this.saveFriend}>
                        <input
                            onChange={this.handleInputChange}
                            placeholder='Name'
                            value={this.state.name}
                            name='name'
                            type='text'
                        />
                        <input
                            onChange={this.handleInputChange}
                            placeholder='Age'
                            value={this.state.age}
                            name='age'
                            type='number'
                        />
                        <input
                            onChange={this.handleInputChange}
                            placeholder='Email Address'
                            value={this.state.email}
                            name='email'
                            type='email'
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className='friends-list'>
                    {this.props.friends.map(friend => {
                        return <Friend
                            friend={friend}
                            deleteFriend={this.deleteFriend}
                            updateFriend={this.updateFriend}
                            handleInputChange = {this.handleInputChange}
                        />;
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingFriends: state.fetchingFriends,
        friendsFetched: state.friendsFetched,
        friendsSaved: state.friendsSaved,
        savingFriends: state.savingFriends,
        updatingFriend: state.updatingFriend,
        friendUpdated: state.friendUpdated,
        deletingFriend: state.deletingFriend,
        friendDeleted: state.friendDeleted,
        friends: state.friends,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchList, saveFriend, deleteFriend, updateFriend})(FriendsList);