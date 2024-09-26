'use client';
import { useMutation, gql } from '@apollo/client';

const CREATE_BORAD = gql`
  mutation createBorad($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function Page() {
  // 데이터 요청할 때 개발자 도구 => 네트워크 => Response 꼭 보기 **필수**
  const [createBoard] = useMutation(CREATE_BORAD);
  const onClickGraphql = async () => {
    const result = await createBoard({
      // variables => $ 역할을 함
      variables: {
        writer: '진영쓰으',
        title: 'hihhhh',
        contents: '방갑소',
      },
    });
    console.log(result);
  };

  return (
    <>
      <h1>Graphql Args</h1>
      <button onClick={onClickGraphql}>Graphql-API 요청하기</button>
    </>
  );
}
