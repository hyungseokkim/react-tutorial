import * as React from 'react';

import Button from '@material-ui/core/Button';

interface IFirstProps {
    button : string,
}

interface IFirstState {
    status : boolean,
}

class First extends React.Component<IFirstProps, IFirstState>{
    constructor(props : IFirstProps){
        super(props);
        
        this.state = { status : false };
    }

    public clickHandler = () => {
        console.log("Hello click");
        this.setState((preState, props)=>{ 
            console.log(props.button);
            return { status : !preState.status };
        })
    }

    public render(){
        return (
            <div className="First">
                <Button onClick={this.clickHandler} variant="contained" color="primary">
                    {this.props.button}
                </Button>
                {this.state.status && <h1>State!!</h1>}
                {this.state.status && <FuncCompo button="">
                    This is Material Button
                </FuncCompo>}
            </div>
        );
    }
}

const FuncCompo : React.SFC<IFirstProps> = (props) => {
    return (
        <h1>
            {props.children}
        </h1>
    )
}

export default First;