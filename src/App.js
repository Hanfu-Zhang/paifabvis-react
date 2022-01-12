import React, {Component} from 'react';
import Home from './components/Home'
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css'

const { Header, Content, Footer } = Layout;

export default class App extends Component {
  render() {
    return (
        <div>
            <Layout className="layout">
                <Header id="components-layout-demo-top">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        {new Array(3).fill(null).map((_, index) => {
                            const key = index + 1;
                            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                        })}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        <Home/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>PAI Fabric Visualization ©2022 Developed by Hanfu Zhang, Zongtai Li, and Shaoyi Han</Footer>
            </Layout>
        </div>
    );
  }
}



