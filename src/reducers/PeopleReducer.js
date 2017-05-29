import people  from  './people.json';

const initialState = {
  people,
};

const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }

}

export default PeopleReducer;
