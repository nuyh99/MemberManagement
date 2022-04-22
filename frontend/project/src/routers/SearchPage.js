import '../scss/SearchPage.scss';
import React, {useState} from 'react';
import {Navbar, Container, Button} from 'react-bootstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import author from '../img/author.png';

function SearchPage(props) {
    let history = useHistory();
    const [phone, setPhone] = useState('');
    let [searchState, setSearchstate] = useState(false);
    // let [adminState, setAdminstate] = useState(false);
    // const [permission, setPermission] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const onPhoneHandler = (event) => {
        setPhone(event.currentTarget.value);
    };

    const onSearchHandler = (event) => {
        event.preventDefault();
        axios
            .get(
                'http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:8080/api/member/',
                {phone: phone}
            )
            .then((res) => {
                if (res.data === true) {
                    setSearchstate(true);
                } else {
                    setSearchstate(false);
                }
            })
            .catch((error) => {
                alert('권한이 승인되지 않았습니다. 관리자에게 문의하세요.');
                setSearchstate(false);
            });
    };

    // const onAdminHandler = (event) => {
    //     event.preventDefault();
    //     axios.post('http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:8080/api/login', {id: email, pw: password})
    //     .then((res)=>{

    //     })
    // }

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
                    history.push(
                        'http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:3000/'
                    );
                } else {
                    alert('로그아웃 실패 !');
                }
            });
    };

    const onPermissionHandler = (event) => {
        event.preventDefault();
        props.setisPermission(true);
        history.push(
            'http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:3000/permission'
        );
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
                                        // onClick={onSearchHandler}
                                        onClick={onPermissionHandler}>
                                        관리자 페이지
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {searchState === true ? (
                <ResultTrue></ResultTrue>
            ) : (
                <ResultFalse></ResultFalse>
            )}

            {/* <PermissionPage></PermissionPage> */}
        </div>
    );
}

function ResultTrue() {
    return (
        <div className="subcontent">
            <div className="container white-box">
                <div className="subtext">
                    <h2>🟢 올바른 접근입니다. </h2>
                    <p>
                        해당하는 고객의 정보를 서버에서 찾았습니다.
                        <br></br>
                        <br></br>
                        만약, 등록되지 않은 고객인데 접근이 올바르게 나온다면
                        <br></br>
                        휴대폰 번호를 정확하게 입력하고, 그래도 안되면
                        <br></br>
                        관리자에게 문의하세요.
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
                    <h2>❌ 잘못된 접근입니다. </h2>
                    <p>
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

// function PermissionPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [permission, setPermission] = useState('');

//     const onEmailHandler = (event) => {
//         setEmail(event.currentTarget.value);
//     };

//     const onPasswordHandler = (event) => {
//         setPassword(event.currentTarget.value);
//     };

//     const onPermissionHandler = (event) => {
//         setPermission(event.currentTarget.value);
//     };

//     const onSubmitHandler = (event) => {
//         event.preventDefault();
//         if (permission)
//             axios
//                 .post(
//                     'http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:8080/api/permission',
//                     {
//                         id: email,
//                         pw: password,
//                         permission: permission,
//                     }
//                 )
//                 .then((res) => {
//                     alert('권한부여 성공!');
//                 });
//     };

//     return (
//         <div className="permissionPage">
//             <form onSubmit={onSubmitHandler}>
//                 <label>
//                     <p>아이디</p>
//                 </label>
//                 <input
//                     type="text"
//                     placeholder="아이디를 입력하세요."
//                     value={email}
//                     onChange={onEmailHandler}
//                 />
//                 <label>
//                     <p>비밀번호</p>
//                 </label>
//                 <input
//                     type="password"
//                     placeholder="비밀번호를 입력하세요."
//                     value={password}
//                     onChange={onPasswordHandler}
//                 />
//                 <input
//                     type="text"
//                     placeholder="권한을 입력하세요"
//                     value={permission}
//                     onChange={onPermissionHandler}
//                 />
//                 <br />

//                 <Button
//                     variant="outline-success"
//                     type="submit"
//                     onClick={onSubmitHandler}>
//                     권한부여
//                 </Button>
//             </form>
//         </div>
//     );
// }

export default SearchPage;
