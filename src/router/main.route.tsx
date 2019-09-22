import * as React from 'react';
import {
    Route, Switch
} from 'react-router-dom';
import Main from "./../pages/main";
import About from "./../pages/about";
import {  URI_ABOUT,URI_HOME } from "./route.const";

import Notfound from "./404.route";
import { WithMainRoot } from '../common';


class Index extends React.PureComponent<{}>{

    render() {
        return (
            <div>
                {/* <Header> */}
                    <Switch>
                        <Route exact path={URI_ABOUT} component={About} />
                        <Route exact path={URI_HOME} component={Main} />
                        <Route exact path={'/*'} component={Notfound} />
                    </Switch>
                {/* </Header> */}
            </div>
        );
    }
}

export default WithMainRoot(Index);