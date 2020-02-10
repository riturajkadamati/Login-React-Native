import axios from 'axios';
export const apicall = {
  verifyMobilenumber: number =>
    axios.post('https://qa-api.t2scdn.com/auth/otp', {
      phone: number,
      deviceOS: 'iOS',
      app_name: 'MY-TAKEAWAY'
    }),
  verifyOTPnumber: (mobileno, otp) =>
    axios
      .post('https://qa-api.t2scdn.com/auth/otp/verify', {
        phone: mobileno,
        app_name: 'MY-TAKEAWAY',
        otp: otp
      })
      .then(response => console.log('axios response', response))
      .catch(error => console.log('axios error', error))
};
