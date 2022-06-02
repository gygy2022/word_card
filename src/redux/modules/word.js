// action 


const LOAD = "word/LOAD";
const CREATE = "word/CREATE";

// 기본값
const initialState = {
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
  return {type:CREATE, card};
};

// reducer

export default function reducer(state={initialState}, action={}) {
  switch (action.type) {
    case "card/LOAD":
      return state;

    case "card/CREATE": {
      const new_word_list = [...state.list, action.card];
      return {list: new_word_list};

    }

      

    default:
      return state;
  }
}