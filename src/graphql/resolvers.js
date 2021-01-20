import { albums, getAlbum, getSong, getSongs } from "./db";

const resolvers = {
  Query: {
    albums: () => albums,
    album: (__, args) => getAlbum(args.albumName),
    song: (__, args) => getSong(args.youtubeID),
    songs: (__, args) => getSongs(args.album),
  },
};

export default resolvers;
