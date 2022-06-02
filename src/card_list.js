import React from "react";
// import {useHistory} from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

const CardList = ( props ) => {
  // const my_lists = useSelector((state) => state.word.list);

  // console.log(my_lists);

  console.log(props.wordData[0].word_title);
  const card_list = props.wordData;
  console.log("카드리스트");
  console.log(card_list);


  return (
    <div className="word_card_wrap">
      {card_list.map((card, index) => {
        return (
          <div className="word_card">
          <h4>단어</h4>
          <span className="card_text" id="word_title">{props.wordData[index].word_title}</span>
          <h4>설명</h4>
          <span className="card_text" id="word_mean">{props.wordData[index].word_mean}</span>
          <h4>예시</h4>
          <span className="card_text" id="word_example">{props.wordData[index].word_example}</span>
        </div>

        )
      })}

       
     </div>
  );
}

export default CardList;