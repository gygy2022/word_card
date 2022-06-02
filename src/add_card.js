import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, useEffect} from "react-redux";
import { createCard, addCardFB } from "./redux/modules/word";
import {db} from './firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

const AddCard = ( {NewCard} ) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const word_title_ref = React.useRef();
  const word_mean_ref = React.useRef();
  const word_example_ref = React.useRef();


 const NewWord = () => {
    let newList = {
      word_title: word_title_ref.current.value,
      word_mean: word_mean_ref.current.value,
      word_example: word_example_ref.current.value,
    }

    
    // // NewCard(test);
    // dispatch(createCard(newList));
    dispatch(addCardFB(newList));

    history.goBack();

  

  }

 

  async function addFB() {
    console.log("파이어베이스에 잘 들어갔니?");

      await addDoc(collection(db,"wordCard"),{
      completed:false,
      text:"new"
    })

  };


  
  


  
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