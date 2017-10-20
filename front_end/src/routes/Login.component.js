import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Link, Wrapper, Text, Break } from './shared/customComponents'
import IconInput from './shared/IconInput.component'

const SocialIcon = styled.i`
	vertical-align: -3px;
	font-size: 32px !important;
`

export default class Login extends Component {
	constructor() {
		super()
		this.state={

		}
	}

	componentDidMount() {

	}

	// Input handle function
	handleChange(field, event) {
		this.setState({ [ field ]: event.target.value })
	}

	render() {
		return (
			<Wrapper>

				<IconInput icon="fa-envelope" placeholder="Email" onChange={({ target }) => console.log(target.value)} />
				<IconInput icon="fa-lock" type="password" placeholder="Password" />
				
				<Text text-align="right" styles="margin-top: -5px; font-size: 15px;">
					<Link to="/">Forgot Password?</Link>
				</Text>

				<Button>Sign In</Button>

				<Text text-align="center">
					Not registered? <Link to="/">Create an Account</Link>
				</Text>

				<Break />
				<Text text-align="center">
					Or sign in with a social account...
				</Text>

				<Button styles="background: #F3501F;" padded>
					<SocialIcon className="fa fa-google-plus-official"></SocialIcon> Google
				</Button>
				<Button styles="background: #3B5997;" padded>
					<SocialIcon className="fa fa-facebook-official"></SocialIcon> Facebook
				</Button>

			</Wrapper>
		)
	}
}