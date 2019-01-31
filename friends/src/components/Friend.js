import React, {Component} from 'react';

class Friend extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.friend.name,
            age: this.props.friend.age,
            email: this.props.friend.email,
            formClass: 'inactive'
        }
    }

    handleUpdateChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

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

    updateFriend = e => {
        this.props.updateFriend(e, this.props.friend.id, this.state);
        this.setState({
            ...this.state,
            formClass: 'inactive'
        })
    }
    
    render(){return (
        <div className='friend' key=    {this.props.friend.id}>
            <div className='top-box'>
                <div className='friend-box'>
                    <h4>NAME: {this.props.friend.name}</h4>
                    <p>AGE: {this.props.friend.age}</p>
                    <p>EMAIL: {this.props.friend.email}</p>
                </div>
                <div className='button-box'>
                    <button onClick={this.formToggle}>Update Friend</button>
                    <button onClick={e => this.props.deleteFriend(e, this.props.friend.id)}>Delete Friend</button>
                </div>
            </div>
            <form className={`update-form ${this.state.formClass}`} onSubmit={this.updateFriend}>
                    <input
                        onChange={this.handleUpdateChange}
                        placeholder='Name'
                        value={this.state.name}
                        name='name'
                        type='text'
                    />
                    <input
                        onChange={this.handleUpdateChange}
                        placeholder='Age'
                        value={this.state.age}
                        name='age'
                        type='number'
                    />
                    <input
                        onChange={this.handleUpdateChange}
                        placeholder='Email Address'
                        value={this.state.email}
                        name='email'
                        type='email'
                    />
                    <button type='submit'>Submit</button>
            </form>
        </div>
    )}
}

export default Friend;