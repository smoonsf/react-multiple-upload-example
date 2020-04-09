const handleChangeFileInput = (setFiles) => (e) => {
  const files = e.target.files;
  setFiles([...files]);
}

export default handleChangeFileInput;