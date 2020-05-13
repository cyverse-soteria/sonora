import React, { Component } from "react";
import Navigation from "../src/components/layout/Navigation";

class NavigationTest extends Component {
    render() {
        return <Navigation activeView="data" setNavBarRef={() => {}} />;
    }
}

export default { title: "Navigation" };
export const AppNavigation = () => <NavigationTest />;
