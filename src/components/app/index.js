/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../header/index';
import './index.scss';
/**
    @author Mothpro
* */
function App(props) {
    const { pro } = props;
    return (
        <div className="container">
            {/* 导航条 */}
            <Header />
            <div className="content">
                {/* 页面内容区域 */}
                { pro.children }
            </div>
        </div>
    );
}
export default App;
