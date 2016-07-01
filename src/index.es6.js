const moment = require('moment-timezone');

export default {
  timezones: () => moment.tz.names(),
  toISO: (exifDate, timeZone = 'America/Los_Angeles') => {
    let result = null;

    if (exifDate) {
      const dateTime = exifDate.split(' ');
      const regex = new RegExp(':', 'g');
      dateTime[0] = dateTime[0].replace(regex, '-');
      const newDateTime = `${dateTime[0]} ${dateTime[1]}`;

      const resultDate = moment.tz(newDateTime, 'YYYY-MM-DD HH:mm:ss', timeZone);

      if (resultDate.isValid()) {
        result = resultDate.toISOString();
      }
    }

    return result;
  }
};
