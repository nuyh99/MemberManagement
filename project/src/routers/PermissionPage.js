import '../scss/PermissionPage.scss';
import React, {useState} from 'react';
import {
    Navbar,
    Container,
    Button,
    Table,
    Dropdown,
    DropdownButton,
} from 'react-bootstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import author from '../img/author.png';

function PermissionPage(props) {
    let history = useHistory();
    let [permissionState, setPermissionstate] = useState(false);

    const onLogoutHandler = (event) => {
        event.preventDefault();
        axios
            .post(
                'http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:8080/api/logout'
            )
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
    };

    const onWorkerHandler = (event) => {
        event.preventDefault();
        setPermissionstate(false);
    };

    const onUserHandler = (event) => {
        event.preventDefault();
        setPermissionstate(true);
    };

    return (
        <div className="permissionPage">
            <div className="topNavbar">
                <Navbar bg="primary" variant="dark" style={{padding: '30px'}}>
                    <Container>
                        <Navbar.Brand className="leftbox">
                            관리자 페이지
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <div className="rightbox">
                                <Navbar.Text>
                                    환영합니다.
                                    <span className="name">관리자</span>님
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
                                    <h3>관리자 페이지입니다.</h3>
                                    <p>
                                        직원 관리와 회원 관리가 가능합니다.
                                        <br></br>
                                        사용 후에 반드시 로그아웃 해주세요.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div className="proBtn">
                                    <div class="col-12">
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            style={{
                                                marginTop: '8px',
                                                paddingLeft: '40px',
                                                paddingRight: '40px',
                                            }}
                                            onClick={onWorkerHandler}>
                                            직원 관리
                                        </Button>
                                    </div>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        style={{
                                            marginTop: '8px',
                                            paddingLeft: '40px',
                                            paddingRight: '40px',
                                        }}
                                        onClick={onUserHandler}>
                                        회원 관리
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {permissionState === false ? (
                <WorkerState></WorkerState>
            ) : (
                <UserState></UserState>
            )}
        </div>
    );
}

function WorkerState() {
    return (
        <div className="subcontent">
            <div className="container white-box add">
                <div className="worker">
                    <h2>직원 관리</h2>
                    <div className="workerInfo" style={{overflow: 'auto'}}>
                        <div>
                            <Table responsive="lg">
                                <thead style={{textAlign: 'center'}}>
                                    <tr>
                                        <th></th>
                                        <th>직원 이름</th>
                                        <th>직원 아이디</th>
                                        <th>현재 권한</th>
                                        <th>등급 변경</th>
                                    </tr>
                                </thead>
                                <tbody
                                    style={{
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                    }}>
                                    <tr>
                                        <td>1</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>
                                            <DropdownButton
                                                id="dropdown-basic-button"
                                                title="권한 변경">
                                                <Dropdown.Item href="#/action-1">
                                                    권한 없음
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">
                                                    직원
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">
                                                    관리자
                                                </Dropdown.Item>
                                            </DropdownButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>
                                            <DropdownButton
                                                id="dropdown-basic-button"
                                                title="권한 변경">
                                                <Dropdown.Item href="#/action-1">
                                                    권한 없음
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">
                                                    직원
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">
                                                    관리자
                                                </Dropdown.Item>
                                            </DropdownButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>
                                            <DropdownButton
                                                id="dropdown-basic-button"
                                                title="권한 변경">
                                                <Dropdown.Item href="#/action-1">
                                                    권한 없음
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">
                                                    직원
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">
                                                    관리자
                                                </Dropdown.Item>
                                            </DropdownButton>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function UserState() {
    return (
        <div className="subcontent">
            <div className="container white-box add">
                <div className="user">
                    <h2>회원 관리</h2>
                    <div className="userInfo" style={{overflow: 'auto'}}></div>
                </div>
            </div>
        </div>
    );
}

export default PermissionPage;
