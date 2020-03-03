import * as actiontype from '../actions/type';
import * as parsejs from '../js/parse';
import * as inputjs from '../js/input';

const initialState = {
    assets: {
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
    },
    income: {
        info: {
            income: "",
        },
        display: {
            income: "",
        },
    },
    exincome: {
        selected: 0,
        info: {
            exincome: Array(12).fill(""),
        },
        display: {
            exincome: Array(12).fill(""),
        },
    },
    payments: {
        info: {
            food: "",
            rent: "",
            utility: "",
            communication: "",
            clothes: "",
            daily: "",
            hobby: "",
            education: "",
            transportation: "",
            otherPayment: "",
        },
        display: {
            food: "",
            rent: "",
            utility: "",
            communication: "",
            clothes: "",
            daily: "",
            hobby: "",
            education: "",
            transportation: "",
            otherPayment: "",
        },
    },
    expayments: {
        selected: 0,
        info: {
            expayments: Array(12).fill(""),
        },
        display: {
            expayments: Array(12).fill(""),
        },
    },
    total: {
        asset: {
            info: "",
            display: "",
        },
        payment: {
            info: "",
            display: "",
        },
    },

}

export default function (state = initialState, action) {
    switch (action.type) {
        case actiontype.FETCH_DATA:
            return state;
        case actiontype.UPDATE_ASSETS:
            return {
                ...state,
                assets: {
                    info: {
                        ...state.assets.info,
                        [action.payload.key]: action.payload.input,
                    },
                    display: {
                        ...state.assets.display,
                        [action.payload.key]: action.payload.display,
                    },
                },
            }
        case actiontype.SUM_ASSETS:
            let total = Object.values({ ...state.assets.info }).reduce((ac, cur) => ac + parsejs.parseIntZero(cur), 0)
            return {
                ...state,
                total: {
                    ...state.total,
                    asset: {
                        info: total,
                        display: inputjs.InputComma(total.toString()),
                    }
                }
            }
        case actiontype.UPDATE_INCOME:
            return {
                ...state,
                income: {
                    info: {
                        ...state.assets.info,
                        [action.payload.key]: action.payload.input,
                    },
                    display: {
                        ...state.assets.display,
                        [action.payload.key]: action.payload.display,
                    },
                },
            }
        case actiontype.UPDATE_EX_INCOME_SELECTED:
            return {
                ...state,
                exincome: {
                    ...state.exincome,
                    selected: action.payload.index,
                },
            }
        case actiontype.UPDATE_EX_INCOME:
            return {
                ...state,
                exincome: {
                    ...state.exincome,
                    info: {
                        // ...state.exincome.info,
                        exincome: [...state.exincome.info.exincome].map((item, index) => {
                            if (index !== state.exincome.selected) {
                                return item
                            }
                            return action.payload.input
                        })
                        // exincome: [...state.exincome.info.exincome.slice(0, state.exincome.selected), action.payload.input, ...state.exincome.info.exincome.slice(state.exincome.selected + 1)]
                    },
                    display: {
                        // ...state.exincome.display,
                        exincome: [...state.exincome.display.exincome].map((item, index) => {
                            if (index !== state.exincome.selected) {
                                return item
                            }
                            return action.payload.display
                        })
                        // exincome: [...state.exincome.display.exincome.slice(0, state.exincome.selected), action.payload.display, ...state.exincome.display.exincome.slice(state.exincome.selected + 1)]
                    },
                },
            }
        case actiontype.UPDATE_PAYMENTS:
            return {
                ...state,
                payments: {
                    info: {
                        ...state.payments.info,
                        [action.payload.key]: action.payload.input,
                    },
                    display: {
                        ...state.payments.display,
                        [action.payload.key]: action.payload.display,
                    },
                },
            }
        case actiontype.SUM_PAYMENTS:
            let paymentsTotal = Object.values({ ...state.payments.info }).reduce((ac, cur) => ac + parsejs.parseIntZero(cur), 0)
            return {
                ...state,
                total: {
                    ...state.total,
                    payment: {
                        info: paymentsTotal,
                        display: inputjs.InputComma(paymentsTotal.toString()),
                    }
                }
            }
        case actiontype.UPDATE_EX_PAYMENTS_SELECTED:
            return {
                ...state,
                expayments: {
                    ...state.expayments,
                    selected: action.payload.index,
                },
            }
        case actiontype.UPDATE_EX_PAYMENTS:
            return {
                ...state,
                expayments: {
                    ...state.expayments,
                    info: {
                        expayments: [...state.expayments.info.expayments].map((item, index) => {
                            if (index !== state.expayments.selected) {
                                return item
                            }
                            return action.payload.input
                        })
                    },
                    display: {
                        expayments: [...state.expayments.display.expayments].map((item, index) => {
                            if (index !== state.expayments.selected) {
                                return item
                            }
                            return action.payload.display
                        })

                    },
                },
            }
        case actiontype.UPDATE_TOTAL:
            return {
                ...state,
                total: {
                    ...state.total,
                    [action.payload.key]: {
                        info: action.payload.input,
                        display: action.payload.display,
                    }
                },
            }
        default:
            return state;
    }
}
