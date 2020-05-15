import * as React from 'react';
import PlotlyChart from 'react-plotlyjs-ts';
import axios from 'axios';

const API_KEY : string = "J54972ODOHYB60PVOIUS";

class Graph1 extends React.Component {
    public handleClick = (evt:any) => alert('click')
    //public handleHover = (evt:any) => alert('그래프위에 마우스가 올려졌습니다.')

    state = {
        dollars: []
      }
    
    componentDidMount() {
    axios.get(`https://api.exchangeratesapi.io/latest?base=USD`)
        .then(res => {
        const dollars = res.data.rates;    

        this.setState({ dollars });
    
        console.log(res.data);
        })
    }

    public render() {
        const data = [
            {
                name: 'primaryGDP',
                type: 'line',
                x:  Object.keys(this.state.dollars),
                y:  Object.values(this.state.dollars)
            }
        ];
        const layout = {
            title:'각 나라별 달러 환율( 기준 : USD)',
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