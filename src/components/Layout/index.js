import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"
import Sidebar from "../Sidebar"

import *  as S from "./styled"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar>
        <Profile />
      </Sidebar>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
