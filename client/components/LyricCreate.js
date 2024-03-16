import React, { Component } from "react";
import gql from "graphql-tag";

class LyricCreate extends Component {
	constructor(props) {
		super(props);
		this.state = { userInput: "" };
	}

	formSubmit() {
		// some query to add to mongo
	}

	render() {
		return (
			<div>
				<form onSubmit={() => {}}>
					<label>Create a Lyric:</label>
					<input
						value={this.state.userInput}
						onChange={(e) => this.setState({ userInput: e.target.value })}
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
			}
		}
	}
`;

export default LyricCreate;
