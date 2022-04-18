import '../scss/LoginPage.scss';
import React, {useState} from 'react';
import lionimg from '../img/lion.png';
import {Button, Modal, Form} from 'react-bootstrap';
import axios from 'axios';
import RegisterPage from './RegisterPage';
import {useHistory} from 'react-router-dom';
import Routes from './Routes';

function LoginPage(props, {setToken}) {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onLoginHandler = (event) => {
        event.preventDefault();
        axios
            .post(
                'http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:8080/api/login',
                {
                    id: email,
                    pw: password,
                }
            )
            .then((res) => {
                if (res.data === 'success') {
                    props.setisAuthorized(true);
                    // sessionStorage.setItem("isAuthorized", "true");
                    alert('로그인 성공 !');
                    props.setshowID(email);
                    history.push('/search');
                } else if (res.data == '') {
                    alert('비밀번호가 틀렸습니다. 다시 입력하세요.');
                } else {
                    alert('없는 회원입니다. 회원가입 해주세요.');
                }
            })
            .catch((error) => {
                alert('없는 회원입니다. 회원가입 해주세요.');
                console.log(error);
            });
    };

    return (
        <div className="App">
            <div className="Jumbotron">
                <form onSubmit={onLoginHandler}>
                    <p className="title">고객 전화번호 관리 시스템</p>
                    <img src={lionimg} alt="" />
                    <label>
                        <p>아이디</p>
                    </label>
                    <input
                        type="text"
                        placeholder="아이디를 입력하세요."
                        value={email}
                        onChange={onEmailHandler}
                    />
                    <label>
                        <p>비밀번호</p>
                    </label>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        value={password}
                        onChange={onPasswordHandler}
                    />
                    <br />

                    <RegisterPage></RegisterPage>

                    <Button
                        variant="outline-warning"
                        type="submit"
                        onClick={onLoginHandler}>
                        접속하기
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
