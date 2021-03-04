import Moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage'

const helpers = {
  getApi: function () {
    return 'http://proj.ruppin.ac.il/bgroup15/prod/api/'
  },
  ReturnDate: function (date) {
    return Moment(date).format('DD/MM/yyyy');
  },
  ReturnHour: function (date) {
    return Moment(date).format('HH:mm');
  },

  ReturnRandomData: function (data) {
    let num = Math.floor(Math.random() * Math.floor(data.length));
    return data[num];
  },
  ReturnRandomNumber: function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  },

  async SaveToAsyncStorgae(storage_key, value) {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(storage_key, jsonValue);
    } catch (e) {
      console.log("ERROR", e);
    }
  },

  GetFromAsyncStorgae(storage_key) {
    try {
      AsyncStorage.getItem(storage_key, (result) => {
        console.log("GETASYNC", JSON.parse(result));
        return result != null ? JSON.parse(result) : null;
      })

    } catch (e) {
      console.log("ERROR", e);
    }
  }

}

export default helpers;




