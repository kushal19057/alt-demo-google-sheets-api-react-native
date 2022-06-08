import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, ToastAndroid } from 'react-native';


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

    ToastAndroid.show("Record Added ...", ToastAndroid.SHORT);

    this.textInputId.clear()
    this.textInputName.clear()
    this.textInputScore.clear()

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Demo Add Record</Text>
        <Text style={styles.para}>Enter id, name, score of user and press on submit button</Text>

        <TextInput
          placeholder="enter id"
          onChangeText={(text) => {this.setState({ id: text})}}
          style= {styles.input}
          ref={input => { this.textInputId = input }}
        />
        <TextInput
          placeholder="enter name"
          onChangeText={(text) => {this.setState({ name: text})}}
          style={styles.input}
          ref={input => { this.textInputName = input }}
        />
        <TextInput
          placeholder="enter score"
          onChangeText={(text) => {this.setState({ score: text})}}
          style={styles.input}
          ref={input => { this.textInputScore = input }}
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
    textAlign: "center",
    fontSize: 24
  },
  para: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#20232a",
    fontSize: 16
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  }
});
