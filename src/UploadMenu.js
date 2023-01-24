import './UploadMenu.css'

const UploadMenu = ({ setSelectedOption, setLogoImg, setBgImg, setCtaImg, setCopyImg }) => {
  const handleUpload = (e, setImg) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result);
    }
    reader.readAsDataURL(file);
  }
  const handleSelectChange = (e) => {
    setSelectedOption(Number(e.target.value));
  }

  return (
    <>

      <div className="uploadMenu flex max-w-sm flex-col">
        <label >
          Name:
        </label>

        <select className="select" onChange={handleSelectChange}>
          <option value="1">Creative 1</option>
          <option value="2">Creative 2</option>
        </select>
        
        <div className="upload-buttons flex flex-col">
          <button className="button">Upload logo</button>
          <input className="input" type="file" onChange={(e) => handleUpload(e, setLogoImg)} />
          <button className="button">Upload background</button>
          <input className="input" type="file" onChange={(e) => handleUpload(e, setBgImg)} />
          <button className="button">Upload Cta</button>
          <input className="input" type="file" onChange={(e) => handleUpload(e, setCtaImg)} />
          <button className="button">Upload Copy</button>
          <input className="input" type="file" onChange={(e) => handleUpload(e, setCopyImg)} />
        </div>
      </div>
    </>
  )
}

export default UploadMenu;
