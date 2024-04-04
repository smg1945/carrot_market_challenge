Challenge goals:

    NextJS 와 Billions API 를 이용하여. 아래 요구사항을 만족하는 웹사이트를 빌드하세요.

요구사항:

    Home Page (/): 억만장자들의 리스트를 만드세요.
    Detail Page (/person/[id]): 한명의 억만장자씩 ID 로 구분하여 보여주세요.
    CSS Modules 혹은 Styled JSX 를 이용하여 예쁘게 꾸며주세요.
    Don't give up.

Notes:

    GET all the billionaries: https://billions-api.nomadcoders.workers.dev/
    GET one billionare by ID: https://billions-api.nomadcoders.workers.dev/person/elon-musk

TA's 힌트:

    각 페이지로 접근하기 위해서는 파일이 pages 폴더 안에 들어가 있어야 합니다. 한명의 억만장자에대한 ID를 가져올땐 동적 라우팅을 사용해야 합니다.
    각 페이지를 이동하거나 ID값을 가져오고 싶을땐 Router를 사용합니다.
    netWorth의 값은 실수로 되어있습니다. 실수를 정수로 변경할땐 Math를 사용합니다.
    Math공식문서
    객체의 값이 undefined이거나 null일 경우 객체의 값에 접근하지않고 undefined를 반환하는 optional chaining을 활용해보세요.
    Optional Chaining 공식문서