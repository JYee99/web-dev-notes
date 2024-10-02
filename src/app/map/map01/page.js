// 백엔드 데이터 예시
const FRUITS = [
  { number: 1, title: '레드향' },
  { number: 2, title: '샤인 머스켓' },
  { number: 3, title: '딸기' },
  { number: 4, title: '복숭아' },
  { number: 5, title: '곶감' },
  { number: 6, title: '참외' },
  { number: 7, title: '수박' },
  { number: 8, title: '귤' },
  { number: 9, title: '한라봉' },
  { number: 10, title: '키위' },
];

export default function Page() {
  return (
    <>
      <h2>Map 01</h2>
      {FRUITS.map(result => (
        <p>
          {result.number}. {result.title}
        </p>
      ))}
    </>
  );
}
