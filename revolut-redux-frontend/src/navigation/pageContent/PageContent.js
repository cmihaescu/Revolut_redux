import React from "react";
import {Shop} from "../shop/Shop.js";
import Home from "../home/Home.js";
import Account from "../../Components/Account/Account.js";
import Cart from "../../Components/Cart/Cart.js";
import "./PageContent.css"

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
                :selectedTab.selectedTab === "Cart"
                ? <Cart />
                : ""
            }
        </div>
    )
}

export default PageContent;