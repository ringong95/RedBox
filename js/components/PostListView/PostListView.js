import React from 'react';
import { ListView, Text, View, Image } from 'react-native';
import styles from './styles';
import { regexImageLinkTest } from './../../helper/regexmatch';
const PostList = ({ dataSource }) => {
  return (
    <ListView
      enableEmptySections={true}
      dataSource={dataSource}
      renderRow={post => (
        <View>
          <Text>
            {post.data.subreddit}
          </Text>
          <Text>
            {post.data.author}
          </Text>
          {regexImageLinkTest(post.data.thumbnail) &&
            <Image
              style={styles.thumbnail}
              source={{ uri: post.data.thumbnail }}
            />
          }
        </View>)}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
    />
  );
};

export default PostList;