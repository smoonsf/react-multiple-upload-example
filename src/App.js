import React, { useState, useCallback, useEffect } from 'react';

import Indicator from './Indicator';
import _handleChangeFileInput from './handleChangeFileInput';
import _handleClickUpload from './handleClickUpload';
import fileSelectedEffect from './fileSelectedEffect';
import loadingEffect from './loadingEffect';


const App = () => {
  const [files, setFiles] = useState([]);
  const [loadings, setLoadings] = useState([]);
  const [finishedAll, setFinishedAll] = useState(false);

  useEffect(fileSelectedEffect(files, setLoadings), [files]);
  useEffect(loadingEffect(loadings, setFinishedAll), [loadings]);

  const handleChangeFileInput = useCallback(_handleChangeFileInput(setFiles), []);
  const handleClickUpload = useCallback(_handleClickUpload(files, setLoadings), [files]);

  return (
    <div className="App">
      <input multiple type="file" onChange={handleChangeFileInput} />
      {loadings.map(indicator => <Indicator key={indicator.name} indicator={indicator} />)}
      <button onClick={handleClickUpload}>업로드</button>
      <h4>전체 완료: {finishedAll.toString()}</h4>
    </div>
  );
}

export default App;
