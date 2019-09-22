import * as React from 'react';
import {
    Route, Switch
} from 'react-router-dom';
import { WithPanelRoot } from '../common';
import { URI_HOME} from './route.const';
import HOME from '../pages/main';

class Index extends React.PureComponent<{}>{

    render() {
        return (
            <div>
                {/* <PanelHeader> */}
                    <Switch>
                        <Route exact path={URI_HOME} component={HOME} />
                    </Switch>
                {/* </PanelHeader> */}
            </div>
        );
    }
}

export default WithPanelRoot(Index);