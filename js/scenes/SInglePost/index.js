import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import LoadingIndicator from './../../components/LoadingIndicator';
import Post from './../../components/Post';
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
            <Post
              postsList={this.props.posts}
              navigation={this.props.navigation} />

        }
      </View>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}
export default connect(mapStateToProps)(SinglePost);