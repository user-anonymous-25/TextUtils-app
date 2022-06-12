import React, {useState} from 'react'

export default function(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
        const handleLoClick=()=>{
            // console.log("Lowercase was clicked" + text);
            let newText = text.toLowerCase();
            setText(newText);

    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleClearClick=()=>{
        let newText = "";
        setText(newText);
    }
    const handleRevClick=()=>{
        let newText = text.split("").reverse().join("");
        setText(newText);

}
    const [text, setText] = useState("");
    return (
        <>
        <div className="container">
            <h3>{props.heading}</h3>
            <div className="mb-3">
                {/* <label for="myText" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="10"></textarea>
            </div>
            <button className="btn btn-pyimary MX-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-pyimary MX-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-pyimary MX-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-pyimary MX-2" onClick={handleRevClick}>Reverse Text</button>

        </div>
        <div className="container my-3">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Write something above to preview it here"}</p>
        </div>
      </>
    )
}
