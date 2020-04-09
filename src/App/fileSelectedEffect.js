const fileSelectedEffect = (files, setLoadings) => () => {
  if (!files || !Array.isArray(files)) return;
  
  const loadings = [];

  for (const file of files) {
    if (file && file.name) {
      loadings.push({
        name: file.name,
        status: 'ready',
      })
    }
  }

  setLoadings(loadings);
}

export default fileSelectedEffect;