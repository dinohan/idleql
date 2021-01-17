const typeDefs = `
  type Song {
    name: String!
    youtubeID: String!
    title: Boolean!
    thumbnail: String!
    album: String!
  }

  type Release {
    year: String!
    month: String!
    date: String!
  }
  
  type Album {
    name: String!
    img: String!
    type: String!
    release: Release!
  }
  
  type Query {
    albums: [Album]!
    songs(album: String!): [Song]
    song(youtubeID: String!): Song
  }
  `;

export default typeDefs;
