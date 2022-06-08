import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Home({ navigation }) {

  const pressHandlerGetRequest = () => {
    navigation.navigate('GetRequest');
  }

  const pressHandlerPostRequest = () => {
    navigation.navigate('PostRequest');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google Sheets API Demo App</Text>
      <Text style={styles.para}>1. Get a record from sheet </Text>
      <Button title='try it out' onPress={pressHandlerGetRequest} />
      <Text style={styles.para}>2. Add a record to sheet</Text>
      <Button title='try it out' onPress={pressHandlerPostRequest} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    textAlign: "center",
    fontSize: 24
  },
  para: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#20232a",
    fontSize: 16
  }
});
