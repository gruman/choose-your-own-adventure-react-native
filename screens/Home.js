import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import Button from '../components/Button'
import styles from '../constants/styles';

import dark from '../constants/dark'
import alice from '../constants/alice'
import dracula from '../constants/dracula'
import frankenstein from '../constants/frankenstein'
import hyde from '../constants/hyde'

import { useNavigation } from '@react-navigation/native'

const Home = () => {

  const navigation = useNavigation();
  const [stories, setStories] = useState(null);

  useEffect(() => {
    const allStories = [];
    allStories.push(dark);
    allStories.push(alice);
    allStories.push(dracula);
    allStories.push(hyde);
    allStories.push(frankenstein);
    setStories(allStories)
  }, [])
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  const getRandomStory = () => {
    navigation.navigate("Story", {
      story: stories[getRandomInt(0, stories.length)]
    })
  }

  const Item = ({ item, index }) => (
    <TouchableOpacity onPress={(() => goToStory(index))} style={styles.list}>
      <Text style={styles.listText}>{item.title}</Text>
      <Text style={styles.sub}>{item.original}</Text>
    </TouchableOpacity>
  );

  const goToStory = (index) => {
    navigation.navigate("Story", {
      story: stories[index]
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoHolder}>
        <Text style={styles.logo}>React Native</Text>
        <Text style={styles.sub}>Choose your own Adventure</Text>
      </View>
      {
        stories &&

        <FlatList
          data={stories}
          renderItem={({ item, index }) => <Item item={item} index={index} />}
          keyExtractor={item => item.title}
        />
      }
      <Button onPress={getRandomStory} title="Random Story" />
    </View>
  );
};


export default Home;
