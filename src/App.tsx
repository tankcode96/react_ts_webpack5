import React, { lazy, Suspense, useState } from "react";
import A from "./components/Class";
// import "./app.css";
import "./app.less";

import smallImg from "@/assets/images/5kb.png";
import bigImg from "@/assets/images/22kb.png";

const LazyLoadDemo = lazy(() => import("@/components/LazyLoadDemo")); // 使用import语法配合react的Lazy动态引入资源
// prefetch
const PrefetchDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PrefetchDemo" */
      /* webpackPrefetch: true */
      "@/components/PrefetchDemo"
    )
);
// preload
const PreloadDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreloadDemo" */
      /* webpackPreload: true */
      "@/components/PreloadDemo"
    )
);

function App() {
  const [count, setCounts] = useState("");
  const [show, setShow] = useState(false);
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  const a = new Promise(function () {});
  // 点击事件中动态引入css, 设置show为true
  const onClick = () => {
    import("./app.css");
    setShow(true);
  };
  return (
    <h2>
      react18-webpack5-ts111
      <A />
      <img src={smallImg} alt='小于10kb的图片' />
      <img src={bigImg} alt='大于于10kb的图片' />
      {/* <img src={require('./assets/images/5kb.png')} alt='小于10kb的图片' />
      <img src={require('./assets/images/22kb.png')} alt='大于于10kb的图片' /> */}
      <div className='bg'></div>
      <p>受控组件</p>
      <input type='text' value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type='text' />
      <p onClick={onClick}>展示lazyload、prefetch、preload</p>
      {show && (
        <>
          <Suspense fallback={<h3>loading……</h3>}>
            <LazyLoadDemo />
          </Suspense>
          <Suspense fallback={<h3>loading……</h3>}>
            <PrefetchDemo />
          </Suspense>
          <Suspense fallback={<h3>loading……</h3>}>
            <PreloadDemo />
          </Suspense>
        </>
      )}
    </h2>
  );
}
export default App;
