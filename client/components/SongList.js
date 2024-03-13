import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

class SongList extends Component {
	renderSongs() {
		const { loading, songs } = this.props.data;

		if (loading) {
			return <div>loading...</div>;
		}

		return songs.map((song) => (
			<ul key={song.id} className="collection">
				<li className="collection-item">{song.title}</li>
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

const query = gql`
	query {
		songs {
			id
			title
		}
	}
`;

export default graphql(query)(SongList);
