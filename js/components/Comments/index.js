import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './styles';

const Comment = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.separator}>
      </View>
      <Text>
        {data.body}
      </Text>
      <Text style={styles.author}>
        by {data.author}
      </Text>
      {
        !!data.replies &&
        data.replies.data.children.map((comment) => {
          return <Comment key={comment.data.id} data={comment.data} />
        })
      }
    </View>
  );
};

Comment.propTypes = {

};

export default Comment;