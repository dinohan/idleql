import { albums, getSong, getSongs } from "./db";

const resolvers = {
  Query: {
    albums: () => albums,
    song: (__, args) => getSong(args.youtubeID),
    songs: (__, args) => getSongs(args.album),
  },
};

export default resolvers;
