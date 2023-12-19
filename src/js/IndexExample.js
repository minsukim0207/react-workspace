import React, {useState} from "react";

function IndexExample() {
    const [inputText, setInputText] = useState('');
    const handleChange = (e) => {
        setInputText(e.target.value);
    }
    // e.target.value
    // e : 사용자가 입력하거나 선택했을 때 어떤 값을 입력하고 선택했는지를 담기 위한 객체에 속함
    // target : 사용자가 작성하거나 입력한 html 입력값을 나타냄
    // value : 사용자가 입력한 값을 가져옴
    return (
        <div>
            <input type="text" value={inputText} onChange={handleChange}/>
            <p>내가 작성한 글 : {inputText}</p>
        </div>
    )
}
export default IndexExample;