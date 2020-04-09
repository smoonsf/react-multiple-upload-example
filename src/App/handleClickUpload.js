const handleClickUpload = (files, setLoadings) => () => {


  const loadings = [];
  for (const file of files) {
    loadings.push({
      name: file.name,
      status: 'loading',
    })
  }
  setLoadings(loadings);

  for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
    const file = files.item(fileIndex);

    // 업로드 mock
    const delay = Math.floor(Math.random() * (4000 - 2000)) + 2000; // 2~4초 랜덤으로
    const uploadPromise = new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    uploadPromise.then(() => {
      const data = {
        name: file.name,
        status: 'finished',
      };
      setLoadings(loadings => loadings.map((loading, index) => fileIndex === index ? data : loading));
    })
  }
}

export default handleClickUpload;