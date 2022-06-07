import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';


class PostRequest extends React.Component {
  constructor() {
    super();
    this.state={
      id:'0',
      name: 'string',
      score: '0',
    }
  }

  submit() {
    let collection = {}
    collection.id = this.state.id
    collection.name = this.state.name
    collection.score = this.state.score

    var url = 'https://9hvbm2.deta.dev/api/v1/post/';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(collection),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(json => console.log('Success:', json))

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>PostRequest Screen</Text>
        <Text style={styles.para}>POST record (id, name, score) to sheet</Text>

        <TextInput
          placeholder="enter id"
          onChangeText={(text) => {this.setState({ id: text})}}
          style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20}}
        />
        <TextInput
          placeholder="enter name"
          onChangeText={(text) => {this.setState({ name: text})}}
          style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20}}
        />
        <TextInput
          placeholder="enter score"
          onChangeText={(text) => {this.setState({ score: text})}}
          style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20}}
        />
        <Button title="submit" onPress={()=>{this.submit()}}/>
      </View>
    )
  }
}

export default PostRequest

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
    fontSize: 30,
    fontWeight: "bold"
  },
  para: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#20232a",
    fontSize: 16
  }
});
