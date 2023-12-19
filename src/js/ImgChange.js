import React, { useState } from "react";
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';

function ImgChange() {
    // 초기 이미지 경로는 ../img/image1.jpg
    const [imageSrc, setImageSrc] = useState(image1);
    const [isClick, setIsClick] = useState(false);

    // 이미지를 클릭할 때마다 변경될 수 있도록 클릭 함수 만들기
    const handleClick = () => {
        if (imageSrc === image1) {
            setImageSrc(image2);
        } else if (imageSrc === image2) {
            setImageSrc(image3);
        } else {
            setImageSrc(image1);
        }
    }

    return (
        <div>
            <img src={imageSrc} onClick={handleClick} />
        </div>
    );
}

export default ImgChange;