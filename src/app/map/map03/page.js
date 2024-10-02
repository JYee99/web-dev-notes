'use client';

import { gql, useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';
import { Fragment } from 'react';

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;
export default function Page() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  console.log(data?.fetchBoards);

  const onClickDelete = e => {
    // 데이터를 삭제 후 데이터 재요청 해주어야 화면에서 삭제 됨
    deleteBoard({
      variables: {
        number: Number(e.target.id),
      },
      // FETCH_BOARDS를 refetch 해주면 화면이 리렌더링 됨

      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };
  return (
    // 리렌더링 됐는데 체크 박스는 왜 그대로임?.... React는 HTML 요소에 id를 주어야 다른 요소로 인식해서 각각 그려줌 최상위 요소에 key값으로 고유한 값을 넣어주기 index는 X 중복 되지는 않지만 삭제 되면서 다음 게시글이 올라오면서 기존 index가 위로 올라와 동일한 값을 가짐. 유일하지 않게 됨
    <>
      <h2>Map 02</h2>
      <>
        {/* 특별한 이유가 없으면 fragment로 감싸기, div는 1개 더 그려야 돼서 조금 느려짐 */}
        {data?.fetchBoards.map(result => (
          // Fragment === <></>, <Fragment></Fragment> | Fragment에 key 주는 방법은 <Fragment></Fragment>를 사용하면 됨
          <Fragment key={result.number}>
            <h4>{result.number}번 게시글</h4>
            <input type="checkbox" />
            <p style={{ display: 'inline-block' }}>제목: {result.title}</p>
            <p>작성자: {result.writer}</p>
            <p>내용: {result.contents}</p>
            <span>
              <button id={result.number} onClick={onClickDelete}>
                삭제
              </button>
            </span>
            <p>-----------------------</p>
          </Fragment>
        ))}
      </>
    </>
  );
}
