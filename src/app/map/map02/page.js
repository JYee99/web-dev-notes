'use client';

import { gql, useQuery } from '@apollo/client';

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

export default function Page() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  return (
    <>
      <h2>Map 02</h2>
      <>
        {data?.fetchBoards.map(result => (
          <div>
            <h4>{result.number}번 게시글</h4>
            <input type="checkbox" />
            <p style={{ display: 'inline-block' }}>제목: {result.title}</p>
            <p>작성자: {result.writer}</p>
            <p>내용: {result.contents}</p>
            <p>-----------------------</p>
          </div>
        ))}

        {/* <p>작성자: {data && data.fetchBoards?.writer}</p>
        <p>제목: {data ? data.fetchBoards?.title : 'Loarding...'}</p>
        <p>내용: {data?.fetchBoards?.contents}</p> */}
      </>
    </>
  );
}
