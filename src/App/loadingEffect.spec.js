import loadingEffect from './loadingEffect';

describe('invalid loadings', () => {
  it('loadings === null', () => {
    const setFinishAll = jest.fn();
    const loadings = null;
    const loadingEffectCallback = loadingEffect(loadings, setFinishAll);

    loadingEffectCallback();

    expect(setFinishAll).toHaveBeenCalledWith(false);
  });
  it('loadings === undefined', () => {
    const setFinishAll = jest.fn();
    const loadings = undefined;
    const loadingEffectCallback = loadingEffect(loadings, setFinishAll);

    loadingEffectCallback();

    expect(setFinishAll).toHaveBeenCalledWith(false);
  });
  it('loadings === number', () => {
    const setFinishAll = jest.fn();
    const loadings = 1245;
    const loadingEffectCallback = loadingEffect(loadings, setFinishAll);

    loadingEffectCallback();

    expect(setFinishAll).toHaveBeenCalledWith(false);
  });
  it('loadings === string', () => {
    const setFinishAll = jest.fn();
    const loadings = '1245';
    const loadingEffectCallback = loadingEffect(loadings, setFinishAll);

    loadingEffectCallback();

    expect(setFinishAll).toHaveBeenCalledWith(false);
  });
});

describe('valid loadings', () => {
  it('loadings is empty', () => {
    const setFinishAll = jest.fn();
    const loadings = [];
    const loadingEffectCallback = loadingEffect(loadings, setFinishAll);

    loadingEffectCallback();

    expect(setFinishAll).toHaveBeenCalledWith(true);
  });
  it('not finished all 1', () => {
    const setFinishAll = jest.fn();
    const loadings = [
      { name: 'file 1', status: 'finished' },
      { name: 'file 2', status: 'loading' },
      { name: 'file 3', status: 'finished' },
      { name: 'file 4', status: 'loading' },
    ];
    const loadingEffectCallback = loadingEffect(loadings, setFinishAll);

    loadingEffectCallback();

    expect(setFinishAll).toHaveBeenCalledWith(false);
  });
  it('not finished all 2', () => {
    const setFinishAll = jest.fn();
    const loadings = [
      { name: 'file 1', status: 'loading' },
      { name: 'file 2', status: 'loading' },
      { name: 'file 3', status: 'loading' },
      { name: 'file 4', status: 'loading' },
    ];
    const loadingEffectCallback = loadingEffect(loadings, setFinishAll);

    loadingEffectCallback();

    expect(setFinishAll).toHaveBeenCalledWith(false);
  });
  it('finished all', () => {
    const setFinishAll = jest.fn();
    const loadings = [
      { name: 'file 1', status: 'finished' },
      { name: 'file 2', status: 'finished' },
      { name: 'file 3', status: 'finished' },
      { name: 'file 4', status: 'finished' },
    ];
    const loadingEffectCallback = loadingEffect(loadings, setFinishAll);

    loadingEffectCallback();

    expect(setFinishAll).toHaveBeenCalledWith(true);
  });
});