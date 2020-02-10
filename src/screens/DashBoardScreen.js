import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class DashBoardScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> DashBoardScreen </Text>
        <View style={styles.buttonContainer} style={styles.buttonContainer}>
          <Button
            title="Logout"
            style={styles.button}
            onPress={() => navigation.popToTop()}
          />
        </View>
      </View>
    );
  }
}

DashBoardScreen.navigationOptions = {
  title: 'DashBoard'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    justifyContent: 'center',
    fontSize: 18,
    paddingTop: 10
  },
  button: {
    width: 200
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,

    width: '80%'
  }
});
