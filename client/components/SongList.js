import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongsQuery from "../queries/fetchSongs";
import gql from "graphql-tag";

class SongList extends Component {
	handleDeleteSong(id) {
		this.props
			.mutate({
				variables: { id },
			})
			.then(() => this.props.data.refetch());
	}

	handleRedirect(id) {
		console.log(this.props.route.go("/hello"));
	}

	renderSongs() {
		return this.props.data.songs.map(({ id, title }) => {
			return (
				<li
					key={id}
					className="collection-item"
					onClick={() => this.handleRedirect(id)}>
					{title}
					<i className="material-icons" onClick={() => this.onSongDelete(id)}>
						delete
					</i>
				</li>
			);
		});
	}

	render() {
		if (this.props.data.loading) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<ul className="collection">{this.renderSongs()}</ul>
				<Link to="/songs/new" className="btn-floating btn-large red right">
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
