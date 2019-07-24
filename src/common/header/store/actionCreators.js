import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getFocusSearchInputAction = () => ({
  type: actionTypes.FOCUS_SEARCH_INPUT
})

export const getBlurSearchInputAction = () => ({
  type: actionTypes.BLUR_SEARCH_INPUT
})

export const getMouseEnterSearchAction = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const getMouseLeaveSearchAction = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const getChangeSearchPageAction = (page) => ({
  type: actionTypes.CHANGE_SEARCH_PAGE,
  page
})

const getChangeSearchListAction = (data) => ({
  type: actionTypes.CHANGE_SEARCH_LIST,
  data
})

export const getSearchList = () => {
  return async (dispatch) => {
    let { data } = await axios.get('/api/searchList')
    dispatch(getChangeSearchListAction(data.data))
  }
}
