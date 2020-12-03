import React, { useState } from 'react'
import './index.css'
import cloud from './img/cloud_uploade.png'
import axios from 'axios'

const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};
const Main = () => {
    const [resultImage, setResultImage] = useState<any>(undefined)
    const [file, setFile] = useState<File | null>(null);
    const onFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files![0] === null ||e.target.files![0] === undefined ) return;
        setFile(e.target.files![0])
    }
    const onSubmitHandler = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const formData = new FormData();
        if(file === null || file === undefined) return;
        formData.append('image',file!)
        const result = await axios.post('http://localhost:5000'+'/image/upload',formData, config)
        const image = result.data.image.split('\'')[1]
        console.log(image)
        //바이트로 오기 떄문에 다음처럼 처리해주어야한다.
        setResultImage('data:image/jpeg;base64,' + image)
    }
    return(
        <>
            <div className="container-fileloader" >
                {resultImage === undefined ? 
                    <h2>이미지를 넣어주세요</h2> : 
                    <img className="result-image" src={resultImage}
                />}
                <input type="file" name="image-file-input" className="file-image-uploader" onChange={onFileHandler}/>
            </div>
            <button className="btn-submit-image" onClick={onSubmitHandler}>시작!</button>
        </>
    )
}

export default Main