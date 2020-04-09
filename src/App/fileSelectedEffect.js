const fileSelectedEffect = (files, setLoadings) => () => {
  const loadings = [];
  for (const file of files) {
    loadings.push({
      name: file.name,
      status: 'ready',
    })
  }

  setLoadings(loadings);
}

export default fileSelectedEffect;