import React, { PureComponent } from "react";

// 装饰器为,组件添加age属性
function addAge(Target: Function) {
  Target.prototype.age = 111;
}
// 使用装饰圈
@addAge
class A extends PureComponent {
  age?: number;

  render() {
    return <p>我是类组件---{this.age}</p>;
  }
}

export default A;
