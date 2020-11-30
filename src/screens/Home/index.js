import React from "react";
import { View, Text, StatusBar } from "react-native";
import Post from "../../components/Post";

const post1 = {
  id: "p1",
  user: {
    id: "u1",
    username: "daviddobrik",
    imageUri:
      "https://i.pinimg.com/originals/81/b4/ce/81b4ce081acd5b78d07b9917d3f06ecf.jpg",
  },
  vidoeUri:
    "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
  description: "hahahaha my boy @borat",
  songName: "NF - The search",
  songImage:
    "https://upload.wikimedia.org/wikipedia/en/1/1b/NF_-_The_Search.png",
  likes: 123,
  comments: 12,
  shares: 44,
};

const Home = () => {
  return (
    <View>
      <StatusBar backgroundColor={"red"} />
      <Post post={post1} />
    </View>
  );
};

export default Home;
