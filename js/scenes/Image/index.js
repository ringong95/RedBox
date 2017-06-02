import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './styles';

const ImageScene = ({ navigation }) => {
  console.log(navigation)
  return (
    <View style={styles.container}>
    <Image
            style={styles.image}
            source={{ uri: navigation.state.params.permalink }}
          />
    </View>
  );
};

ImageScene.propTypes = {

};

export default ImageScene;