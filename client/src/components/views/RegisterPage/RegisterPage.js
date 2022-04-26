import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import Auth from '../../../hoc/auth';
function RegisterPage() {

  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const [Email, setEmail]  = useState("")
  const [Name, setName]  = useState("")
  const [Password, setPassword]  = useState("")
  const [ConfirmPassword, setConfirmPassword]  = useState("")

  //Email 입력 이벤트
  const onEmailHandler = (event) => {

    setEmail(event.currentTarget.value)
  }
  //Name 입력 이벤트
  const onNameHandler = (event) => {

    setName(event.currentTarget.value)
  }
  //Password 입력 이벤트
  const onPasswordHandler = (event) => {

    setPassword(event.currentTarget.value)
  }
  //Password 확인 입력 이벤트
  const onConfirmPasswordHandler = (event) => {

    setConfirmPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();//서브밋할때 화면 깜빡이는거 막는거

    if(Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')

    }

    let body = {
      email: Email,
      name: Name,
      password: Password
    }

    dispatch(registerUser(body))
      .then(response => {
        if(response.payload.success) {
          navigate('/login')
        } else {
          alert('Failed to sign up')
        }
      })
  }


  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type='email' value={Email} onChange={onEmailHandler} />
        
        <label>Name</label>
        <input type='text' value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type='password' value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

        <br />
        <button>
            회원가입
        </button>
      </form>
    </div>  
  )
}

export default Auth(RegisterPage, false)
