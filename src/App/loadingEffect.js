const loadingEffect = (loadings, setFinishedAll) => () => {
  const finishAll = !!( // Boolean coercion
    loadings &&
    Array.isArray(loadings) &&
    loadings.reduce((acc, loading) => acc && loading.status === 'finished', true)
  )

  setFinishedAll(finishAll);
}

export default loadingEffect;