import handleClickUpload from './handleClickUpload';

jest.useFakeTimers();

describe('invalid files', () => {
  it('files === undefined', () => {
    const setLoadings = jest.fn();
    const handleClickUploadCallback = handleClickUpload(undefined, setLoadings);

    handleClickUploadCallback();

    expect(setLoadings).not.toHaveBeenCalled();
  });
  it('files === null', () => {
    const setLoadings = jest.fn();
    const handleClickUploadCallback = handleClickUpload(null, setLoadings);

    handleClickUploadCallback();

    expect(setLoadings).not.toHaveBeenCalled();
  });
  it('files === number', () => {
    const setLoadings = jest.fn();
    const handleClickUploadCallback = handleClickUpload(25, setLoadings);

    handleClickUploadCallback();

    expect(setLoadings).not.toHaveBeenCalled();
  });
  it('files === string', () => {
    const setLoadings = jest.fn();
    const handleClickUploadCallback = handleClickUpload('string', setLoadings);

    handleClickUploadCallback();

    expect(setLoadings).not.toHaveBeenCalled();
  });
});
describe('valid files', () => {
  it('files are empty', () => {
    const setLoadings = jest.fn();
    const handleClickUploadCallback = handleClickUpload([], setLoadings);

    handleClickUploadCallback();

    expect(setLoadings).toHaveBeenCalledWith([]);

    jest.runAllTimers();

    expect(setLoadings).toHaveBeenCalledTimes(1);
  });
  it('valid fileList', () => {
    const setLoadings = jest.fn();
    const files = [
      new File([], 'file 1'),
      new File([], 'file 2'),
      new File([], 'file 3'),
    ];
    const handleClickUploadCallback = handleClickUpload(files, setLoadings);

    const apiCalls = handleClickUploadCallback();

    expect(setLoadings).toHaveBeenCalledWith([
      { name: 'file 1', status: 'loading' },
      { name: 'file 2', status: 'loading' },
      { name: 'file 3', status: 'loading' },
    ]);

    jest.runAllTimers();
    
    return apiCalls.then(() => {
      expect(setLoadings).toHaveBeenCalledTimes(4);
    })
  });
});