import React from "react";
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";

const MainLayout = ( { children } ) => {
    return (
        <div className="layout">
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;