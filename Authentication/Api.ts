import axios from 'axios';

export default axios.create({
  baseURL: 'https://parseapi.back4app.com/',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    'X-Parse-Application-Id': 'tvM7RZCf4tjsteUWI6zobtpPjPsG8g0anKojoC9r',
    'X-Parse-REST-API-Key': 'vNdPVgdj6JZ2VdCJNX1a5nqYE7LtTUhEf1v15pD6',
  },
});
