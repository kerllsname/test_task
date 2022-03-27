import Aside from './Aside/Aside';
import RouterPage from './Main/RouterPage';

export default function Wrapper() {
  return (
    <div className="wrapper">
      <Aside />
      <RouterPage />
    </div>
  );
}
