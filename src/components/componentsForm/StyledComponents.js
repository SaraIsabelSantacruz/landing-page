import styled from 'styled-components'
import backgroundNav from '../../assets/backgrounds/Bg_Header.png'

export const SelectWrap = styled.div`
	display: flex;
	margin: 10px auto;
	align-items: center;
	justify-content: flex-start;
	width: 70%;

	select{
		border: none;
    background: #ebf5fdad;
    border-radius: 3px;
    text-align: center;
    padding: 5px;
    outline: none;
    margin: 12px;
	}
`

export const CheckWrap = styled.div`
	display: flex;
	margin: 10px auto;
	align-items: center;
	justify-content: flex-start;
	width: 70%;

	.terminos{
		color: ${props => props.checked ? 'var(--Deep-Black)' : 'var(--gray-dark)'};
	}	
`

export const InputContainer = styled.input`
	margin: 10px auto;
	border: none;
	border-bottom: 1px solid gray;
	height: 30px;
	outline: none;
	font-size: 1rem;
	width: 70%;

	input:focus{
		border-bottom: 1px solid black;
		::placeholder{
			color: var(--Deep-Black);
		}
	}
`

export const FormWrap = styled.form`
	display: flex;
	flex-direction: column;
	width: 35%;
	padding: 20px;
	height: calc(80vh - 100px);
	margin: 0px auto;
	justify-content: center;
	border-radius: 10px;
	border: 2px solid #80808047;
	box-shadow: 1px 5px 20px 2px #80808052;
  background-size: cover;
	background-image: url(${backgroundNav});

	@media (max-width: 680px){
		width: 80%;
    margin: 0 auto;
    padding: 23px;
	}
`

export const FormFade = styled(FormWrap)`
	opacity: ${({ ratio }) => ratio || 1};
	transition: all 500ms;
`

export const ButtonContainer = styled.button`
	font-size: 17px;
	color: ${props => props.disabled ? 'var(--gray-dark)' : 'var(--Deep-Black)'};
	cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}
`