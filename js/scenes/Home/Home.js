/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { fetchPosts } from './../../redux/actions/postsFetchActions';
import LoadingIndicator from './../../components/LoadingIndicator';
import PostListViewContainer from './../../components/PostListView';
class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    if(this.props.loading){
      console.log('works')
    }else{
      console.log('wonotrks')
      
    }
    return (
      (this.props.loading) ?
        <LoadingIndicator />
        :
        <PostListViewContainer
          postsList={this.props.posts} />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Homepage);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


