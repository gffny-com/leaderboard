'use strict';

const getRoundAnalysis = async event => {
    if (!event || !event.pathParameters || !event.pathParameters.id) {
        console.log('no id passed. invalid request');
        return sendJSONRes(400);
    }
    const roundAnalysis = {
        conditions: '',
        holeByHole: {
            1: {
                number: 1,
                par: 5,
                index: 1,
                score: 6,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            2: {
                number: 2,
                par: 4,
                index: 1,
                score: 5,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            3: {
                number: 3,
                par: 3,
                index: 1,
                score: 5,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            4: {
                number: 4,
                par: 4,
                index: 1,
                score: 5,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            5: {
                number: 5,
                par: 3,
                index: 5,
                score: 6,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            6: {
                number: 6,
                par: 4,
                index: 1,
                score: 5,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            7: {
                number: 7,
                par: 5,
                index: 1,
                score: 7,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            8: {
                number: 1,
                par: 3,
                index: 1,
                score: 4,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            9: {
                number: 1,
                par: 5,
                index: 1,
                score: 7,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            10: {
                number: 10,
                par: 4,
                index: 1,
                score: 5,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            11: {
                number: 11,
                par: 3,
                index: 1,
                score: 4,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            12: {
                number: 12,
                par: 5,
                index: 1,
                score: 5,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            13: {
                number: 13,
                par: 4,
                index: 1,
                score: 7,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            14: {
                number: 1,
                par: 3,
                index: 1,
                score: 3,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            15: {
                number: 15,
                par: 4,
                index: 1,
                score: 7,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            16: {
                number: 16,
                par: 5,
                index: 1,
                score: 6,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            17: {
                number: 17,
                par: 4,
                index: 1,
                score: 8,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
            18: {
                number: 18,
                par: 4,
                index: 1,
                score: 6,
                note: '',
                metrics: {
                    putts: 2,
                    duff: 1,
                    gsShotOutsidePuttableDistance: 1,
                    greenSideShots: 1,
                    approachPulled: 1,
                    firstPuttShort: 1,
                },
            },
        },
    };
    return sendJSONRes(200, roundAnalysis);
};

const sendJSONRes = (status, body) => {
    let response = {
        statusCode: status,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
    return response;
};

module.exports = {
    getRoundAnalysis,
};
