import * as S from './style'

export default function CoffeeVapor() {
  return (
    <S.Background>
      <S.Cup>
        <S.CupTop>
          <S.CupInside>
            <S.Coffee />
          </S.CupInside>
        </S.CupTop>
        <S.CupHandle />
      </S.Cup>
    </S.Background>
  )
}
