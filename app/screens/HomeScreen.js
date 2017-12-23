import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, FlatList, StyleSheet, View } from 'react-native';

import StoryListItem from '../components/StoryListItem';

const sampleData = [
  {
    title: 'Apple Plans Combined iPhone, iPad & Mac Apps to Create One User Experience',
    description: 'Apple Inc.’s iPhone and iPad introduced a novel way of interacting with computers: via easy-to-use applications, accessible in the highly curated App Store.',
    url: 'https://www.cnbc.com/2017/12/21/eric-schmidt-is-stepping-down-as-the-executive-chairman-of-alphabet.html',
  },
  {
    title: 'SpaceX’s Falcon Heavy rocket sets up at Cape Canaveral ahead of launch',
    description: 'SpaceX won\'t hit its 2017 target for a test flight of its new, huge Falcon Heavy rocket – but the massive launch craft is now in place at Cape Canaveral in..',
    url: 'https://www.yahoo.com/',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});

class HomeScreen extends React.Component {
  onPressButton(navigate, url) {
    navigate('Article', { url });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button onPress={() => Alert.alert('refresh')} title="Refresh"/>
        <FlatList
          data={sampleData}
          renderItem={
            ({ item }) =>
            <StoryListItem
              title={item.title}
              description={item.description}
              onPressButton={() => this.onPressButton(navigate, item.url)} />
          }
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
