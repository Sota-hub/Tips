new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    position => resolve(position), 
    err => reject(err));
});

// Shorter ver.
new Promise((resolve, reject) => {
  return navigator.geolocation.getCurrentPosition(resolve, reject);
});

// position => resolve(position)
// when promise resolved, return position = your_place_info
// resolve
// when promise resolved, return resolve itself = your_place_info