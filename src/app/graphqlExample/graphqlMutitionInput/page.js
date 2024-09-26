'use client';
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

const CREATE_BOARD = gql`
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
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onClickGraphql = async () => {
    if (!writer || !title || !content) {
      alert('입력란을 확인해주세요.');
      return;
    }

    const result = await createBoard({
      // variables => $ 역할을 함
      variables: {
        writer: writer,
        title: title,
        contents: content,
      },
    });
    console.log(result);
    setWriter('');
    setTitle('');
    setContent('');
  };

  const onChangeWriter = e => {
    setWriter(e.target.value);
  };
  const onChangeTitele = e => {
    setTitle(e.target.value);
  };
  const onChangeContent = e => {
    setContent(e.target.value);
  };

  return (
    <>
      <h1>Graphql Mutation Input</h1>
      <div>
        <label htmlFor="writer">작성자: </label>
        <input type="text" value={writer} onChange={onChangeWriter} />
      </div>
      <div>
        <label htmlFor="title">제목: </label>
        <input type="text" value={title} onChange={onChangeTitele} />
      </div>
      <div>
        <label htmlFor="content">내용: </label>
        <input type="text" value={content} onChange={onChangeContent} />
      </div>
      <button onClick={onClickGraphql}>Graphql-API 요청하기</button>
    </>
  );
}
