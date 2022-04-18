import '../scss/PermissionPage.scss';
import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import axios from 'axios';

function PermissionPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [permission, setPermission] = useState('');

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onPermissionHandler = (event) => {
        setPermission(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (permission)
            axios
                .post(
                    'http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:8080/api/permission',
                    {
                        id: email,
                        pw: password,
                        permission: permission,
                    }
                )
                .then((res) => {
                    alert('권한부여 성공!');
                });
    };

    return (
        <div className="permissionPage">
            <form onSubmit={onSubmitHandler}>
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
                <input
                    type="text"
                    placeholder="권한을 입력하세요"
                    value={permission}
                    onChange={onPermissionHandler}
                />
                <br />

                <Button
                    variant="outline-success"
                    type="submit"
                    onClick={onSubmitHandler}>
                    권한부여
                </Button>
            </form>
        </div>
    );
}

export default PermissionPage;
