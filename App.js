import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [feedback, setFeedback] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // 1-100
  }

  const handleGuess = () => {
    const numericGuess = parseInt(guess);
    if (isNaN(numericGuess)) {
      Alert.alert('Invalid input', 'Please enter a number between 1 and 100');
      return;
    }

    if (numericGuess < randomNumber) {
      setFeedback('Too low!');
    } else if (numericGuess > randomNumber) {
      setFeedback('Too high!');
    } else {
      setFeedback('Correct! You guessed the number!');
    }
  };

  const resetGame = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setFeedback('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number (1-100)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
        placeholder="Enter your guess"
      />
      <Button title="Submit Guess" onPress={handleGuess} />
      <Text style={styles.feedback}>{feedback}</Text>
      {feedback === 'Correct! You guessed the number!' && (
        <Button title="Play Again" onPress={resetGame} color="#4CAF50" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    width: '80%',
    marginBottom: 12,
    borderRadius: 5,
  },
  feedback: {
    marginTop: 16,
    fontSize: 18,
  },
});
