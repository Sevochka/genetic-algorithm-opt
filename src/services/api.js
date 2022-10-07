import axios from 'axios';

axios.defaults.baseURL = import.meta.env.DEV
  ? 'http://localhost:3000'
  : 'https://www.sports.ru/special/special-backend';

async function request(settings) {
  try {
    if (settings.body) {
      const response = await axios[settings.type](settings.path, settings.body);

      return response;
    }
    const response = await axios[settings.type](settings.path);

    return response;
  } catch (err) {
    let message = '';

    try {
      message = JSON.parse(err?.request?.response)?.message;
    } catch (error) {
      console.log(error);
    }

    throw Error(message || err);
  }
}

export async function sendPhoneAndVote(body) {
  return request({ type: 'post', path: 'vote/voteOfTwo', body });
}

export async function checkCode(body) {
  return request({ type: 'post', path: 'phone/verificationCheck', body });
}
