import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isFocusSearch: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FOCUS_SEARCH_INPUT:
      return state.set('isFocusSearch', true)
    case actionTypes.BLUR_SEARCH_INPUT:
      return state.set('isFocusSearch', false)
    case actionTypes.CHANGE_SEARCH_LIST:
      return state.merge({
        list: fromJS(action.data),
        totalPage: Math.ceil(action.data.length / 10)
      })
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_SEARCH_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
