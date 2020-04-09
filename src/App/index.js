import React, { useState, useCallback, useEffect } from 'react';

import Loading from './Loading';
import handleChangeFileInput from './handleChangeFileInput';
import handleClickUpload from './handleClickUpload';
import fileSelectedEffect from './fileSelectedEffect';
import loadingEffect from './loadingEffect';


const App = () => {
  const [files, setFiles] = useState([]);
  const [loadings, setLoadings] = useState([]);
  const [finishedAll, setFinishedAll] = useState(false);

  useEffect(fileSelectedEffect(files, setLoadings), [files]);
  useEffect(loadingEffect(loadings, setFinishedAll), [loadings]);

  const handleChangeFileInputCallback = useCallback(handleChangeFileInput(setFiles), []);
  const handleClickUploadCallback = useCallback(handleClickUpload(files, setLoadings), [files]);

  return (
    <div className="App">
      <input multiple type="file" onChange={handleChangeFileInputCallback} />
      {loadings.map(loading => <Loading key={loading.name} name={loading.name} status={loading.status} />)}
      <button onClick={handleClickUploadCallback}>업로드</button>
      <h4>전체 완료: {finishedAll.toString()}</h4>
    </div>
  );
}

export default App;
