import gql from "graphql-tag";

export default gql`
	query GetLyrics($id: ID!) {
		lyric(id: $id) {
			id
			song
			likes
			content
		}
	}
`;
