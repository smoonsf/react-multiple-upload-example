const handleClickUpload = (files, setLoadings) => () => {
  if (!files || !Array.isArray(files)) return;

  const loadings = [];

  for (const file of files) {
    loadings.push({
      name: file.name,
      status: 'loading',
    })
  }

  setLoadings(loadings);

  const apiCalls = [];

  for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
    const file = files[fileIndex];

    // file upload mock
    const delay = Math.floor(Math.random() * 1000) + 1000; // mock upload delay 1sec~2sec
    const uploadPromise = new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    const apiCall = uploadPromise.then(() => {
      setLoadings(loadings => {
        const newLoadings = loadings.slice(); // array deep copy

        newLoadings[fileIndex] = {
          name: file.name,
          status: 'finished',
        };

        return newLoadings;
      });
    })

    apiCalls.push(apiCall);
  }

  return Promise.all(apiCalls);
}

export default handleClickUpload;