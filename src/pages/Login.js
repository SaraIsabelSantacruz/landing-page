import React, { Component, Fragment } from 'react'
import Header from '../components/componentsHeader/Header'
import Form from '../components/componentsForm/Form'
import { connect } from 'react-redux'
import { onLogin } from '../state/actionsCreators'
import Footer from '../components/componentsFooter/Footer'

class Login extends Component {

	constructor(props){
		super(props)
		this.state = {
			form:{
				check: false,
				nombre: '',
				apellido: '',
				email: '',
				edad: ''
			},
			isDisabled: true
		}
		this.textInput = React.createRef()
		this.toggleContainer = React.createRef()
	}
	
	handleSubmit = event => {
		let { form } = this.state
		event.preventDefault()
		const { handleOnLogin } = this.props
    handleOnLogin(form)
	}

	setInputRef = element => this.input = element

	handleOnChange = element => {
		const target = element.target
		const name = target.name

		this.setState({
      form:{
				...this.state.form,
				[name]: target.type === 'checkbox' ? target.checked : target.value
			}
		}, () => {
			const { form } = this.state
			let valueMail = form.email && form.email
			let regexMail = /^(\w|\.)*@\w{2,}\.\w{2,}$/i.test(valueMail)

			let isValidate = Object.keys(form).map( field => {
				return field !== 'check' ? form[field].length > 0 : form[field]
			}).every(field => field === true)

			let disabled = isValidate && regexMail ? false : true
			this.setState({isDisabled: disabled})
		})
	}

  render() {

    return (
			<Fragment>
				<section className='section-login'>
					<Header pageType={'login'} />
					{this.props.authentication.message === "Login fail" ? <h3 class='alert'>Problemas con el servidor</h3> : null}
					<Form
						setInputRef = {this.setInputRef}
						handleSubmit = {this.handleSubmit}
						handleOnChange = {this.handleOnChange}
						disabled = {this.state.isDisabled}
						formValues = {this.state.form}
					/>
				</section>
				<Footer pageType={'login'}/>
			</Fragment>
    )
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication })

const mapDispatchToProps = dispatch => ({
  handleOnLogin (form) {
    dispatch(onLogin(form))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)