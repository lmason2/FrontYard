import { HardhatIcon, LogoContainer, LogoLine, LogoText } from "./styled"

export const Logo = () => {
  return (
    <LogoContainer>
      <HardhatIcon src="hardhat.svg"/>
      <LogoLine />
      <LogoText>
        OPPS
      </LogoText>
    </LogoContainer>
  )
}
