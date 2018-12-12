import * as React from 'react'
import { render } from 'react-dom';

interface ClickerProps {
    startClickAmount?: number
}

interface ClickerState {
    amountOfClicks: number
}

export default class Clicker extends React.Component<ClickerProps, ClickerState> {

    static defaultProps = {
        startClickAmount: 0
    }

    constructor(props: ClickerProps) {
        super(props)
        this.state = {
            amountOfClicks: props.startClickAmount!
        }
    }

    public onClickInc(): void {
        this.setState({ amountOfClicks: this.state.amountOfClicks + 1 })
    }

    public onClickDec(): void {
        this.setState({ amountOfClicks: this.state.amountOfClicks - 1 })
    }

    public render() {

        return (
            <div>
                <h1> Number of CLicks: {this.state.amountOfClicks}</h1>
                <button
                    onClick={this.onClickInc.bind(this)}
                >
                    +
                </button>
                <button
                    onClick={this.onClickDec.bind(this)}

                >
                    -
                </button>
            </div>
        )
    }
}