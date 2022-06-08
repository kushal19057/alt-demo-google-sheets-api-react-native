import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';


class GetRequest extends React.Component {
  constructor() {
    super();
    this.state={
      id:'0',
      isLoading: true,
      data: []
    }
  }

  submit() {
    var url = 'https://9hvbm2.deta.dev/api/v1/get/' + this.state.id;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        data: responseJson["data"]
      });
    })
    ToastAndroid.show("Fetching Records ...", ToastAndroid.SHORT);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Demo Get Record</Text>
          <Text style={styles.para}>Enter ID of record in input box and press on submit button.</Text>
          <TextInput
            style= {styles.input}
            onChangeText={(text) => {this.setState({ id: text})}}
            placeholder="enter id"
          />
          <Button title="submit" onPress={()=>{this.submit()}}/>
        </View>
      )
    } else {
      return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text style={styles.output}>
              {`Id: ${item.id}\nName: ${item.name}\nScore: ${item.score}`}
            </Text>}
        />
      </View>
    );
    }

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
    textAlign: "center",
    fontSize: 24
  },
  para: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#20232a",
    fontSize: 16,
  },
  output: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#20232a",
    fontSize: 16,
    backgroundColor: "aliceblue",
    padding: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
});
