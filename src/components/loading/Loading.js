import React from 'react'
import styled from 'styled-components'

const SectionWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Loading = Component => {
  return function LoadingComponent({ isLoading, ...props }){
    if (!isLoading) return (<Component {...props} />)
    return (
      <SectionWrap>
        <p>
				  Cargando...
			  </p>
      </SectionWrap>
		)
  }
}

export default Loading