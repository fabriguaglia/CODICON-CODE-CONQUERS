import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Landing from '../../components/landing/landing';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <Landing/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;