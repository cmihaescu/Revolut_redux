import React from "react";
import './Navigation.css'
import { useDispatch, useSelector } from "react-redux";
import PageContent from "../../navigation/pageContent/PageContent.js";
import { setTabAccount, setTabHome, setTabShop } from "../../redux/actions/reducersActions.js"

function Navigation() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div className="landing-page">
            <div className="navigation">
                <div onClick={() => { dispatch(setTabHome())}} className="navigation-button">
                    Home
                </div>
                <div onClick={() => {dispatch(setTabAccount())}} className="navigation-button">
                    My Account
                </div>
                <div onClick={() => {dispatch(setTabShop())}} className="navigation-button">
                    Shop
                </div>
            </div>
            <PageContent selectedTab={state.websiteState.displayedPage} />
        </div>
    )
}
export default Navigation;