import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { 
            title: 'i want it all',
            durations: '3.05' 
        },
        { 
            title: 'all i ask',
            durations: '3.40' 
        },
        { 
            title: 'i want to break free',
            durations: '4.05' 
        },
        { 
            title: 'When i was your man',
            durations: '4.01' 
        }
    ];
};

const selectedSongReducers = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducers
})