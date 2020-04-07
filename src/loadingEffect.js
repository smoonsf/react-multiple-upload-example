const loadingEffect = (loadings, setFinishedAll) => () => {
  setFinishedAll(loadings.length > 0 && loadings.reduce((acc, loading) => acc && loading.status === 'finished', true));
}

export default loadingEffect;