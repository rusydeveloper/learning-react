const initialCampaignState = {
  items: [],
};

const campaignReducer = (state = initialCampaignState, action) => {
  switch (action.type) {
    case "LOAD_CAMPAIGN":
      return {
        ...state,
        items: action.payload.data,
      };

    case "LOAD_CAMPAIGN_FAILED":
      return "FAILED";
    default:
      return state;
  }
};
export default campaignReducer;
