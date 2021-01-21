/**setting up the reducer */

export const ALL_ASSETS = "ALL_ASSETS";
export const TOP_GAINERS = "TOP_GAINERS";
export const TOP_LOSERS = "TOP_LOSERS";

export const resultReducer = (state, action) => {
	switch (action.type) {
		case ALL_ASSETS:
			//eslint-disable-next-line no-eval
			return [
				{ onAllAssets: true },
				{ onTopGainers: false },
				{ onTopLosers: false },
			];
		case TOP_GAINERS:
			return [
				{ onAllAssets: false },
				{ onTopGainers: true },
				{ onTopLosers: false },
			];
		case TOP_LOSERS:
			return [
				{ onAllAssets: false },
				{ onTopGainers: false },
				{ onTopLosers: true },
			];
		default:
			return state;
	}
};
