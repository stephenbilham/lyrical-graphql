import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link, hashHistory } from "react-router";
import fetchSongsQuery from "../queries/fetchSongs";

class SongCreate extends Component {
	constructor(props) {
		super(props);
		this.state = { title: "" };
	}

	handleSubmit(e) {
		e.preventDefault();
		try {
			// graphQl
			this.props
				.mutate({
					variables: { title: this.state.title.trim() },
					refetchQueries: [{ query: fetchSongsQuery }],
				})
				.then(() => hashHistory.push("/"));

			this.setState({ title: "" });
		} catch (e) {
			console.log(e, "error with handle Submit");
		}
	}

	render() {
		return (
			<div>
				<Link to="/">Back</Link>
				<h3>Create a song</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label>Song title:</label>
					<input
						value={this.state.title}
						onChange={(e) => this.setState({ title: e.currentTarget.value })}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

const mutation = gql`
	mutation AddSong($title: String!) {
		addSong(title: $title) {
			title
		}
	}
`;

export default graphql(mutation)(SongCreate);
