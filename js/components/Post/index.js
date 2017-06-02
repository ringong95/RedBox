import React from 'react';
import { ListView, Text, View, Image, TouchableHighlight } from 'react-native';
import { regexImageLinkTest } from './../../helper/regexmatch';
import styles from './styles';

const Post = ({ post, onPressButtonImage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >
        {post.title}
      </Text>
      <View style={styles.textContainer}>
        <Text>
          {post.num_comments} comments
            </Text>
        <Text>
          {post.ups} points
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text>
          {post.author} in {post.subreddit}
        </Text>
      </View>
      {regexImageLinkTest(post.thumbnail) &&
        <TouchableHighlight onPress={() => onPressButtonImage(post.preview.images[0].source.url)}>
          <Image
            style={styles.thumbnail}
            source={{ uri: post.thumbnail }}
          />
        </TouchableHighlight>

      }
    </View>
  );
};

export default Post;