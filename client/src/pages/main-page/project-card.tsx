import * as React from 'react';
import * as WFace from '@wface/components';
import { CardMedia } from '@material-ui/core'

export default class ProjectCard extends React.Component<any, any> {

  public render() {
    return (
      <WFace.WCard elevation={0} >
        <WFace.WCardContent style={{minHeight: 150}}>
          <div style={{ display: 'flex', flexGrow: 1, position: 'relative', paddingTop: 10 }}>
            <img src={this.props.image} alt="" style={{ height: 100 }} />
            <span style={{ flex: 1, padding: '5px 20px 5px 20px' }}>
              <span style={{ fontWeight: 600, color: '#555', fontSize: 20 }}>{this.props.title}</span>
              <div style={{ color: '#65819d', marginTop: 20, textAlign: 'justify', fontSize: 14 }}>
                {this.props.text}
              </div>
              <div style={{ marginTop: 20 }}>
                {this.props.labels.map((label: any) => (
                  <div style={{ padding: 5, margin: '3px 3px 3px 0', backgroundColor: '#8c97a2', color: '#FFF', fontSize: 11, borderRadius: 4, display: 'inline-block' }}>
                    {label}
                  </div>
                ))}
              </div>
              <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <WFace.WIconButton href={this.props.github}>
                  <WFace.WIcon style={{ fontSize: 25 }} iconSource="fontawesome" icon="fab fa-github" />
                </WFace.WIconButton>
              </div>
            </span>
          </div>

        </WFace.WCardContent>
        <WFace.WCardActions>

          {this.props.demo && 
            <WFace.WButton color="default" href={this.props.demo}>Demo</WFace.WButton>
          }
          <WFace.WButton color="default" href={this.props.documentation}>Dökümantasyon</WFace.WButton>
        </WFace.WCardActions>
      </WFace.WCard>
    );
  }
}

