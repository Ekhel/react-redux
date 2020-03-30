import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select Song</div>
    }
    return (
        <div>
          <h3>Detail For :</h3>
          <p>
            Title : {song.title}
            <br/>
            Duration : {song.durations}
          </p>
        </div>
    )
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);