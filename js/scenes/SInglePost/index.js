import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import LoadingIndicator from './../../components/LoadingIndicator';
import Post from './../../components/Post';
import Comment from './../../components/Comments'
import { fetchPost } from './../../redux/actions/postFetchAction'
class SinglePost extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.navigation.state.params.permalink));
  }
  render() {
    return (
      <View>
        {
          (this.props.loading) ?
            <LoadingIndicator />
            :
            <ScrollView>
              <Post
                post={this.props.currentPost}
                navigation={this.props.navigation} />
              <View>
                {
                  this.props.commentData.map((comment) => {
                    return <Comment key={comment.data.id} data={comment.data} />
                  })
                }
              </View>
            </ScrollView>
        }
      </View>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    currentPost: state.currentPost.postData,
    loading: state.loading,
    commentData: state.currentPost.commentData
  }
}
export default connect(mapStateToProps)(SinglePost);