import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
const Topics = ({ match }) => {
    console.log(match);
    return (
        <div>
          <h2>主题列表</h2>
          <ul>
            <li>
              <Link to={`${match.url}/rendering`}>
                使用 React 渲染
              </Link>
            </li>
            <li>
              <Link to={`${match.url}/components`}>
                组件
              </Link>
            </li>
            <li>
              <Link to={`${match.url}/props-v-state`}>
                属性 v. 状态
              </Link>
            </li>
          </ul>
        </div>
      );
};

export default Topics;