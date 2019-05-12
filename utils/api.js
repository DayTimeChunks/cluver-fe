import moment from 'moment'
import Expo from 'expo';

const { manifest } = Expo.Constants;
const api = manifest.packagerOpts.dev ?
  manifest.debuggerHost.split(':').concat(':3000'): 'productionurl.com';

const url = `http://${api}`;
export function getEndpoint(endpoit) {
  const endPointURL = `${url}/${endpoit}`;
  return fetch(endPointURL)
    .then(res => res.json())
    .then(entries => entries.map(e => ({...e})))
}

export function formatDateTime(dateString) {
  const parsed = moment(new Date(dateString));
  if (!parsed.isValid()){
    return dateString;
  }
  return parsed.format('MMMM Do YYYY, h:mm a')
  // return parsed.format('LLLL'); // Saturday, May 11, 2019 2:45 PM
  // moment().format('llll'); // Sat, May 11, 2019 2:45 PM
  // return parsed.format('LLL');
  // return parsed.format('MMMM Do YYYY, h:mm');
}

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString));
  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('D MMM YYYY');
}

/*
Use something of the sort for push notifications...

export function getCountdownParts(eventDate) {
  const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
  return {
    days: parseInt(duration.as('days')),
    hours: duration.get('hours'),
    minutes: duration.get('minutes'),
    seconds: duration.get('seconds'),
  };
}*/
