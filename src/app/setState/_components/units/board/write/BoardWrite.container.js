'use client';

import BoardWriteUI from './BoardWrite.presenter';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { CREATE_BOARD } from './BoardWrite.queries';

export default function BoardWrite() {
  // 데이터 요청할 때 개발자 도구 => 네트워크 => Response 꼭 보기 **필수**
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isActive, setIsActive] = useState(false);

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
    checkIsActive(e.target.value, title, content);
  };
  const onChangeTitele = e => {
    setTitle(e.target.value);
    checkIsActive(writer, e.target.value, content);
  };
  const onChangeContent = e => {
    setContent(e.target.value);
    checkIsActive(writer, title, e.target.value);
  };
  const checkIsActive = (writer, title, content) => {
    if (writer && title && content) {
      setIsActive(true);
    }
  };
  return (
    <>
      <BoardWriteUI
        writer={writer}
        title={title}
        content={content}
        onClickGraphql={onClickGraphql}
        onChangeWriter={onChangeWriter}
        onChangeTitele={onChangeTitele}
        onChangeContent={onChangeContent}
        isActive={isActive}
      />
    </>
  );
}
