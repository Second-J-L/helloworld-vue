const ADD_NUM = 'ADD_NUM'

export default {
	//点击进入下一题
	[ADD_NUM](state, num) {
		state.num += num;
	}
}