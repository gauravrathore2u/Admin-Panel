import './new.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';

function New({input, title}) {

  const [file, setFile] = useState("");

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>A{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form >
                <div className="formInput">
                  <label htmlFor='file'>
                  Image: <DriveFolderUploadIcon className='icon'/>
                  </label>
                  <input id='file' type="file" onChange={(e)=>setFile(e.target.files[0])} style={{display:'none'}}/>
                </div>
                {input.map((inpt)=>(
                  <div className="formInput" key={inpt.id}>
                  <label htmlFor={inpt.id}>{inpt.label}</label>
                  <input id={inpt.id} type={inpt.type} placeholder={inpt.placeholder} />
                </div>
                ))}
                <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
