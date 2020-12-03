import React from 'react'
import './index.css'

interface Props{

}

const Footer = ({} : Props) => {
    return(
        <div className="footer-container">
            <div className="footer-title">
                개발자 정보
            </div>
            
            <div className="footer-information">
                <div className="footer-information-text">
                    <div className="footer-information-text-item">프론트 엔드, 백엔드 : gyoue200125@gmail.com</div>
                    <div className="footer-information-text-item">머신러닝 : 김민수, 신준범</div>
                    <div className="footer-information-text-item">github 링크 : <a href="https://github.com/gyu-young-park/Selfie2Webtoon">Github</a><br/></div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;