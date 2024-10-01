'use client';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const onClickBtn1 = () => {
    router.push('/routing/routingMoved01/400');
  };
  const onClickBtn2 = () => {
    router.push('/routing/routingMoved01/400');
  };
  const onClickBtn3 = () => {
    router.push('/routing/routingMoved01/400');
  };
  return (
    <>
      <h1>Static Routing</h1>
      <button onClick={onClickBtn1}>400번 게시글</button>
      <button onClick={onClickBtn2}>400번 게시글</button>
      <button onClick={onClickBtn3}>400번 게시글</button>
    </>
  );
}
