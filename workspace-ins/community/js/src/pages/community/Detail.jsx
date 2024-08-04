import Spinner from "@/components/Spinner";
import Submit from "@/components/Submit";
import CommentList from "@/pages/community/CommentList";
import { userState } from "@/recoil/user/atoms";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

const SERVER = import.meta.env.VITE_API_SERVER;

async function fetchPost(_id){
  const url = `${SERVER}/posts/${_id}`;
  const res = await fetch(url);
  return res.json();
}

export default function Detail(){
  const { type, _id } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: [type, _id],
    queryFn: () => {
      return fetchPost(_id);
    },
    select: resData => resData.item,
    staleTime: 1000*3
  });

  // 로그인 된 사용자 정보
  const user = useRecoilValue(userState);

  // const [data, setData] = useState(null);
  // const fetchData = async (_id) => {
  //   const result = await fetchPost(_id);
  //   setData(result.item);
  // }
  // useEffect(() => {
  //   fetchData(_id);
  // }, []);

  return (
    <main className="container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        <form action={`/${type}`} >
          <div className="font-semibold text-xl">제목 : { data?.title }</div>
          <div className="text-right text-gray-400">작성자 : { data?.user.name }</div>
          <div className="mb-4">
            <div>
              <pre className="font-roboto w-full p-2 whitespace-pre-wrap">{ data?.content }</pre>
            </div>
            <hr/>
          </div>
          <div className="flex justify-end my-4">
            <Link to={`/${type}`} className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">목록</Link>
            { user?._id === data?.user._id && (
              <>
                <Link to={`/${type}/${_id}/edit`} className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">수정</Link>
                <Submit bgColor="red">삭제</Submit>
              </>
            ) }
            
          </div>
        </form>
      </section>

      {/* 부분 화면 로딩중 */}
      { isLoading && (
        <Spinner.TargetArea />
      ) }
      
      <CommentList replies={ data?.replies } />

    </main>
  );
}