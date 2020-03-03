import React from 'react'
import PriceRow from './PriceRow';
import ColorLine from '../styles/colorline';
import { connect } from 'react-redux';
import * as simActions from '../actions/simulatorActions'

class Assets extends React.Component {

    render() {
        return (
            <div>
                <h2 className="h2-title">資産</h2>
                <PriceRow
                    title={"現金/預金"}
                    id={"money"}
                    handleChange={(key, value) => this.props.updateAssets(key, value)}
                    handleOnBlur={() => this.props.sumAssets()}
                    value={this.props.siminfo.assets.display.money} />
                <PriceRow
                    title={"有価証券"}
                    id={"stock"}
                    handleChange={(key, value) => this.props.updateAssets(key, value)}
                    handleOnBlur={() => this.props.sumAssets()}
                    value={this.props.siminfo.assets.display.stock} />
                <PriceRow
                    title={"その他"}
                    id={"otherAsset"}
                    handleChange={(key, value) => this.props.updateAssets(key, value)}
                    handleOnBlur={() => this.props.sumAssets()}
                    value={this.props.siminfo.assets.display.otherAsset} />
                <ColorLine color="gray" />
                <PriceRow
                    title={"資産合計"}
                    id={"asset"}
                    handleChange={(key, value) => this.props.updateTotal(key, value)}
                    handleOnBlur={() => { return; }}
                    value={this.props.siminfo.total.asset.display} />
            </div>
        )
    }
}


const mapStateToProps = state => (
    { siminfo: state.sim }
);

const mapDispatchToProps = dispatch => {
    return {
        updateAssets: (key, value) => dispatch(simActions.updateAssets(key, value)),
        sumAssets: () => dispatch(simActions.sumAssets()),
        updateTotal: (key, value) => dispatch(simActions.updateTotal(key, value)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Assets)