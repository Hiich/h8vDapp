import { act } from "react-dom/test-utils";

const initialState = {
  loading: false,
  potionBalance: 0,
  powerUpBalance: 0,
  stakes: 0,
  stakedTokens: 0,
  rewards: 0,
  error: false,
  errorMsg: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        potionBalance: action.payload.potionBalance,
        powerUpBalance: action.payload.powerUpBalance,
        stakes: action.payload.stakes,
        stakedTokens: action.payload.stakedTokens,
        rewards: action.payload.rewards,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
