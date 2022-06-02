// action 


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

export const loadCard = (card) => {
  return {type:LOAD, card};
};

export const createCard = (card) => {
  console.log("액션 실행");
  return {type:CREATE, card};
};

// reducer

export default function reducer(state=cardState, action={}) {
  switch (action.type) {
    case "word/LOAD":
      return state;

    case "word/CREATE": {
      console.log(state.list);
      console.log(action.card);
      const new_word_list = [...state.list, action.card];
      console.log(new_word_list);
      return {list: new_word_list};

    }

      

    default:
      return state;
  }
}