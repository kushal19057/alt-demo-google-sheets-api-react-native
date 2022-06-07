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
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.body}>Test out Google Sheets API Demo using 2 routes : </Text>
      <Text style={styles.para}>1. GET record from sheet by id</Text>
      <Button title='go to GET API demo' onPress={pressHandlerGetRequest} />
      <Text style={styles.para}>2. POST record (id, name, score) to sheet</Text>
      <Button title='go to POST API demo' onPress={pressHandlerPostRequest} />
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
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30
  },
  body: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#20232a",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  para: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#20232a",
    fontSize: 16
  }
});
