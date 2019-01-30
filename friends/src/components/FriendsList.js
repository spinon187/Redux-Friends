import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchList, saveFriend} from '../actions';
import Friend from './Friend';

class FriendsList extends Component {

    state = {
        // newfriend: {
        //     name: '',
        //     age: '',
        //     email: ''
        // }
        name: '',
        age: '',
        email: ''
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

    render(){
        return(
            <div>
                <form className='add-friend' onSubmit={this.saveFriend}>
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

                <div className='friends-list'>
                    {this.props.friends.map((friend, index) => {
                        return <Friend key={index} friend={friend} />;
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

export default connect(mapStateToProps, {fetchList, saveFriend})(FriendsList);