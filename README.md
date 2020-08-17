## React 基础框架模版使用说明

### JSX 的使用

### Hook

> useState

```javascript
//这是state的hook 做数据管理
const [state, setState] = useState(initialState); //initialState是初始数据，state是数据变量名，setState是修改变量的方法
```

> useEffect

```javascript
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  }, ['这里是要监听的属性，该属性变化会重新触发钩子']);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

> useContext

  

```javascript
//获取父级组件的状态，可以用来传递数据
const value = useContext(MyContext);
//代码示例
import React, { useContext } from 'react';
import './App.css';
//创建context
const numberContext = React.createContext();
//它返回一个具有两个值的对象
//{Provider ， Consumer}
function App() {
  //使用Provider为所有子孙提供value值
  return (
    <numberContext.Provider value={520}>
      <div>
        <ShowAn />
      </div>
    </numberContext.Provider>
  );
}

function ShowAn() {
  //使用Consumer从上下文获取value
  //调用useContext，传入从React.createContext获取的上下文对象。
  const value = useContext(numberContext);
  return (
    // <numberContext.Consumer>
    // {value=><div>the answer is {value}</div>}
    // </numberContext.Consumer>
    <div>the answer is {value}</div>
  );
}
export default App;
```

> useHistory

```javascript
//通常用来做页面跳转
import { useHistory } from 'react-router-dom';

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
```

> useLocation

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ga.send(['pageview', location.pathname]);
  }, [location]);
}

function App() {
  usePageViews();
  return <Switch>...</Switch>;
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  node
);
```

> useParams

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
  node
);
```

> useRouteMatch

```javascript

```

### React

### React-Router-Dom

框架采用react-router-dom作路由控制，以下几点是在代码中记录的问题和api。
1. router中的exact和strict
    - exact

           exact是Route的一个属性，认为其是一种严格匹配模式
           当exact为false时，根据路由匹配所有组件，如"/" 匹配 “/”、“/home”、“/home/menu”；当exact为true时，则“/” 仅匹配“/”、无法匹配到“/home”。
          
          实际应用中设置该属性，取决于页面的构造。如果在父路由中加了exact，是不能匹配子路由的,建议在子路由中加exact
          若一个路由对应一个独立的页面(非嵌套)，则可使用exact：true，这样能够保证在路由为“/home”时不会匹配到“/”对应组件。
          若一个路由对应是页面中局部view时，则exact设为false，否则因“/home/menu” 无法匹配“/home”，导致父组件无法渲染更别提嵌套的局部view。


    - stric

          strict默认为false，如果为true时，路由后面有斜杠而url中没有斜杠，是不匹配的


​	
### Mobx

### 权限处理

### 代码风格
