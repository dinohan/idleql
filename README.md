# idleql

g-idle graphql server

```js
type Query {
  albums: [Album]!
  songs(album: String!): [Song]
  song(youtubeID: String!): Song
}
type Album {
  name: String!
  img: String!
  type: String!
  release: Release!
}
type Release {
  year: String!
  month: String!
  date: String!
}
type Song {
  name: String!
  youtubeID: String!
  title: Boolean!
  thumbnail: String!
  album: String!
}
```
