import * as Styles from './BoardWrite.styles';

export default function BoardWriteUI({
  onClickGraphql,
  onChangeWriter,
  onChangeTitele,
  onChangeContent,
  writer,
  title,
  content,
}) {
  return (
    <>
      <div>---------Presenter---------</div>
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
      <Styles.BlueBtn onClick={onClickGraphql}>
        Graphql-API 요청하기
      </Styles.BlueBtn>
      <div>---------Presenter---------</div>
    </>
  );
}
