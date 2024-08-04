import { HashLoader, ScaleLoader, SkewLoader } from "react-spinners";

const Spinner = {
  FullScreen(){
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-10">
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-lg font-semibold">잠시만 기다려주세요.</h3>
          <HashLoader
            color="#f58714"
            size={60}
          />
        </div>
      </div>
    );
  },
  WithHeader(){
    const screenHeight = window.innerHeight; // 현재 브라우저 창의 높이
    const headerHeight = 68;
    const footerHeight = 68;
    const spinnerHeight = screenHeight - headerHeight - footerHeight; // 스피너 영역의 높이 계산
    return (
      <div className="flex items-center justify-center" style={{ height: spinnerHeight }}>
        <div className="text-center">
          <h3 className="mb-4 text-lg font-semibold">잠시만 기다려주세요.</h3>
          <SkewLoader color="#F97316" />
        </div>
      </div>
    );    
  },
  TargetArea(){
    return (
      <div className="flex justify-center">
        <ScaleLoader color="#F97316"/>
      </div>
    );
  }
};

export default Spinner;