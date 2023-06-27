import React from "react";
import {Shop} from "./Shop";
import Home from "./Home";
import Account from "./Account/Account.js";
import "../CSS/PageContent.css"

function PageContent(selectedTab){
    
    return(
        <div className="page-content">
            {
                selectedTab.selectedTab === "Home"
                ? <Home />
                : selectedTab.selectedTab === "Account"
                ? <Account />
                : selectedTab.selectedTab === "Shop"
                ? <Shop />
                : ""
            }
        </div>
    )
}

export default PageContent;