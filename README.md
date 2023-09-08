# 원티드 프리온보딩 3주차 과제 - 개인

## 과제 목표

검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현

## 프로젝트 로컬 실행 방법

```
$ git clone https://github.com/0chae01/searchbar.git
$ npm install
$ npm start
```

## 배포 링크

https://searchbar-0chae01.vercel.app

## 개발 기간

2023.09.05 - 2023.09.08

## 주요 기능

#### 1. 검색어 추천

- 사용자의 편의를 위해 질환명에 대한 검색어 추천 기능을 제공합니다.
- 입력한 검색어에 대응하는 추천 검색어가 없을 경우, 검색어 없음 안내 문구를 출력합니다.

#### 2. 추천 검색어 API 호출별 로컬 캐싱
- 사용자의 입력값이 없거나 한글 음절이 완성되지 않은 경우(즉, 자음 또는 모음만 입력된 경우), 데이터 요청을 하지 않아 불필요한 **네트워크 트래픽을 최소화**합니다.
- 한글의 경우 완전한 음절이 완성되지 않으면(자음/모음만 입력 시) 해당 부분을 **필터링**하여 요청합니다. 
    - ex) `감ㅁ기 → 감기` , `감기ㅁ → 감기`
- 디바운스 기법을 활용하여 500ms 동안 타이핑 멈춤 감지 시에만 데이터를 실제로 요구함으로써 **서버와 클라이언트 간의 부담**을 줄입니다.
- 모든 API 응답은 **로컬에서 캐싱**되며, 이후 동일한 요청이 발생하면 API를 호출하는 대신 캐시에서 데이터를 가져옵니다.
- 캐싱된 데이터는 **24시간이 지나면 만료**됩니다.

#### 3. 키보드만으로 추천 검색어 이동

- 사용자가 추천된 검색어 중 **원하는 항목으로 이동하고 선택**할 수 있도록, 위/아래 방향키(ArrowUp/ArrowDown)와 엔터 키의 조합을 활용할 수 있습니다.

## ⭐️ 과제 요구 사항(README.md 기술)

### 1. 캐싱 구현 방법

- 브라우저의 Cache Storage에 API 요청을 캐싱합니다.
- Cache Storage에 데이터 저장 시 header에 fetch date를 저장합니다.
- 이후 동일한 쿼리로 요청이 발생하면 `match()` 메소드로 비교후 쿼리가 같은 경우 새로 API 요청을 하지 않고, 캐시 데이터를 반환합니다.
- 해당 시점과 fetch date의 시차가 24시간이 넘은 경우 새로 API 요청 결과를 반환합니다.(`console.info(calling api)`)

### 2. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략

- 입력값이 아무것도 없으면 요청하지 않습니다.
- 디바운싱을 활용해 500ms이상 타이핑이 멈추면 데이터를 요청하도록 유도하여 불필요한 요청을 줄였습니다.
- 한글의 경우 완전한 음절이 완성되지 않으면(자음/모음만 입력 시) 해당 부분을 필터링하여 요청합니다. ex) `감ㅁ기 → 감기` , `감기ㅁ → 감기**`

### 3. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- 사용자가 추천된 검색어 중 **원하는 항목으로 이동하고 선택**할 수 있도록, 위/아래 방향키(ArrowUp/ArrowDown)와 엔터 키의 조합을 활용할 수 있습니다.

## 디렉토리 구조

```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┣ 📂constants
 ┣ 📂containers
 ┣ 📂hooks
 ┣ 📂types
 ┣ 📂utils
```

## 사용 기술 스택

### Development

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

### Library

<img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/Axios-DA291C?style=for-the-badge&logo=axios&logoColor=white">  <img src="https://img.shields.io/badge/React Router Dom-3178C6?style=for-the-badge&logo=&logoColor=white">
