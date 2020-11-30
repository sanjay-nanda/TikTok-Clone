import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { Video } from "expo-av";
import styles from "./styles";
import { Entypo, FontAwesome, AntDesign, Fontisto } from "@expo/vector-icons";

const Post = (props) => {
  const { post } = props;

  const [pause, setPause] = useState(true);
  const imgUrl = post.vidoeUri;
  const sideIconSize = 27;

  const onPlayPause = () => {
    setPause((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPause}>
        <Video
          source={{
            uri: imgUrl,
          }}
          style={styles.video}
          shouldPlay={pause}
          isLooping
          onError={(e) => console.log(e)}
          resizeMode={"cover"}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <Image
            source={{
              uri: post.user.imageUri,
            }}
            style={styles.profilePictureImage}
          />
          <View style={styles.iconContainer}>
            <AntDesign
              name={"heart"}
              style={{ color: "white" }}
              size={sideIconSize}
            />
            <Text style={styles.statsLabel}>{post.likes}</Text>
          </View>
          <View style={styles.iconContainer}>
            <FontAwesome
              name={"commenting"}
              style={{ color: "white" }}
              size={sideIconSize}
            />
            <Text style={styles.statsLabel}>{post.comments}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Fontisto
              name={"share-a"}
              style={{ color: "white" }}
              size={sideIconSize}
            />
            <Text style={styles.statsLabel}>{post.shares}</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.handle}>@{post.user.username}</Text>
            <Text style={styles.description}>{post.description}</Text>

            <View style={styles.songRow}>
              <Entypo
                name={"beamed-note"}
                style={{ color: "white" }}
                size={24}
              />
              <Text style={styles.songname}>{post.songName}</Text>
            </View>
          </View>

          <Image
            style={styles.songImage}
            source={{
              uri: post.songImage,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Post;
