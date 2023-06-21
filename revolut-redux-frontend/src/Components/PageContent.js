import React from "react";
import {Shop} from "./Shop";
import Home from "./Home";
import Account from "./Account";
import "../CSS/PageContent.css"

function PageContent(selectedTab){

    return(
        <div className="page-content">
            {
                selectedTab.selectedTab === "home"
                ? <Home />
                : selectedTab.selectedTab === "account"
                ? <Account />
                : selectedTab.selectedTab === "shop"
                ? <Shop />
                : ""
            }
        </div>
    )
}

export default PageContent;