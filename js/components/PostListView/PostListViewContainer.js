import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import PostListView from './PostListView';
// import realm from './../../config/model'
import styles from './styles.js';

class PostListViewContainer extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.postsList),
    };
  }
  onPressButtonPost(permalink) {
    this.props.navigation.navigate('SinglePost', { permalink })
  }
  onPressButtonImage(permalink) {
    this.props.navigation.navigate('Image', { permalink })
  }
  render() {
    return (
      <PostListView 
        dataSource={this.state.dataSource} 
        onPressButtonPost={(permalink) => this.onPressButtonPost(permalink)}
        onPressButtonImage={(permalink) => this.onPressButtonImage(permalink)}  />
    );
  }
}
export default PostListViewContainer;