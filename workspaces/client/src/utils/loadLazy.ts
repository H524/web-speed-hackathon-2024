import React from "react";

// 型定義要改善
export function lazyImport(factory:any, name:any) {
  return Object.create({
    [name]: React.lazy(() => factory().then((module:any) => ({ default: module[name] }))),
  });
}

// 参考URL
// https://qiita.com/KokiSakano/items/b6d4e6875443064032b4
// https://github.com/facebook/react/issues/14603#issuecomment-726551598