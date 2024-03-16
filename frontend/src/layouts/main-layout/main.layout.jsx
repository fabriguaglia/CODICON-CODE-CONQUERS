import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Landing from '../../components/landing/landing';
import CommunityList from '../../components/community-list/community-list';
import './main.layout.css';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <Landing/>
                <CommunityList title={'Comunidades'} items={["","",""]} backgroundColor="bg-light-color"/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;