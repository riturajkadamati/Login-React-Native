import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {
  getResponse,
  ResponseSuccess,
  ResponseFailure,
  OtpValidate
} from '../../Redux/Actions/Actions';
class OTPScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otpno: ''
    };
  }

  render() {
    const { otpno } = this.state;
    const { navigation } = this.props;
    const mobileno = navigation.getParam('mobileno');
    console.log(otpno);
    console.log(mobileno);
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}> Enter OTP: </Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={otpno}
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter OTP"
              onChangeText={newOtp => this.setState({ otpno: newOtp })}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Submit"
            style={styles.button}
            onPress={() => {
              this.props.OtpValidate(mobileno, otpno);
              this.setState({ otpno: '' });
              navigation.navigate('DashBoard');
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  otpno: state.root.otp
});

const mapDispatchToProps = {
  getResponse,
  ResponseFailure,
  ResponseSuccess,
  OtpValidate
};

OTPScreen.navigationOptions = {
  title: 'OTP Screen'
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
    paddingLeft: 20
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

export default connect(mapStateToProps, mapDispatchToProps)(OTPScreen);
