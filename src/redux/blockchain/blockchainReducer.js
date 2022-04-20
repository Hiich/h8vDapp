const initialState = {
  loading: false,
  account: null,
  game: null,
  arena: null,
  nft: null,
  ring: null,
  amulet: null,
  excalibur: null,
  world: null,
  web3: null,
  errorMsg: "",
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "CONNECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        account: action.payload.account,
        game: action.payload.game,
        arena: action.payload.arena,
        nft: action.payload.nft,
        ring: action.payload.ring,
        amulet: action.payload.amulet,
        excalibur: action.payload.excalibur,
        world: action.payload.world,
        web3: action.payload.web3,
      };
    case "CONNECTION_FAILED":
      return {
        ...initialState,
        loading: false,
        errorMsg: action.payload,
      };
    case "UPDATE_ACCOUNT":
      return {
        ...state,
        account: action.payload.account,
      };
    default:
      return state;
  }
};

export default blockchainReducer;
