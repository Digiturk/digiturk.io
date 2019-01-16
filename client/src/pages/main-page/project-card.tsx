import * as React from 'react';
import * as WFace from '@wface/components';
import { CardMedia } from '@material-ui/core'

export default class ProjectCard extends React.Component<any, any> {

  private renderRequirement(primaryText: string, secondaryText: string, href: string, avatarUrl: string): React.ReactNode {
    return (
      <WFace.WListItem>
        <div style={{ width: 40, textAlign: 'center' }}>
          <img src={avatarUrl} style={{ maxHeight: 40, maxWidth: 40 }} />
        </div>

        <WFace.WListItemText primary={primaryText} secondary={secondaryText} />
        <WFace.WListItemSecondaryAction>
          <WFace.WIconButton href={href} target="_blank" color="primary">
            <WFace.WIcon>get_app</WFace.WIcon>
          </WFace.WIconButton>
        </WFace.WListItemSecondaryAction>
      </WFace.WListItem>
    );
  }

  public render() {
    return (
      <WFace.WCard elevation={0}>
        <WFace.WCardContent>
          <div style={{ display: 'flex', flexGrow: 1, position: 'relative', paddingTop: 10 }}>
            <img src="/assets/react.png" alt="" style={{ height: 100 }} />
            <span style={{ flex: 1, padding: '5px 20px 5px 20px' }}>
              <span style={{ fontWeight: 600, color: '#555', fontSize: 20 }}>{this.props.title}</span>
              <div style={{ width: 50, borderBottom: '4px solid rgb(63, 81, 181)', borderRadius: 4 }}></div>
              <div style={{ color: '#65819d', marginTop: 20, textAlign: 'justify', fontSize: 14 }}>
                {this.props.text}
              </div>
              <div style={{ marginTop: 20 }}>
                {this.props.labels.map((label: any) => (
                  <span style={{ padding: 5, margin: '3px 3px 3px 0', backgroundColor: '#8c97a2', color: '#FFF', fontSize: 11, borderRadius: 4 }}>
                    {label}
                  </span>
                ))}
              </div>
              <div style={{ position: 'absolute', top: 0, right: 0 }}>
                {/* <a href={this.props.github}>
                  <img src="https://img.shields.io/github/stars/digiturk/wface.svg?style=for-the-badge&colorA=8c97a2&colorB=8c97a2&label=&suffix=ksdj"/>
                  <img src="https://img.shields.io/github/stars/badges/shields.svg?label=Stars&style=social"/>
                </a> */}
                

                <WFace.WIconButton href={this.props.github}>
                  <WFace.WIcon style={{ fontSize: 25 }} iconSource="fontawesome" icon="fab fa-github" />
                </WFace.WIconButton>
              </div>
            </span>
          </div>

        </WFace.WCardContent>
        <WFace.WCardActions>
          <WFace.WButton color="default">Dökümantasyon</WFace.WButton>
        </WFace.WCardActions>
      </WFace.WCard>
    );
  }
}

