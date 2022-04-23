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
    const [workerArray, setworkerArray] = useState([]);
    const [memberArray, setmemberArray] = useState([]);

    const onLogoutHandler = (event) => {
        event.preventDefault();
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
    };

    const onWorkerHandler = (event) => {
        event.preventDefault();
        axios.get('/api/workers').then((res) => {
            setworkerArray(res.data);
        });
        setPermissionstate(false);
    };

    const onMemberHandler = (event) => {
        event.preventDefault();
        axios.get('/api/members').then((res) => {
            setmemberArray(res.data);
        });
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
                                    <br></br>
                                    <p>
                                        직원 관리와 고객 관리가 가능합니다.
                                        <br></br>
                                        직원 권한 변경, 고객 번호 추가, 삭제
                                        <br></br>
                                        작업 이후{' '}
                                        <strong style={{color: 'blue'}}>
                                            우측에 버튼
                                        </strong>
                                        을 눌러서{' '}
                                        <strong style={{color: 'blue'}}>
                                            갱신
                                        </strong>
                                        해주세요.
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
                                        onClick={onMemberHandler}>
                                        고객 관리
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {permissionState === false ? (
                <WorkerState workerArray={workerArray}></WorkerState>
            ) : (
                <UserState memberArray={memberArray}></UserState>
            )}
        </div>
    );
}

function WorkerState(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [permission, setPermission] = useState('');

    const onPermissionHandler = (event) => {
        event.preventDefault();
        axios
            .post('/api/member', {
                name: name,
                email: email,
                permission: permission,
            })
            .then(() => {
                alert(
                    '직원의 권한이 수정되었습니다.\n' +
                        '갱신하려면 "직원 관리" 버튼을 다시 누르세요.'
                );
            })
            .catch(() => {
                alert('오류입니다.');
            });
    };

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
                                    {props.workerArray.map((a, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{a.name}</td>
                                                <td>{a.email}</td>
                                                <td>{a.permission}</td>
                                                <td>
                                                    <DropdownButton
                                                        id="dropdown-basic-button"
                                                        title="권한 변경">
                                                        <Dropdown.Item
                                                            onClick={
                                                                onPermissionHandler
                                                            }>
                                                            권한 없음
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={
                                                                onPermissionHandler
                                                            }>
                                                            직원
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={
                                                                onPermissionHandler
                                                            }>
                                                            관리자
                                                        </Dropdown.Item>
                                                    </DropdownButton>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function UserState(props) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };

    const onPhoneHandler = (event) => {
        setPhone(event.currentTarget.value);
    };

    const onAddmemberHandler = (event) => {
        event.preventDefault();
        axios
            .post('/api/member', {
                name: name,
                phone: phone,
            })
            .then(() => {
                alert(
                    '고객의 정보가 정상적으로 추가되었습니다.\n' +
                        '갱신하려면 "고객 관리" 버튼을 다시 누르세요.'
                );
            })
            .catch(() => {
                alert('이미 있는 회원입니다.');
            });
    };

    return (
        <div className="subcontent">
            <div className="container white-box add">
                <div className="member">
                    <div className="d-flex">
                        <div className="col-4">
                            <h2>고객 관리 (번호순 정렬)</h2>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-4">
                            <input
                                className="inputName"
                                type="text"
                                placeholder="이름 입력"
                                value={name}
                                onChange={onNameHandler}
                                style={{
                                    textAlign: 'center',
                                    padding: '8px',
                                }}
                            />
                            <input
                                className="inputPhone"
                                type="text"
                                placeholder="휴대폰 번호 입력"
                                value={phone}
                                onChange={onPhoneHandler}
                                style={{
                                    textAlign: 'center',
                                    padding: '8px',
                                }}
                            />
                            <Button
                                variant="secondary"
                                type="submit"
                                style={{
                                    padding: '7px',
                                    marginBottom: '4px',
                                }}
                                onClick={onAddmemberHandler}>
                                고객 추가
                            </Button>
                        </div>
                    </div>

                    <div className="memberInfo" style={{overflow: 'auto'}}>
                        <div>
                            <Table responsive="lg">
                                <thead style={{textAlign: 'center'}}>
                                    <tr>
                                        <th></th>
                                        <th>고객 이름</th>
                                        <th>휴대폰 번호</th>
                                        <th>정보 삭제</th>
                                    </tr>
                                </thead>
                                <tbody
                                    style={{
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                    }}>
                                    {props.memberArray.map((a, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{a.name}</td>
                                                <td>
                                                    {a.phone.slice(0, [3]) +
                                                        ' - ' +
                                                        a.phone.slice(3, [7]) +
                                                        ' - ' +
                                                        a.phone.slice(7, [11])}
                                                </td>
                                                <td>
                                                    <Button
                                                        variant="outline-primary"
                                                        type="submit"
                                                        style={{
                                                            paddingLeft: '20px',
                                                            paddingRight:
                                                                '20px',
                                                        }}
                                                        value={a.phone}
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            axios
                                                                .post(
                                                                    '/api/member/delete/',
                                                                    {
                                                                        phone: a.phone,
                                                                    }
                                                                )
                                                                .then(() => {
                                                                    alert(
                                                                        '삭제가 성공적으로 진행됐습니다.'
                                                                    );
                                                                })
                                                                .catch(() => {
                                                                    alert(
                                                                        '이미 삭제된 번호입니다. "고객 관리" 버튼을 다시 눌러주세요.'
                                                                    );
                                                                });
                                                        }}>
                                                        정보 삭제
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PermissionPage;
