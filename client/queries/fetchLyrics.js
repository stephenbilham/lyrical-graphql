import gql from "graphql-tag";

export default gql`
	query GetLyric($id: ID!) {
		lyric(id: $id) {
			id
			song
			likes
			content
		}
	}
`;
