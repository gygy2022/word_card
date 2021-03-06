import './App.css';
import './card.css';
import React from "react";
import CardList from './card_list';
import AddCard from './add_card';
import {useState, useEffect} from 'react';
import {Route, useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadCardFB } from "./redux/modules/word";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";








function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  
  // useEffect(async() => {
  //   console.log("db데이터");
  //   console.log(db);
    
  //    await addDoc(collection(db,"wordCard"),{
  //     completed:false,
  //     text:"new"
  //   })

 
  // }, []);
 
  React.useEffect( () => {
    dispatch(loadCardFB());
    
  }, []);


  const [wordData,setWordData ] = useState([{
    word_title:'단어 타이틀1',
    word_mean:'단어 의미1',
    word_example:'단어 예시1',
  }]);
  
  console.log(wordData);

  const NewCard = (new_word) => {
    setWordData([
      ...wordData,
      new_word
    ]);

    console.log("들어갔는지확인용콘솔");
    console.log(wordData);
  };

  

  return (
    <>
   
    
    <div className="App">
      <div id="word_card_title" 
      onClick={() => {history.push(`/`) }}>나만의 단어장</div>
    
      
      <Route path="/" exact>
      <CardList wordData={wordData} />
      
      <button id="add_button" onClick={() => {history.push(`/add`) }}>
      <FontAwesomeIcon icon={faPlus} className="plus_icon"/>
      </button>
     
</Route>

<Route path="/add">
<AddCard NewCard={NewCard}/>
</Route>
     
    </div>
    
    </>
  );
}

export default App;
