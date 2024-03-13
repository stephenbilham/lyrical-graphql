import React, { Component } from "react";

class SongCreate extends Component {
	constructor(props) {
		super(props);
		this.state = { title: "" };

		// Bind `this` to the handleSubmit method
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("Form submitted with title:", this.state.title);
		// Reset the form after submission
		this.setState({ title: "" });
	}

	render() {
		return (
			<div>
				<h3>Create a song</h3>
				<form onSubmit={this.handleSubmit}>
					<label>Song title:</label>
					<input
						value={this.state.title}
						onChange={(e) =>
							this.setState({ title: e.currentTarget.value.trim() })
						}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default SongCreate;
