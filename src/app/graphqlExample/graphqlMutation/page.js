'use client';
import { useMutation, gql } from '@apollo/client';

const myGraphqlSetting = gql`
  mutation {
    createBoard(writer: "진영쓰으으", title: "안녕", contents: "Hi~") {
      _id
      number
      message
    }
  }
`;

export default function Page() {
  // 데이터 요청할 때 개발자 도구 => 네트워크 => Response 꼭 보기 **필수**
  const [myGraphql] = useMutation(myGraphqlSetting);
  const onClickGraphql = async () => {
    const result = await myGraphql();
    console.log(result);
  };

  return (
    <>
      <h1>Graphql Mutation</h1>
      <button onClick={onClickGraphql}>Graphql-API 요청하기</button>
    </>
  );
}
