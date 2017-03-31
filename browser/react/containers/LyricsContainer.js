import React, { Component } from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import axios from 'axios';
import setLyrics from '../action-creators/lyrics';

class LyricsContainer extends Component{
    constructor(props){
        super(props);
        this.state = Object.assign(
            {artistQuery: "", songQuery: ""}, 
            store.getState()
        );
        this.setArtist = this.setArtist.bind(this);
        this.setSong = this.setSong.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
            console.log('State changed!!', store.getState());
            this.setState(store.getState());
        });
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    setArtist(artistQuery){
        this.setState({artistQuery});
    }

    setSong(songQuery){
        this.setState({songQuery});
    }

    handleSubmit(event){

        event.preventDefault();
        if (this.state.artistQuery && this.state.songQuery) {
            axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
            .then((res) => res.data.lyric)
            .then((text) => {
                store.dispatch(setLyrics(text));
            }).catch(() => {
                store.dispatch(setLyrics('SONG NOT FOUND'));
            });
        }
    }

    render(){
        return (
            <Lyrics
                text={this.state.text}
                setArtist={this.setArtist}
                setSong={this.setSong}
                artistQuery={this.state.artistQuery}
                songQuery={this.state.songQuery}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default LyricsContainer;