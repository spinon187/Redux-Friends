import {
    FAIL,
    FETCHING,
    FETCHED,
    SAVING,
    SAVED,
    UPDATING,
    UPDATED,
    DELETING,
    DELETED    
}from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
  }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                fetchingFriends: true,
                error: ''
            }
        case FETCHED: {
            return {
                ...state,
                friends: action.payload,
                fetchingFriends: false,
                error: ''
            }
        }
        case SAVING:
            return {
                ...state,
                savingFriends: true,
                error: ''
            }
        case SAVED:
            return {
                ...state,
                friends: action.payload,
                savingFriends: false,
                error: ''
            }
        case DELETING:
            return {
                ...state,
                deletingFriends: true,
                error: ''
            }
        case DELETED:
            return {
                ...state,
                friends: action.payload,
                deletingFriends: false,
                error: ''
            }
        case UPDATING:
            return {
                ...state,
                updatingFriends: true,
                error: ''
            }
        case UPDATED:
            return {
                ...state,
                friends: action.payload,
                updatingFriends: false,
                error: ''
            }
        case FAIL:
            return {
                ...state,
                fetchingFriends: false,
                savingFriends: false,
                updatingFriend: false,
                deletingFriend: false,
                error: action.payload
            }
        default:
        return state;
    }
}

export default reducer;