import * as React from 'react'
import { render } from 'react-dom';

interface ClickerProps {
    startClickAmount?: number
}

interface ClickerState {
    amountOfClicks: number
}

export default class Clicker extends React.Component<ClickerProps, ClickerState> {

    constructor(props: ClickerProps) {
        super(props)
        this.state = {
            amountOfClicks: props.startClickAmount!
        }
    }

    public render() {

        return (<h1> Number of CLicks: {this.state.amountOfClicks}</h1>)
    }
}
