'use client';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  // 데이터 요청할 때 개발자 도구 => 네트워크 => Response 꼭 보기 **필수**
  const [createBoard] = useMutation(CREATE_BORAD);
  const onClickGraphql = async () => {
    // try안의 코드를 실행 => 실패하면, 다음에 있는 코드는 모두 무시하고 catch에 있는 코드가 실행, 성공하면 catch의 코드는 실행 X
    try {
      const result = await createBoard({
        // variables => $ 역할을 함
        variables: {
          writer: '진영쓰으',
          title: 'hihhhh',
          contents: '방갑소',
        },
      });
      router.push(`/routing/routingMoved02/${result.data.createBoard.number}`);
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <h1>Graphql Args</h1>
      <button onClick={onClickGraphql}>Graphql-API 요청하기</button>
    </>
  );
}
