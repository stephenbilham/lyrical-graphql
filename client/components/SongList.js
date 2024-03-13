import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongsQuery from "../queries/fetchSongs";
import gql from "graphql-tag";

class SongList extends Component {
	handleDeleteSong(id) {
		this.props.mutate({
			variables: { id },
			refetchQueries: [{ query: fetchSongsQuery }],
		});
	}

	renderSongs() {
		const { loading, songs } = this.props.data;

		if (loading) {
			return <div>loading...</div>;
		}

		return songs.map((song) => (
			<ul key={song.id} className="collection">
				<li className="collection-item">
					{song.title}
					<i
						className="material-icons"
						onClick={() => this.handleDeleteSong(song.id)}>
						delete
					</i>
				</li>
			</ul>
		));
	}

	render() {
		return (
			<div>
				<h3>Song List</h3>
				{this.renderSongs()}
				<Link to="/songs/new" className="btn-floating btn-large red light">
					<i className="material-icons">add</i>
				</Link>
			</div>
		);
	}
}

const deleteSongMutation = gql`
	mutation DeleteSong($id: ID) {
		deleteSong(id: $id) {
			id
		}
	}
`;

export default graphql(deleteSongMutation)(graphql(fetchSongsQuery)(SongList));
