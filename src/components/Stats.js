// <========== IMPORTS ==========>

import React from "react"
import styled from "styled-components"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

// <========== COMPONENT ==========>

const StatsData = [
  {
    icon1: <GiEarthAmerica  />,
    title: "Mais de 100 Destinos",
    desc: "Viaje para mais de 100 lugares únicos",
  },
  {
    icon2: <MdAirplanemodeActive />,
    title: "1 Milhão de Viagens Realizadas",
    desc: "Mais de 1 milhão de viagens completadas ano passado",
  },
  {
    icon3: <MdTimer />,
    title: "O Suporte Mais Rápido",
    desc: "Acesso nosso time de suporte 24/7",
  },
  {
    icon4: <FaMoneyCheck />,
    title: "Melhores Ofertas",
    desc: "Nós oferecemos os melhores preços",
  },
]

function Stats() {
  return (
    <StatsContainer>
      <Heading>Por Que Nos Escolher?</Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
          return (
            <StatsBox key={index}>
              <Icon1>{item.icon1}</Icon1>
              <Icon2>{item.icon2}</Icon2>
              <Icon3>{item.icon3}</Icon3>
              <Icon4>{item.icon4}</Icon4>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </StatsBox>
          )
        })}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats

// <========== STYLES ==========>

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`

const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const Icon1 = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #047bf1;
`
const Icon2 = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #f3a82e;
`
const Icon3 = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #f34f2e;
`
const Icon4 = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #3af576;
`

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`

const Description = styled.p``
