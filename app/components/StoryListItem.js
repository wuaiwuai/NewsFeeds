import React from 'react';
import PropTypes from 'prop-types';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  title: {
    padding: 16,
    paddingBottom: 0,
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    padding: 16,
    paddingTop: 8,
    fontSize: 13,
  },
});

class StoryListItem extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPressButton}>
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        {/* <Text style={styles.description}>{this.props.description}</Text> */}
      </View>
      </TouchableOpacity>
    );
  }
}

StoryListItem.propTypes = {
  onPressButton: PropTypes.func,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default StoryListItem;
