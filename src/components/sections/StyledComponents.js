import styled from 'styled-components'

export const SectionBenefits = styled.section`
	height: calc(70vh - 90px);
	.container{
		position: relative;
    width: 85%;
    margin: auto;
    top: 50%;
		transform: translateY(-50%);
		border-bottom: 3px solid #80808021;
	}

	svg{
		height: 90px;
	}

	.image-container{
		display: flex;
		justify-content: space-between;
	}

	.text-container{
		text-align: center;
		margin: 20px 0px;
		width: 160px;
	}

	.container h2{
		margin: 25px;
    font-size: 2.2rem;
    text-align: center;
	}

	p{
		font-weight: 600;
	}

	@media (max-width: 680px){
		.image-container{
			flex-direction: column;
			align-items: center;
		}
		svg{
			display: none;
		}
		.text-container{
			margin: 0;
		}
		.container h2{
			margin: 10px auto;
			width: 100%;
		}
	}
`

export const SectionTechnologies = styled.section`
	.container{
		position: relative;
    width: 85%;
    top: 50%;
    display: inline-flex;
    left: 50%;
		transform: translate(-50%, -50%);
		align-items: center;
	}

	.container h2{
		width: 45%;
	}

	@media (max-width: 680px){
		.container{
			flex-direction: column;
		}
		.container h2{
			width: 100%;
		}
		.container svg {
			width: 100%;
		}
	}
`

export const SectionRequirements = styled.section`
	height: calc(70vh - 90px);
	.container{
		position: relative;
    width: 85%;
    top: 50%;
    display: inline-flex;
    left: 50%;
		transform: translate(-50%, -50%);
		align-items: center;
		justify-content: space-around;
	}

	h2{ font-weight: 600; }
	.container-text{
		width: 45%;
	}

	.item{
		display: flex;
		align-items: center;
	}

	p{
		margin-left: 20px;
	}

	@media (max-width: 680px){
		.container{
			flex-direction: column;
			width: 100%;
		}
		.container-text{
			width: 80%;
		}
		
	}
`

export const SectionWoloxers = styled.section`
	.container{
		position: relative;
    width: 100%;
    top: 50%;
    display: inline-flex;
    left: 50%;
		transform: translate(-50%, -50%);
		align-items: center;
		justify-content: space-around;
		background: aliceblue;
	}

	.container h2{
		width: 500px;
		text-align: center;
		margin: 0 auto;
	}

	.container-text{
		margin: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
		left: 50%;
		text-align: center;
		color: var(--white);
		font-weight: 600;
    font-size: 20px;
	}

	a{
		display: block;
		color: var(--white);
	}

	.followers{
		position:relative;
	}

	.twitter-container{
		display: flex;
    align-items: center;
    justify-content: center;
	}

	.twitter{
		width: 50px;
		height: 50px;
	}

	@media(max-width: 680px){
		.container{
			flex-direction: column;
		}
		img{
			height: 240px;
		}
		.container h2{
			width: 100%;
		}
	}
`