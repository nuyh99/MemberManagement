import '../scss/LoginPage.scss';
import React, {useState} from 'react';
import lionimg from '../img/lion.png';
import {Button, Modal, Form} from 'react-bootstrap';
import axios from 'axios';
import RegisterPage from './RegisterPage';

function LoginPage() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password,
        };
    };

    return (
        <div className="App">
            <div className="Jumbotron">
                <form onSubmit={onSubmitHandler}>
                    <p className="title">고객 전화번호 관리 시스템</p>
                    <img src={lionimg} alt="" />
                    <label>
                        <p>아이디</p>
                    </label>
                    <input
                        type="text"
                        placeholder="아이디를 입력하세요."
                        value={Email}
                        onChange={onEmailHandler}
                    />
                    <label>
                        <p>비밀번호</p>
                    </label>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        value={Password}
                        onChange={onPasswordHandler}
                    />
                    <br />

                    <RegisterPage></RegisterPage>

                    <Button variant="outline-warning" type="submit">
                        접속하기
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
