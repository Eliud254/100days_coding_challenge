const fetchUserData = () => {
  return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 3000) + 1000;

      setTimeout(() => {
          const isSuccess = Math.random() < 0.8;

          if (isSuccess) {
              const userData = {
                  id: 1,
                  username: 'john_doe',
                  email: 'john@example.com'
              };
              resolve(userData);
          } else {
              reject('Failed to fetch user data. Please try again later.');
          }
      }, delay);
  });
};

fetchUserData()
  .then(userData => {
      console.log('User data:', userData);
  })
  .catch(error => {
      console.error('Error:', error);
  });
