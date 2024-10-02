import * as Styles from './BoardWrite.styles';

export default function BoardWriteUI({
  onClickGraphql,
  onChangeWriter,
  onChangeTitele,
  onChangeContent,
  writer,
  title,
  content,
  isActive,
}) {
  return (
    <>
      <Styles.WriteTitle>Container Presenter</Styles.WriteTitle>
      <div>
        <label htmlFor="writer">작성자: </label>
        <Styles.RedInput type="text" value={writer} onChange={onChangeWriter} />
      </div>
      <div>
        <label htmlFor="title">제목: </label>
        <Styles.YellowInput
          type="text"
          value={title}
          onChange={onChangeTitele}
        />
      </div>
      <div>
        <label htmlFor="content">내용: </label>
        <Styles.GreenInput
          type="text"
          value={content}
          onChange={onChangeContent}
        />
      </div>
      <Styles.BlueBtn onClick={onClickGraphql} isActive={isActive}>
        Graphql-API 요청하기
      </Styles.BlueBtn>
    </>
  );
}
