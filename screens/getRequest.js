import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';


class GetRequest extends React.Component {
  constructor() {
    super();
    this.state={
      id:'0',
    }
  }

  submit() {

    var url = 'https://9hvbm2.deta.dev/api/v1/get/' + this.state.id

    fetch(url, {
      method: 'GET',
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
        <Text style={styles.title}>GetRequest Screen</Text>
        <Text style={styles.para}>GET record from sheet by id</Text>

        <TextInput
          placeholder="enter id"
          onChangeText={(text) => {this.setState({ id: text})}}
          style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20}}
        />
        <Button title="submit" onPress={()=>{this.submit()}}/>
      </View>
    )
  }
}

export default GetRequest

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
