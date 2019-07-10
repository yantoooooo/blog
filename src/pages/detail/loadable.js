import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  // import异步加载的语法
  loader: () => import('./'),

  loading() {
    return <div>加载中</div>
  }
});

export default ()=> <LoadableComponent/>;
 
// 可以简化成无状态组件，如上行代码
// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }