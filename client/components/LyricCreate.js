import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricCreate extends Component {
	constructor(props) {
		super(props);
		this.state = { content: "" };
	}

	formSubmit(e) {
		e.preventDefault();
		try {
			this.props.mutate({
				variables: {
					content: this.state.content,
					songId: this.props.id,
				},
			});
			this.setState({ content: "" });
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.formSubmit.bind(this)}>
					<label>Create a Lyric:</label>
					<input
						value={this.state.content}
						onChange={(e) => this.setState({ content: e.target.value })}
					/>
				</form>
			</div>
		);
	}
}

const addLyricMutation = gql`
	mutation AddLyricToSong($content: String, $songId: ID) {
		addLyricToSong(content: $content, songId: $songId) {
			id
			lyrics {
				id
				content
				likes
			}
		}
	}
`;

export default graphql(addLyricMutation)(LyricCreate);
