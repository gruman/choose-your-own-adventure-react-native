import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import Button from '../components/Button';
import styles from '../constants/styles';

const Home = ({ route }) => {
  const { story } = route.params;
  const [currentPage, setCurrentPage] = useState(1);
  const [answer, setAnswer] = useState('');

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const answerRiddle = (success, failure) => {
    if (!answer) {
      alert('Please enter an answer');
      return;
    }
    if (answer.toLowerCase() === story.chapters[currentPage].answer.toLowerCase()) {
      goToPage(success);
    } else {
      goToPage(failure);
    }
    setAnswer('');
  };

  const renderButtons = () => {
    if (story.chapters[currentPage].buttons) {
      return story.chapters[currentPage].buttons.map((item, index) => (
        <Button key={index} title={item.text} onPress={() => goToPage(item.room)} />
      ));
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{story.title}</Text>
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.text}>{story.chapters[currentPage].text}</Text>
        </View>
        {story.chapters[currentPage].answer ? (
          <TextInput
            style={styles.input}
            value={answer}
            onChangeText={(text) => setAnswer(text)}
            onSubmitEditing={() =>
              answerRiddle(
                story.chapters[currentPage].success,
                story.chapters[currentPage].failure
              )
            }
            returnKeyType="done"
            autoCapitalize="none"
          />
        ) : (
          <View style={styles.buttonContainer}>{renderButtons()}</View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
