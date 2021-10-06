import data from '../data';

const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

export default apiCall;
