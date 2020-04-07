const fileSelectedEffect = (files, setLoadings) => () => {
  const indicators = [];
  for (const file of files) {
    indicators.push({
      name: file.name,
      status: 'ready',
    })
  }

  setLoadings(indicators);
}

export default fileSelectedEffect;