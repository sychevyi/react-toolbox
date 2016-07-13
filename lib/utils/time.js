'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var time = {
  getDaysInMonth: function getDaysInMonth(d) {
    var resultDate = this.getFirstDayOfMonth(d);
    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);
    return resultDate.getDate();
  },
  getFirstDayOfMonth: function getFirstDayOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  },
  getFirstWeekDay: function getFirstWeekDay(d) {
    var day = this.getFirstDayOfMonth(d).getDay();
    if (day == 0) {
      return 6;
    } else {
      return day - 1;
    }
  },
  getTimeMode: function getTimeMode(d) {
    return d.getHours() >= 12 ? 'pm' : 'am';
  },
  getFullMonth: function getFullMonth(d) {
    var month = d.getMonth();
    switch (month) {
      default:
        return 'Unknown';
      case 0:
        return 'Январь';
      case 1:
        return 'Февраль';
      case 2:
        return 'Март';
      case 3:
        return 'Апрель';
      case 4:
        return 'Май';
      case 5:
        return 'Июнь';
      case 6:
        return 'Июль';
      case 7:
        return 'Август';
      case 8:
        return 'Сентябрь';
      case 9:
        return 'Октябрь';
      case 10:
        return 'Ноябрь';
      case 11:
        return 'Декабрь';
    }
  },
  getShortMonth: function getShortMonth(d) {
    var month = d.getMonth();
    switch (month) {
      default:
        return 'Unknown';
      case 0:
        return 'Январь';
      case 1:
        return 'Февраль';
      case 2:
        return 'Март';
      case 3:
        return 'Апрель';
      case 4:
        return 'Май';
      case 5:
        return 'Июнь';
      case 6:
        return 'Июль';
      case 7:
        return 'Август';
      case 8:
        return 'Сентябрь';
      case 9:
        return 'Октябрь';
      case 10:
        return 'Ноябрь';
      case 11:
        return 'Декабрь';
    }
  },
  getFullDayOfWeek: function getFullDayOfWeek(day) {
    switch (day) {
      default:
        return 'Unknown';
      case 0:
        return 'Понедельник';
      case 1:
        return 'Вторник';
      case 2:
        return 'Среда';
      case 3:
        return 'Четвер';
      case 4:
        return 'Пятница';
      case 5:
        return 'Суббота';
      case 6:
        return 'Воскресенье';
    }
  },
  getShortDayOfWeek: function getShortDayOfWeek(day) {
    switch (day) {
      default:
        return 'Unknown';
      case 0:
        return 'Пн';
      case 1:
        return 'Вт';
      case 2:
        return 'Ср';
      case 3:
        return 'Чт';
      case 4:
        return 'Пт';
      case 5:
        return 'Сб';
      case 6:
        return 'Вс';
    }
  },
  clone: function clone(d) {
    return new Date(d.getTime());
  },
  cloneAsDate: function cloneAsDate(d) {
    var clonedDate = this.clone(d);
    clonedDate.setHours(0, 0, 0, 0);
    return clonedDate;
  },
  isDateObject: function isDateObject(d) {
    return d instanceof Date;
  },
  addDays: function addDays(d, days) {
    var newDate = this.clone(d);
    newDate.setDate(d.getDate() + days);
    return newDate;
  },
  addMonths: function addMonths(d, months) {
    var newDate = this.clone(d);
    newDate.setMonth(d.getMonth() + months, 1);
    return newDate;
  },
  addYears: function addYears(d, years) {
    var newDate = this.clone(d);
    newDate.setFullYear(d.getFullYear() + years);
    return newDate;
  },
  setDay: function setDay(d, day) {
    var newDate = this.clone(d);
    newDate.setDate(day);
    return newDate;
  },
  setMonth: function setMonth(d, month) {
    var newDate = this.clone(d);
    newDate.setMonth(month);
    return newDate;
  },
  setYear: function setYear(d, year) {
    var newDate = this.clone(d);
    newDate.setFullYear(year);
    return newDate;
  },
  setHours: function setHours(d, hours) {
    var newDate = this.clone(d);
    newDate.setHours(hours);
    return newDate;
  },
  setMinutes: function setMinutes(d, minutes) {
    var newDate = this.clone(d);
    newDate.setMinutes(minutes);
    return newDate;
  },
  toggleTimeMode: function toggleTimeMode(d) {
    var newDate = this.clone(d);
    var hours = newDate.getHours();

    newDate.setHours(hours - (hours > 12 ? -12 : 12));
    return newDate;
  },
  formatTime: function formatTime(date, format) {
    var hours = date.getHours();
    var mins = date.getMinutes().toString();

    if (format === 'ampm') {
      var isAM = hours < 12;
      var additional = isAM ? ' am' : ' pm';

      hours = hours % 12;
      hours = (hours || 12).toString();
      if (mins.length < 2) mins = '0' + mins;

      return hours + (mins === '00' ? '' : ':' + mins) + additional;
    }

    hours = hours.toString();
    if (hours.length < 2) hours = '0' + hours;
    if (mins.length < 2) mins = '0' + mins;
    return hours + ':' + mins;
  },
  dateOutOfRange: function dateOutOfRange(date, minDate, maxDate) {
    return minDate && !(date >= minDate) || maxDate && !(date <= maxDate);
  },
  formatDate: function formatDate(date) {
    return date.getDate() + ' ' + time.getFullMonth(date) + ' ' + date.getFullYear();
  }
};

exports.default = time;