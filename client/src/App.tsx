import { withStyles } from '@material-ui/core';
import * as WFace from '@wface/components';
import * as React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import MainPage from './pages/main-page';
import TrainingPage from './pages/training';
// @ts-ignore
import { Scrollbars } from 'react-custom-scrollbars';

class AppInner extends React.Component<any, any> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <WFace.WAppBar position="absolute" className={classes.appBar} elevation={0}>
          <WFace.WToolBar>
            <span className={classes.flex}>
              <WFace.WTypography variant="h5" color="inherit" noWrap style={{ fontWeight: 500 }}>
                Digiturk
              </WFace.WTypography>
              <WFace.WTypography variant="body2" color="inherit" noWrap style={{ fontWeight: 500 }}>
                Open Source
              </WFace.WTypography>
            </span>

            {/* <WFace.WTooltip title="Blog">
              <WFace.WIconButton style={{color: '#FFFFFFCC'}}><WFace.WIcon style={{fontSize: 25}} iconSource="fontawesome" icon="fab fa-medium-m"/></WFace.WIconButton>
            </WFace.WTooltip> */}
            <a href="https://github.com/Digiturk" style={{ color: '#FFFFFFCC' }}><WFace.WIcon style={{ fontSize: 25 }} iconSource="fontawesome" icon="fab fa-github" /></a>
          </WFace.WToolBar>
        </WFace.WAppBar>

        <main className={classes.content}>
          <Scrollbars style={{ width: '100%', height: '100%' }}>            
            <Route exact path="/" component={MainPage} />            
          </Scrollbars>
        </main>
      </div>
    )
  }
}

const styles: any = (theme: any) => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // backgroundColor: '#00000066',
    background: 'linear-gradient(#00000077, transparent)',
  },
  flex: {
    flex: 1,
  },
  linkButton: {
    textTransform: 'none',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#e8eaf5',
    padding: 0, // theme.spacing.unit * 3
    minWidth: 0, // So the Typography noWrap works
    marginTop: 0,
    marginBottom: 0,
    maxHeight: '100%',
    overflow: 'auto'
  }
});

const App = withStyles(styles)(AppInner)
export default withRouter(App as any)