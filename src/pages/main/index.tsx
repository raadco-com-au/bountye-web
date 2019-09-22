import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';


const styles = (theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            marginTop: theme.spacing(9),
        },
        typography: {
            padding: theme.spacing(3),
        },
    });

type State = {
    open: boolean;
    value: number;
};



class Index extends React.Component<WithStyles<typeof styles>, State> {

    render() { 
        return (
            <div>
              main
            </div >
        );
    }
}

export default withStyles(styles)(Index);
