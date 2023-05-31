import React, { useState } from "react";
import '../CSS/Navigation.css'
import PageContent from "./PageContent";

function Navigation() {
    const [selectedTab, setSelectedTab] = useState("Home");



    return (
        <div className="landing-page">
            <div className="navigation">
                <div onClick={() => setSelectedTab("home")} className="navigation-button">
                    Home
                </div>
                <div onClick={() => setSelectedTab("account")} className="navigation-button">
                    My Account
                </div>
                <div onClick={() => setSelectedTab("shop")} className="navigation-button">
                    Shop
                </div>
            </div>
            <PageContent selectedTab={selectedTab}/>
        </div>
    )
}
export default Navigation;