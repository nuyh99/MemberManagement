# Search_phoneNumber

<br>



## 휴대폰 대리점 고객 전화번호 목록 조회

<hr>

Project name : Search_phoneNumber

<br>

Project execution period : 2022-04-15~

<br>

Project creator : Frontend - 신재윤 / Backend - 황재현

<br>

Use skills

- Frontend : HTML, SCSS, Javascript, React, react-router-dom
- Backend : Java, SpringBoot, MySQL, AWS
(단, 호스팅 환경은 AWS에서 Vultur로 변경 예정)

<br>

API
- axios 통신
- Session 쿠키 인증 방식 (미해결)
- 현재, 쿠키가 Response Cookie 단에서는 보이지만, 크롬 개발자 도구 Application Cookie에서 보이지 않는 문제가 발생. HttpOnly 옵션을 해제해도 지속적
- React 포트번호 3000, Spring Boot 포트번호 8080에서 오는 오류로 파악중. CORS오류를 해결했다고 생각했으나, 완전히 해결되지 않은 것으로 추정

<hr>

### Description

<br>

휴대폰 대리점의 고객 휴대폰 번호가 등록되어 있는지 확인하는 프로젝트 입니다.

<br>

대리점의 사장은 system, admin 계정을 가지며, 대리점 직원들이 회원가입을 하고 나면 사장이 권한을 부여할 수 있습니다. 권한을 부여받은 직원은 번호 목록 조회가 가능하게 됩니다. 그 이후 번호를 입력하면 고객이 대리점에 방문한 적이 있는지 없는지 확인할 수 있습니다.

<br>

서비스는 시작 페이지, 대기 페이지, 번호 조회 페이지, 관리자 전용 페이지로 구성됩니다. 시작 페이지에서 아이디와 비밀번호를 입력하고 로그인을 시도합니다. 이때 권한이 부여되지 않은 사람은 대기 페이지로 이동하게 됩니다. 만약 권한이 부여된 사람이라면 번호 조회 페이지로 이동하여 서비스를 이용할 수 있습니다. 관리자 전용 페이지는 사장만 사용 가능합니다. 관리자 전용 페이지에서 새로운 고객의 번호를 추가할 수도 있고 삭제할 수도 있습니다. 만약 퇴사한 직원의 경우 권한을 없애서 번호 조회 페이지를 볼 수 없게끔 만들 수 있습니다.
