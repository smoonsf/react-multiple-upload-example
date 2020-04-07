const handleClickUpload = (files, setLoadings) => () => {


  const indicators = [];
  for (const file of files) {
    indicators.push({
      name: file.name,
      status: 'loading',
    })
  }

  setLoadings(indicators);

  for (let i = 0; i < files.length; i++) {
    const file = files.item(i);

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
      setLoadings(loadings => loadings.map((loading, _index) => i === _index ? data : loading));
    })
  }
}

export default handleClickUpload;