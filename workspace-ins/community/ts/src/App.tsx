import { RouterProvider } from 'react-router-dom';
import router from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import Spinner from '@/components/Spinner';
import { RecoilRoot } from 'recoil';
import useThemeStore from '@/zustand/themeStore';


// react-query 사용
const queryClient = new QueryClient();

function App() {

  const { isDarkMode } = useThemeStore();

  // 렌더링 최적화를 위해서 수동으로 필요한 속성만 반환받아서 사용
  // const isDarkMode = useThemeStore(state => state.isDarkMode);

  if(isDarkMode){
    document.documentElement.classList.add('dark');
  }else{
    document.documentElement.classList.remove('dark');
  }

  return (
    <QueryClientProvider client={ queryClient }>
      <RecoilRoot>
        <React.Suspense fallback={ <Spinner.FullScreen /> }>
          <RouterProvider router={ router } />
        </React.Suspense>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App;