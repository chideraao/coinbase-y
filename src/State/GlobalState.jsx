export const CALCULATE_TOTAL = "CALCULATE_TOTAL";
export const DELETE = "DELETE";
export const CLEAR = "CLEAR";
export const KEY_PRESS = "KEY_PRESS";

export const globalState = (state, action) => {
	switch (action.type) {
		case CALCULATE_TOTAL:
			//eslint-disable-next-line no-eval
			return { ...state, display: (eval(state.result) || "") + "" };
		case DELETE:
			return { ...state, result: state.result.slice(0, -1) };
		case CLEAR:
			return { ...state, result: "", display: "" };
		case KEY_PRESS:
			return { ...state, result: state.result + action.payload };
		default:
			return state;
	}
};
