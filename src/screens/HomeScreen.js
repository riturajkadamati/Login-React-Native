import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import {
  getResponse,
  ResponseSuccess,
  ResponseFailure,
  OtpValidate
} from '../../Redux/Actions/Actions';

import DismissKeyBoard from '../components/DismissKeyBoard';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileno: ''
    };
  }

  render() {
    const { navigation } = this.props;
    const { mobileno } = this.state;
    const validate =
      mobileno.length != 11 ? (
        <Text>Mobile no must be 11 characters</Text>
      ) : null;
    return (
      <DismissKeyBoard>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.title}> Enter Mobile: </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter Mobile no"
                value={mobileno}
                onChangeText={newNo => this.setState({ mobileno: newNo })}
              />
            </View>
          </View>
          {validate}
          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              style={styles.button}
              onPress={() => {
                mobileno.length == 11
                  ? navigation.navigate('Otp', { mobileno })
                  : navigation.navigate('Home');
                this.setState({ mobileno: '' });
                this.props.getResponse(mobileno);
              }}
            />
          </View>
        </View>
      </DismissKeyBoard>
    );
  }
}

const mapStateToProps = state => ({
  phoneno: state.root.phoneno
});

const mapDispatchToProps = {
  getResponse,
  ResponseFailure,
  ResponseSuccess,
  OtpValidate
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%'
  },
  inputContainer: {
    width: '80%',
    paddingLeft: 40
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlign: 'center'
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
