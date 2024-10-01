'use client';

import { gql, useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;
export default function Page() {
  // data를 바로 사용하면 Error가 뜸 이유는 useQuery는 비동기적으로 데이터를 요청하기 때문
  // 데이터 요청 (data === undefined), data요소 제외 화면에 보여줌  => 데이터 받음 => 화면에 보여줌 data를 사용하는 부분을 조건부 랜더링 해줌, 결론적으로 화면을 2번 그림
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(params.id),
    },
  });
  console.log(data);

  console.log(params);

  return (
    <>
      <h1>{params.id}번 게시글</h1>
      <p>작성자: {data && data.fetchBoard?.writer}</p>
      <p>제목: {data ? data.fetchBoard?.title : '데이터 가져오는 중...'}</p>
      <p>내용: {data?.fetchBoard?.contents}</p>
    </>
  );
}

//  Static Routing을 사용하는 이유
// 1. 성능 최적화
// URL 경로가 미리 정의되어 있어 서버가 요청을 즉시 처리할 수 있으며, 빌드 타임에 생성된 페이지는 빠른 로딩 속도를 제공합
// 2. 보안 강화
// 동적 입력이 없기 때문에 URL 변조나 해킹의 위험이 줄어들어 보안이 강화
// 3. 예측 가능성
// 고정된 경로로 인해 경로 관리와 유지보수가 간단하고, 경로를 쉽게 예측할 수 있음
// 4. SEO에 유리
// 정적 페이지는 검색 엔진 크롤러가 쉽게 크롤링할 수 있어, 검색 엔진 최적화(SEO)에 유리
// Static routing은 단순하면서도 효율적인 경로 설정 방법으로, 성능과 보안, SEO 측면에서 이점을 제공
