import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import PostListView from './PostListView';
// import realm from './../../config/model'
import styles from './styles.js';

class PostListViewContainer extends Component {
  static navigationOptions = {
    title: 'Info',
    header: ({ navigate, goBack }) => ({
      style: {
        height: 0,
        margin: 0,
        padding: 0,
        paddingLeft: 20,
        paddingRight: 20
      },
    })
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.postsList),
    };
  }
  onPressButton() {

  }
  render() {
    return (
      <PostListView dataSource={this.state.dataSource} />
    );
  }
}

export default PostListViewContainer;