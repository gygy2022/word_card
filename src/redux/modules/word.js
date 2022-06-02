// action 
import {db} from "../../firebase";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";


const LOAD = "word/LOAD";
const CREATE = "word/CREATE";

// 기본값
const cardState = {
  list: [{
    word_title:'단어 타이틀1',
    word_mean:'단어 의미1',
    word_example:'단어 예시1',
  }]
};

// action creactor

export const loadCard = (card_collection) => {
  return {type:LOAD, card_collection};
};

export const createCard = (card) => {
  console.log("액션 실행");
  return {type:CREATE, card};
};

// middlewares

export const loadCardFB = () => {
  return async function (dispatch) {
    const card_data = await getDocs(collection(db, "wordCard"));
    console.log(card_data);

    let card_data_list = [];
    card_data.forEach((doc) => {
      console.log(doc.data());
      card_data_list.push({ id: doc.id, ...doc.data()});
    });
    console.log("card_data_list에 잘 들어갔는지 확인")

    console.log(card_data_list);

    dispatch(loadCard(card_data_list));
  }
}

// 정렬이 id 순으로 되기 때문에 랜덤으로 id 값을 받아오는 현재는 새로고침 시 정렬이 뒤섞인다.
export const addCardFB = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "wordCard"), card);
    // const _card = await getDoc(docRef);
    const card_data = {id : docRef.id, ...card};
    console.log("카드 제대로 나오나");
    console.log(card_data);


    console.log("docRef 잘 나오니?")
    console.log((await getDoc(docRef)).data());

    dispatch(createCard(card_data));
  }

}



// reducer

export default function reducer(state=cardState, action={}) {
  switch (action.type) {
    case "word/LOAD": {
      return {list: action.card_collection};

    }
   

    case "word/CREATE": {
      const new_word_list = [...state.list, action.card];
      console.log(new_word_list);
      return {list: new_word_list};

    }

      

    default:
      return state;
  }
}