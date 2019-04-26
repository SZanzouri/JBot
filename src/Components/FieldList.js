import React from "react";
import { FlatList, TextInput, Button, StyleSheet, View } from "react-native";
import Field from "../Components/Field";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";

class FieldList extends React.Component {
  constructor(props) {
    super(props);
    this.text = "";
    this.state = { films: [] };
  }

  _loadFilms() {
    getFilmsFromApiWithSearchedText(this.text).then(data => {
      this.setState({ films: data.results });
    });
  }

  _searchTextInputChanged(text) {
    this.text = text;
  }

  render() {
    console.log("RENDER");
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder="Titre du film"
          onChangeText={text => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._loadFilms()}
        />
        <Button title="Submit" onPress={() => this._loadFilms()} />
        <FlatList
          data={this.state.films}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Field film={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: "column"
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: "gray"
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: "row"
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#666666"
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666"
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: "right",
    fontSize: 14
  }
});

export default FieldList;
