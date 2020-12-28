import moment from 'moment';

class DateTime {
  format(dateTime, formatString) {
    return moment(String(dateTime)).format(formatString);
  }
}

export default new DateTime();
