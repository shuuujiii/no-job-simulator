import React from 'react';
import PriceRow from '../components/PriceRow';
import * as inputjs from '../js/input';
class RegularIncome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                income: "",
            },
            display: {
                income: "",
            },
        };
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
        this.props.updateParentInfo("income", inputjs.InputNumOnly(e.target.value))
    }


    render() {
        return (
            <div>
                <h2 className="h2-title">定期収入</h2>
                <PriceRow
                    title={"定期収入"}
                    id={"income"}
                    handleChange={this.handleChangeInputInfo.bind(this)}
                    handleOnBlur={() => { return; }}
                    value={this.state.display.income} />
            </div>
        )
    }
}

export default RegularIncome