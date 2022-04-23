import '../scss/SearchPage.scss';
import React, {useState} from 'react';
import {Navbar, Container, Button, ListGroup} from 'react-bootstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import author from '../img/author.png';

function SearchPage(props) {
    let history = useHistory();
    const [phone, setPhone] = useState('');
    let [searchState, setSearchstate] = useState('0');
<<<<<<< HEAD
=======
    // let [adminState, setAdminstate] = useState(false);
    // const [permission, setPermission] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
>>>>>>> 9f8c28f94e857109c2f6695f4991a22f9bdcc31e

    const onPhoneHandler = (event) => {
        setPhone(event.currentTarget.value);
    };

    const onSearchHandler = (event) => {
        event.preventDefault();
        axios
<<<<<<< HEAD
            .get('/api/member/', {
                params: {phone: phone},
=======
            .get('http://localhost:8080/api/member/', {
                params: {phone: phone},
                withCredentials: true,
>>>>>>> 9f8c28f94e857109c2f6695f4991a22f9bdcc31e
            })
            .then((res) => {
                if (res.data === true) {
                    setSearchstate('1');
                    alert('조회에 성공하였습니다! 번호가 있습니다.');
                } else if (res.data === false) {
                    setSearchstate('2');
                    alert('조회에 실패하였습니다! 번호가 없습니다.');
                } else {
                    setSearchstate('3');
                    alert('권한이 승인되지 않았습니다. 관리자에게 문의하세요.');
                }
            })
            .catch((error) => {
                alert('사이트 오류');
                setSearchstate(false);
                console.log(error);
            });
    };

    const onLogoutHandler = (event) => {
        event.preventDefault();
<<<<<<< HEAD
        axios.post('/api/logout').then((res) => {
            console.log(res);
            if (res.data == '') {
                props.setisAuthorized(false);
                alert('로그아웃 성공 !');
                history.push('/');
            } else {
                alert('로그아웃 실패 !');
            }
        });
=======
        axios
            .post('http://localhost:8080/api/logout', {withCredentials: true})
            .then((res) => {
                console.log(res);
                if (res.data == '') {
                    props.setisAuthorized(false);
                    alert('로그아웃 성공 !');
                    history.push('/');
                } else {
                    alert('로그아웃 실패 !');
                }
            });
>>>>>>> 9f8c28f94e857109c2f6695f4991a22f9bdcc31e
    };

    const onPermissionHandler = (event) => {
        event.preventDefault();
<<<<<<< HEAD
        axios.get('/api/members').then((res) => {
            if (res.data === '') {
                alert('접근할 수 없습니다. 관리자가 아닙니다.');
            } else {
                props.setisPermission(true);
                history.push('/permission');
            }
        });
=======
        axios
            .get('http://localhost:8080/api/members', {withCredentials: true})
            .then((res) => {
                if (res.data === '') {
                    alert('접근할 수 없습니다. 관리자가 아닙니다.');
                } else {
                    props.setisPermission(true);
                    history.push('/permission');
                }
            });
>>>>>>> 9f8c28f94e857109c2f6695f4991a22f9bdcc31e
    };

    return (
        <div className="searchPage">
            <div className="topNavbar">
                <Navbar bg="primary" variant="dark" style={{padding: '30px'}}>
                    <Container>
                        <Navbar.Brand className="leftbox">
                            고객 조회 시스템
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <div className="rightbox">
                                <Navbar.Text>
                                    환영합니다.
                                    <span className="name">
                                        {' '}
                                        {props.showID}
                                    </span>
                                    님
                                </Navbar.Text>
                                <Button
                                    variant="secondary"
                                    type="submit"
                                    onClick={onLogoutHandler}>
                                    로그아웃
                                </Button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="maincontent">
                <br></br>
                <br></br>
                <div class="container white-box">
                    <div class="row">
                        <div class="col-7">
                            <div class="d-flex" style={{minwidth: '574px'}}>
                                <div class="flex-shrink-0">
                                    <img src={author} />
                                </div>
                                <div class="flex-grow-1 profile">
                                    <h3>고객 조회 시스템입니다.</h3>
                                    <p>
                                        권한이 승인된 직원만 조회 가능합니다.
                                        <br></br>
                                        승인은 관리자에게 문의하세요.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div className="proBtn">
                                    <div class="col-12">
                                        <input
                                            type="text"
                                            placeholder="휴대폰 번호를 입력하세요."
                                            value={phone}
                                            onChange={onPhoneHandler}
                                            style={{
                                                textAlign: 'center',
                                                padding: '8px',
                                            }}
                                        />
                                    </div>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        style={{
                                            marginTop: '8px',
                                        }}
                                        onClick={onSearchHandler}>
                                        조회하기
                                    </Button>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        style={{
                                            marginTop: '8px',
                                            marginLeft: '12px',
                                        }}
                                        onClick={onPermissionHandler}>
                                        관리자 페이지
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {searchState === '1' ? (
                <ResultTrue></ResultTrue>
            ) : searchState === '2' ? (
                <ResultFalse></ResultFalse>
            ) : searchState === '3' ? (
                <ResultError></ResultError>
            ) : (
                <ResultStart></ResultStart>
            )}
        </div>
    );
}

function ResultStart() {
    return (
        <div className="subcontent">
            <div className="container white-box">
                <div className="subtext">
                    <h2> 📘 고객 조회 시스템 </h2>
                    <p>
                        <br></br>
                        휴대폰 번호는 반드시 "-" 없이 숫자만 입력해주세요.
                        <br></br> <br></br>
                        예시. 01012345678 입력 후 조회하기 버튼 누르기
                    </p>
                </div>
            </div>
        </div>
    );
}

function ResultStart() {
    return (
        <div className="subcontent">
            <div className="container white-box">
                <div className="subtext">
<<<<<<< HEAD
                    <h2>🟢 고객의 정보가 있습니다. </h2>
                    <p>
                        <br></br>
                        해당하는 고객의 정보를 서버에서 찾았습니다.
                        <br></br>
=======
                    <h2> 📘 고객 조회 시스템 </h2>
                    <p>
                        <br></br>
                        휴대폰 번호는 반드시 "-" 없이 숫자만 입력해주세요.
                        <br></br> <br></br>
                        예시. 01012345678 입력 후 조회하기 버튼 누르기
                    </p>
                </div>
            </div>
        </div>
    );
}

function ResultTrue() {
    return (
        <div className="subcontent">
            <div className="container white-box">
                <div className="subtext">
                    <h2>🟢 고객의 정보가 있습니다. </h2>
                    <p>
                        <br></br>
                        해당하는 고객의 정보를 서버에서 찾았습니다.
                        <br></br>
>>>>>>> 9f8c28f94e857109c2f6695f4991a22f9bdcc31e
                        만약, 등록되지 않은 고객인데 성공했다고 나온다면
                        <br></br>
                        관리자에게 문의하여 고객 정보를 확인해주세요.
                    </p>
                </div>
            </div>
        </div>
    );
}

function ResultFalse() {
    return (
        <div className="subcontent">
            <div className="container white-box">
                <div className="subtext">
                    <h2>❌ 고객의 정보가 없습니다. </h2>
                    <p>
                        <br></br>
                        해당하는 고객의 정보를 서버에서 찾을 수 없습니다.
                        <br></br>
                        휴대폰 번호를 정확하게 입력했는지 확인해주세요.
                        <br></br>
                        그래도 없다면 관리자에게 문의하여 고객의 번호를
                        추가해주세요.
                    </p>
                </div>
            </div>
        </div>
    );
}

function ResultError() {
    return (
        <div className="subcontent">
            <div className="container white-box">
                <div className="subtext">
                    <h2>❗❗ 권한이 부여되지 않았습니다. </h2>
                    <p>
                        <br></br>
                        직원님에게는 조회할 권한이 없습니다.
                        <br></br>
                        관리자에게 요청하여 권한을 부여받으세요.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;
