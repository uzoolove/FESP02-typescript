import Submit from "@/components/Submit";

export default function CommentItem({ item }){
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <img
            className="w-8 mr-2 rounded-full"
            src={`${import.meta.env.VITE_API_SERVER}${ item.user.profile }`}
            alt="프로필 이미지"
          />
          <a href="" className="text-orange-400">{ item.user.name }</a>
          <time className="ml-auto text-gray-500" dateTime={ item.updatedAt }>{ item.updatedAt }</time>
        </div>
        <div className="flex justify-between items-center mb-2">
          <form action="#">
            <pre className="whitespace-pre-wrap text-sm">{ item.content }</pre>
            <Submit bgColor="red" size="sm">삭제</Submit>
          </form>
        </div>  
      </div>
  );
}