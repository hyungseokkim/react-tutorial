import React from "react";
import { FlowChartWithState } from "@mrblenny/react-flow-chart";
import { chartSimple } from "./data";
import { Content } from './Content';
import { Sidebar } from './Sidebar';
import { SidebarItem } from './SidebarItem';
import { Page } from './Page';

class Reactflowchart extends React.Component<any, any>{
  constructor(props: any){
    super(props);
    this.state = {
      chart: chartSimple
    };
  }
  render() {
    const { chart } = this.state;
      return (
      // <div>{JSON.stringify(chart)}</div>
        <Page>
          <Content>
          <FlowChartWithState initialValue={chart} />
          </Content>
          <Sidebar>
            <SidebarItem
              type="top/bottom"
              ports={ {
                port1: {
                  id: 'port1',
                  type: 'top',
                  properties: {
                    custom: 'property',
                  },
                },
                port2: {
                  id: 'port1',
                  type: 'bottom',
                  properties: {
                    custom: 'property',
                  },
                },
              } }
              properties={ {
                custom: 'property',
              }}
            />
            <SidebarItem
              type="bottom-only"
              ports={ {
                port1: {
                  id: 'port1',
                  type: 'bottom',
                  properties: {
                    custom: 'property',
                  },
                },
              }}
            />
            <SidebarItem
              type="left-right"
              ports={ {
                port1: {
                  id: 'port1',
                  type: 'left',
                  properties: {
                    custom: 'property',
                  },
                },
                port2: {
                  id: 'port2',
                  type: 'right',
                  properties: {
                    custom: 'property',
                  },
                },
              }}
            />
            <SidebarItem
              type="all-sides"
              ports={ {
                port1: {
                  id: 'port1',
                  type: 'left',

                },
                port2: {
                  id: 'port2',
                  type: 'right',
                },
                port3: {
                  id: 'port3',
                  type: 'top',
                },
                port4: {
                  id: 'port4',
                  type: 'bottom',
                },
              }}
            />
            <SidebarItem
              type="lots-of-ports"
              ports={ {
                port1: {
                  id: 'port1',
                  type: 'left',

                },
                port2: {
                  id: 'port2',
                  type: 'right',
                },
                port3: {
                  id: 'port3',
                  type: 'top',
                },
                port4: {
                  id: 'port4',
                  type: 'bottom',
                },
                port5: {
                  id: 'port5',
                  type: 'left',
                },
                port6: {
                  id: 'port6',
                  type: 'right',
                },
                port7: {
                  id: 'port7',
                  type: 'top',
                },
                port8: {
                  id: 'port8',
                  type: 'bottom',
                },
                port9: {
                  id: 'port9',
                  type: 'left',
                },
                port10: {
                  id: 'port10',
                  type: 'right',
                },
                port11: {
                  id: 'port11',
                  type: 'top',
                },
                port12: {
                  id: 'port12',
                  type: 'bottom',
                },
              }}
            />
          </Sidebar>
          </Page>
      );
  }
}

export default Reactflowchart;
