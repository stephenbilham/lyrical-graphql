import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

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
		return <div>{this.renderSongs()}</div>;
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
