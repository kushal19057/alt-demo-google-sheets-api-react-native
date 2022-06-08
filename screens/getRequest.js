import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';


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
      console.log(responseJson)
    })
  }

  render() {
    if (this.state.isLoading) {
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
    } else {
      return (
      <View style={styles.outputContainer}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text>
              {`${item.id} ${item.name} ${item.score}`}
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
  outputContainer: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
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
