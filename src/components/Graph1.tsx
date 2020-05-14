import * as React from 'react';
import PlotlyChart from 'react-plotlyjs-ts';

class Graph1 extends React.Component {
    public handleClick = (evt:any) => alert('click')
    //public handleHover = (evt:any) => alert('그래프위에 마우스가 올려졌습니다.')

    public render() {
        const data = [
            {
                name: 'primaryGDP',
                type: 'bar',
                x: ["United States", "China", "Japan", "Germany", "United Kingdom", "France", "India", "Italy"],
                y: [14303756, 5788633, 3377434, 2484874, 2074864, 1985647, 1280813, 1367145]
            },
            {
                name: 'secondaryGDP',
                type: 'bar',
                x: ["United States", "China", "Japan", "Germany", "United Kingdom", "France", "India", "Italy"],
                y: [3427876, 4464876, 1300833, 982067, 556477, 455355, 580755, 448305],
            },
            {
                name: 'secondaryGDP',
                type: 'line',
                x: ["United States", "China", "Japan", "Germany", "United Kingdom", "France", "India", "Italy"],
                y: [3427876, 4464876, 1300833, 982067, 556477, 455355, 580755, 448305],
            }

        ];
        const layout = {
            title:'Nominal GDP Sector Composition of Top 8 Countries',
            barmode: 'stack'
        };
        return (
            <PlotlyChart data={data}
                         layout={layout}
                         onClick={this.handleClick}
                         //onHover={this.handleHover}
            />
        );
    }
}

export default Graph1;