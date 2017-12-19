import React, { Component } from 'react';
import { WebView } from 'react-native';

class StackScreen extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://www.nytimes.com/interactive/2017/12/19/us/ford-chicago-sexual-harassment.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news' }}
      />
    );
  }
}

export default StackScreen;
