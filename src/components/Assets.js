import React from 'react'
import PriceRow from './PriceRow';
import ColorLine from '../styles/colorline';
import * as inputjs from '../js/input';
import * as calcjs from '../js/calc';

class Assets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {
                money: "",
                stock: "",
                otherAsset: "",
            },
            display: {
                money: "",
                stock: "",
                otherAsset: "",
            },
            asset: {
                info: "",
                display: "",
            },
        }
    }

    handleChangeInputInfo(e) {
        this.setState({
            ...this.state,
            info: {
                ...this.state.info,
                [e.target.name]: inputjs.InputNumOnly(e.target.value),
            },
            display: {
                ...this.state.display,
                [e.target.name]: inputjs.InputComma(e.target.value),
            }
        });
    }

    handleOnBlurInfo() {
        let sum = calcjs.getValueSumOfKeyValueObj({ ...this.state.info });
        this.updateAsset(sum)
    }

    handleChangeInputAsset(e) {
        this.updateAsset(e.target.value);
    }

    // !!!updateParentProps!!!;
    updateAsset(asset) {
        this.setState({
            ...this.state,
            asset: {
                info: asset,
                display: inputjs.InputComma(asset.toString()),
            }
        })
        this.props.updateParentInfo("asset", asset)
    }

    render() {
        return (
            <div>
                <h2 className="h2-title">資産</h2>
                <PriceRow
                    title={"現金/預金"}
                    id={"money"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.money} />
                <PriceRow
                    title={"有価証券"}
                    id={"stock"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.stock} />
                <PriceRow
                    title={"その他"}
                    id={"otherAsset"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={this.handleOnBlurInfo.bind(this)}
                    value={this.state.display.otherAsset} />
                <ColorLine color="gray" />
                <PriceRow
                    title={"資産合計"}
                    id={"asset"}
                    handleChange={this.handleChangeInputAsset.bind(this)}
                    handleOnBlur={() => { return; }}
                    value={this.state.asset.display}
                />
            </div>
        )
    }
}

export default Assets