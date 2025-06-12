import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { Routers } from './routers/Routers.ts';

createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <RouterProvider router={Routers} />
  </RecoilRoot>
);
