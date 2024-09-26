'use client';
import { useMutation, gql } from '@apollo/client';

const CREATE_PRODUCT = gql`
  # 변수의 타입은 플레이그라운드에 작성 된 타입으로 작성
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function Page() {
  // 데이터 요청할 때 개발자 도구 => 네트워크 => Response 꼭 보기 **필수**
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const onClickGraphql = async () => {
    const result = await createProduct({
      variables: {
        seller: '',
        createProductInput: {
          name: '마우스',
          detail: '조그만 마우스',
          price: 3000,
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      <h1>Graphql Mutation Product</h1>
      <button onClick={onClickGraphql}>Graphql-API 요청하기</button>
    </>
  );
}
