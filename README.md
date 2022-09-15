# Member Management
휴대폰 대리점에서 고객 명단을 관리하기 위한 웹 서비스

### 주요 기능
* 직원 수 7명 정도의 휴대폰 대리점에서 고객 명단(이름, 전화번호) CRUD
* 인터넷이 되는 어느 곳에서나 휴대폰, 노트북 등으로 접속 가능
* 직원 별 개인 로그인 기능 및 개개인의 직급 별 권한
	* 관리직: 고객 명단 CRUD, 직원들 권한 수정
	* 직원: 고객 명단 읽기만 가능
	* Nothing: 로그인만 가능

### 기술 스택
* Vultr (Cloud Computing)
* mySQL
* Spring Boot
* React
* Cookie 로그인 관리

### DB 구성
* 	Member (고객)
	* String phone (PK)
	* String name
* Worker (직원)
	* String id (PK)
	* String pw
	* String name
	* Permission permission (Master | Worker | Nothing)

### 주요 제작 내용
* Spring Boot, JPA를 사용해서 Restful API 제작
* React 파일을 Spring Boot와 함께 JAR로 빌딩
* Vultr 기본 설정(리눅스 설치 및 방화벽 설정) 및 Git Repository 연결, 백그라운드 실행
![884DBB30-8267-47FB-B996-C6DAF0A5A031](https://user-images.githubusercontent.com/93072571/190405353-181dcda8-9973-4e8f-ad96-f57e83140b82.png)
