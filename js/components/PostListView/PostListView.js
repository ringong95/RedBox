import React from 'react';
import { ListView, Text, View, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import { regexImageLinkTest } from './../../helper/regexmatch';
const PostList = ({ dataSource, onPressButton }) => {
  return (
    <ListView
      enableEmptySections={true}
      dataSource={dataSource}
      renderRow={post => (
        <TouchableHighlight onPress={onPressButton}>
          <View>
            <Text>
              {post.data.title}
            </Text>
            <Text>
              {post.data.num_comments} comments
            </Text>
            <Text>
              {post.data.ups}
            </Text>
            <Text>
              {post.data.author} in {post.data.subreddit}
            </Text>
            {regexImageLinkTest(post.data.thumbnail) &&
              <Image
                style={styles.thumbnail}
                source={{ uri: post.data.thumbnail }}
              />
            }
          </View>
        </TouchableHighlight >
      )}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
    />
  );
};

export default PostList;