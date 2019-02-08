import * as React from 'react';
import * as WFace from '@wface/components';
import { withStyles } from '@material-ui/core';
import ProjectCard from './project-card';
import Projects from '../../../data/projects.json';

class MainPage extends React.Component<any, any> {

  MainButton = (props: { href: string, text: string }) => (
    <WFace.WButton
      href={props.href}
      className={this.props.classes.mainButton}
      variant="outlined"
    >
      {props.text}
    </WFace.WButton>
  );

  public render() {
    const { classes } = this.props;

    return (
      <>
        <div style={{
          height: '400px', width: '100vw', display: 'table', backgroundImage: 'radial-gradient(#485563, #29323c)',
          color: 'white',
          fontWeight: 600,
          wordWrap: 'break-word',
        }}>
          <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
            <div style={{ fontSize: '4.5em', marginTop: 50 }}>Digiturk Open Source</div>
            <div style={{ fontSize: '1.2em', marginTop: 20, fontWeight: 'normal', color: '#FFFFFF99' }}>
              Açık kaynak dünyasından aldıklarımıza küçük karşılıklar...
          </div>
          </div>
        </div>
        <div >

          <WFace.WGrid container style={{ paddingTop: 10, textAlign: 'left' }} spacing={0}>
            {Projects.map((project: any) => (
              <WFace.WGrid item xs={12} sm={12} md={6} lg={6}>
                <ProjectCard {...project} />
              </WFace.WGrid>
            ))}
          </WFace.WGrid>
        </div>
      </>
    );
  }
}

const styles: any = ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: 120
  },
  mainButton: {
    width: 100,
    margin: 20,
    textTransform: 'none',
    color: '#DDD',
    backgroundColor: '#DDDDDD00',
    borderColor: '#DDD',
    '&:hover': {
      backgroundColor: '#DDDDDD22',
      borderColor: '#DDD',
    },
  },
});

export default withStyles(styles)(MainPage)
