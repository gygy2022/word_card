import React from "react";
import {useHistory} from "react-router-dom";
import { useSelector } from "react-redux";

const AddCard = ( {NewCard} ) => {

  const history = useHistory();

  const word_title_ref = React.useRef();
  const word_mean_ref = React.useRef();
  const word_example_ref = React.useRef();


 const NewWord = () => {
    // console.log(word_example_ref.current.value);
    let test = {
      word_title: word_title_ref.current.value,
      word_mean: word_mean_ref.current.value,
      word_example: word_example_ref.current.value,
    }

  
    NewCard(test);

    history.goBack();


  }

  
  


  
  return (
    <div className="add_card_wrap">
       <h1>단어 추가하기</h1>
       <div className="add_card">
         <h2>단어</h2>
         <textarea className="input_text word_title_input" ref={word_title_ref} />
         <h2>설명</h2>
         <textarea className="input_text word_mean_input" ref={word_mean_ref} />
         <h2>예시</h2>
         <textarea className="input_text word_example_input" ref={word_example_ref}/>
         <p id="add_card_button" onClick={NewWord}>추가하기</p>

       </div>
       
     </div>
  );

  

}

export default AddCard;