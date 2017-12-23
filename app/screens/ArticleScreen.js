import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, WebView } from 'react-native';

class ArticleScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <WebView
        source={{ uri: params.url }}
      />
    );
  }
}

ArticleScreen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.object,
    }),
  }),
};

export default ArticleScreen;
