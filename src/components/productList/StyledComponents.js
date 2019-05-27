import styled from 'styled-components'
import backgroundNav from '../../assets/backgrounds/Bg_Header.png'

export const FormWarp = styled.form`
	
	height: 90px;
	display: flex;
	align-items: center;
	justify-content: center;

	input{
		margin: 0;
		width: 40%;
		border: 1px solid black;
		border-radius: 10px;
	}

	@media (max-width: 680px){
		input {width: 90%;}
	}
`

export const ContainerList = styled.section`
	display: flex;
		justify-content: space-around;
    align-items: center;
    background-size: cover;
	  background-image: url(${backgroundNav});
	  @media (max-width: 680px) {
      flex-direction: column;
      justify-content: flex-start;
    }
	}
`

export const CardContainer = styled.div`
	border: 1px solid #00000017;
	height: 300px;
	width: 250px;
	box-shadow: 0px 0px 15px 2px #80808075;
	border-radius: 10px;
	padding: 10px;

	.image-container{
		height: 50%;
    width: 100%;
	}

	.image-container img{
		display: block;
		max-width: 100%;
		height: 100%;
		margin: 0 auto;
	}

	h4{
		border-bottom: 2px solid #e1e1ea;
	}

	@media (max-width: 680px){
		margin: 10px auto;
	}
`