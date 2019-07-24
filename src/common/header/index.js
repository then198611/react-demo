import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { HeaderWrapper, Logo, WrapperItem, Nav, NavItem, SearchBarArea, SearchBar, SearchSwitchArea, SearchSwitchAreaTitle, SearchSwitchBtn, SearchItemList, SearchItem } from './style'

class Header extends React.Component {

  getSearchArea () {
    const { isFocusSearch, mouseIn, list, page, totalPage, mouseEnterSearchArea, mouseLeaveSearchArea, changeSearchPage } = this.props
    let itemList = []
    let perPage = 10
    if (list && list.size) {
      // 0~9 10~11
      let offset = (page - 1) * perPage
      itemList = list.slice(offset, offset + perPage)
    }
    if (isFocusSearch || mouseIn) {
      return (
        <SearchSwitchArea onMouseEnter={mouseEnterSearchArea} onMouseLeave={mouseLeaveSearchArea}>
          <SearchSwitchAreaTitle>
            热门搜索
            <SearchSwitchBtn onClick={() => changeSearchPage(page, totalPage)}>换一批</SearchSwitchBtn>
            <SearchItemList>
              {
                itemList.map((item) => {
                  return <SearchItem key={item}>{item}</SearchItem>
                })
              }
            </SearchItemList>
          </SearchSwitchAreaTitle>
        </SearchSwitchArea>
      )
    } else {
      return null
    }
  }

  render () {
    let { list, isFocusSearch, focusSearchInput, BlurSearchInput } = this.props
    return (
      <HeaderWrapper>
      <Logo href='/'/>
      <WrapperItem className="write">写文章</WrapperItem>
    <WrapperItem className="sign">注册</WrapperItem>
    <WrapperItem>登录</WrapperItem>
    <WrapperItem>Aa</WrapperItem>
    <Nav>
    <NavItem className="active" to="/">首页</NavItem>
    <NavItem to="/detail">详情</NavItem>
    <SearchBarArea>
    <SearchBar placeholder="搜索" className={isFocusSearch ? 'focused' : ''}
    onFocus={() => focusSearchInput(list)} onBlur={BlurSearchInput}/>
    { this.getSearchArea() }
  </SearchBarArea>
  </Nav>
  </HeaderWrapper>
    )
  }
}

const initMapStateToProps = (state) => {
  // let { isFocusSearch } = state.header
  return {
    isFocusSearch: state.getIn(['header', 'isFocusSearch']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const initMapDispatchToProps = (dispatch) => {
  return {
    focusSearchInput (list) {
      !list.size && dispatch(actionCreators.getSearchList())
      dispatch(actionCreators.getFocusSearchInputAction())
    },
    BlurSearchInput () {
      dispatch(actionCreators.getBlurSearchInputAction())
    },
    mouseEnterSearchArea () {
      dispatch(actionCreators.getMouseEnterSearchAction())
    },
    mouseLeaveSearchArea () {
      dispatch(actionCreators.getMouseLeaveSearchAction())
    },
    changeSearchPage (page, totalPage) {
      dispatch(actionCreators.getChangeSearchPageAction(page + 1 < 5 ? page + 1 : 1))
    }
  }
}

export default connect(initMapStateToProps, initMapDispatchToProps)(Header)
