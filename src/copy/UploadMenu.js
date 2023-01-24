/* import './UploadMenu.css'

const UploadMenu = ({ setLogoImg, setBgImg, setCtaImg, setCopyImg }) => {
  
    const handleUpload = (e, setImg) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      }
      reader.readAsDataURL(file);
    }
  
    return (
      <div className="uploadMenu " >
        <button className="button">Upload logo</button>
        <input className="input" type="file" onChange={(e) => handleUpload(e, setLogoImg)} />
        <button className="button">Upload background</button>
        <input className="input" type="file" onChange={(e) => handleUpload(e, setBgImg)} />
        <button className="button">Upload Cta</button>
        <input className="input" type="file" onChange={(e) => handleUpload(e, setCtaImg)} />
        <button className="button">Upload copy</button>
        <input className="input" type="file" onChange={(e) => handleUpload(e, setCopyImg)} />
      </div>
    );
  }

  export default UploadMenu; */