import React from "react";
import { FlowChartWithState } from "@mrblenny/react-flow-chart";
import { chartSimple } from "./data";



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
          <FlowChartWithState initialValue={chart} />
      );
  }
}

export default Reactflowchart;
