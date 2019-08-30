import React from 'react'

import * as S from './styled'

const PostItem = () => (
  <S.PostItemLink to="/slug/" >
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>30 de Julho de 2019 • 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>Eu sou um título loremzera</S.PostItemTitle>
        <S.PostItemDescription>
          Algumas razões pra você lorem blablabla e você pode fazer blablabla.
          Há de ser tudo da lei.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem