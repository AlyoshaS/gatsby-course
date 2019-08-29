import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from './styled'

import Avatar from "../Avatar";

const Profile = () => {
  const {
    site: {
      siteMetadata: {
        title,
        position,
        description
      }
    }
  } = useStaticQuery(graphql `
      query MySiteMetadata {
        site {
          siteMetadata {
            position
            description
            title
          }
        }
      }
    `)

    return (
      <S.ProfileWrapper>
        <S.ProfileLink>
          <Avatar />
          <S.ProfileAuthor>
            {title}
            <S.ProfilePosition>{position}</S.ProfilePosition>
          </S.ProfileAuthor>
        </S.ProfileLink>         
        <S.ProfileDescription>{description}</S.ProfileDescription>
      </S.ProfileWrapper>
    )
}

export default Profile