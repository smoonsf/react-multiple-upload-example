import fileSelectedEffect from './fileSelectedEffect';

describe('invalid files', () => {
  it('files === undefined', () => {
    const setLoadings = jest.fn();
    const fileSelectedEffectCallback = fileSelectedEffect(undefined, setLoadings);

    fileSelectedEffectCallback();

    expect(setLoadings).not.toHaveBeenCalled();
  });
  it('files === null', () => {
    const setLoadings = jest.fn();
    const fileSelectedEffectCallback = fileSelectedEffect(null, setLoadings);

    fileSelectedEffectCallback();

    expect(setLoadings).not.toHaveBeenCalled();
  });
  it('files === number', () => {
    const setLoadings = jest.fn();
    const fileSelectedEffectCallback = fileSelectedEffect(25, setLoadings);

    fileSelectedEffectCallback();

    expect(setLoadings).not.toHaveBeenCalled();
  });
  it('files === string', () => {
    const setLoadings = jest.fn();
    const fileSelectedEffectCallback = fileSelectedEffect('string', setLoadings);

    fileSelectedEffectCallback();

    expect(setLoadings).not.toHaveBeenCalled();
  });
});

describe('valid files', () => {
  it('files are empty', () => {
    const setLoadings = jest.fn();
    const fileSelectedEffectCallback = fileSelectedEffect([], setLoadings);

    fileSelectedEffectCallback();

    expect(setLoadings).toHaveBeenCalledWith([]);
  });
  it('valid fileList', () => {
    const setLoadings = jest.fn();
    const files = [
      new File([], 'file 1'),
      new File([], 'file 2'),
      new File([], 'file 3'),
    ];
    const fileSelectedEffectCallback = fileSelectedEffect(files, setLoadings);

    fileSelectedEffectCallback();

    expect(setLoadings).toHaveBeenCalledWith([
      { name: 'file 1', status: 'ready' },
      { name: 'file 2', status: 'ready' },
      { name: 'file 3', status: 'ready' },
    ]);
  });
});