import Moment from 'moment';

const helpers = {
  getApi: function () {
    return 'http://proj.ruppin.ac.il/bgroup15/prod/api/'
  },
  ReturnDate: function (date) {
    return Moment(date).format('DD/MM/yyyy');
  },
  ReturnHour: function (date) {
    return Moment(date).format('HH:mm');
  }
}

export default helpers;




