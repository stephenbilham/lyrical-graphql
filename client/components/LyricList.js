import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricList extends Component {
	handleClick(id) {
		this.props.mutate({
			variables: {
				id,
			},
		});
	}

	renderLyrics() {
		return this.props.lyrics.map(({ id, content, likes }) => (
			<li key={id} className="collection-item">
				{content}
				<div className="vote-box">
					<i className="material-icons" onClick={() => this.handleClick(id)}>
						thumb_up
					</i>
					{likes}
				</div>
			</li>
		));
	}

	render() {
		console.log(this);
		return <ul className="collection">{this.renderLyrics()}</ul>;
	}
}

const addLikeMutation = gql`
	mutation LikeLyric($id: ID!) {
		likeLyric(id: $id) {
			id
			likes
		}
	}
`;

export default graphql(addLikeMutation)(LyricList);
