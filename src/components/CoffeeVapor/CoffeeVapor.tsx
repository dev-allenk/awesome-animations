import * as S from './style'

export default function CoffeeVapor() {
  return (
    <S.Background>
      <S.Content>
        <S.Plate />
        <S.Cup>
          <S.CupTop>
            <S.CupInside>
              <S.Coffee />
            </S.CupInside>
          </S.CupTop>
          <S.CupHandle />
        </S.Cup>
      </S.Content>
    </S.Background>
  )
}
