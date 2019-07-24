import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logImg from '../../static/imgs/logo.png'

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
  position: relative;
`

export const Logo = styled.a`
  width: 100px;
  height: 56px;
  background: url(${logImg});
  background-size: contain;
  position: absolute;
  left: 0;
  top: 0;
`

export const WrapperItem = styled.a`
  float: right;
  color: #969696;
  font-size: 15px;
  display: inline-block;
  padding: 6px 12px;
  margin: 15px 6px 0 10px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  &.write {
    background: #ea6f5a;
    color: #fff;
    border-radius: 20px;
    height: 40px;
    line-height: 24px;
    width: 100px;
    margin: 8px 12px 0;
  }
  &.sign {
    width: 80px;
    height: 38px;
    border-radius: 20px;
    line-height: 24px;
    border: 1px solid rgba(236,97,73,.7);
    color: #ea6f5a;
    background: transparent;
    margin: 9px 5px 0 15px;
  }
`

export const Nav = styled.nav`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled(Link)`
  display: inline-block;
  box-sizing: border-box;
  margin-right: 10px;
  height: 56px;
  line-height: 26px;
  padding: 15px;
  color: #333;
  cursor: pointer;
  text-decoration: none;
  &:hover{
    color: #555;
    background: hsla(0,0%,71%,.1);
  }
  &.active{
    color: #ea6f5a;
    background: none;
  }
`

export const SearchBarArea = styled.div`
  position: relative;
  display: inline-block;
`

export const SearchBar = styled.input`
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  border-radius: 40px;
  font-size: 14px;
  border: 1px solid #eee;
  background: #eee;
  transition: width .5s;
  outline: none;
  &.focused {
    width: 240px;
  }
`

export const SearchSwitchArea = styled.div`
  position: absolute;
  left: 0;
  top: 47px;
  width: 250px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
  border-radius: 4px;
`

export const SearchSwitchAreaTitle = styled.h4`
  font-size: 14px;
  color: #969696;
`

export const SearchSwitchBtn = styled.span`
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
`

export const SearchItemList = styled.div`
  margin-top: 10px;
`

export const SearchItem = styled.a`
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
  cursor: pointer;
  &:hover{
    color: #333;
  }
`
