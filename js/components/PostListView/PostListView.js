import React from 'react';
import { ListView, Text, View, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import { regexImageLinkTest } from './../../helper/regexmatch';
import Post from './../Post'
const PostList = ({ dataSource, onPressButtonPost, onPressButtonImage }) => {
  return (
    <ListView
      enableEmptySections={true}
      dataSource={dataSource}
      renderRow={post => (
        <TouchableHighlight onPress={() => onPressButtonPost(post.data.permalink)}>
          <View>
            <Post post={post.data} onPressButtonImage={onPressButtonImage} />
          </View>
        </TouchableHighlight>
      )}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
    />
  );
};

export default PostList;