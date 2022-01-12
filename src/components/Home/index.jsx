import React, {Component} from 'react';
import CirclePacking from "../CirclePacking";
import ReactEcharts from 'echarts-for-react';
import { Statistic, Row, Col, Button, Space, Card } from 'antd';
import graph from "../../assets/graph";

const network = {
    "name": "network",
    "color": "hsl(259, 70%, 50%)",
    "children": [
        {
            "name": "viz",
            "color": "hsl(256, 70%, 50%)",
            "children": [
                {
                    "name": "stack",
                    "color": "hsl(149, 70%, 50%)",
                    "children": [
                        {
                            "name": "cchart",
                            "color": "hsl(19, 70%, 50%)",
                            "loc": 120489
                        },
                        {
                            "name": "xAxis",
                            "color": "hsl(268, 70%, 50%)",
                            "loc": 80248
                        },
                        {
                            "name": "yAxis",
                            "color": "hsl(352, 70%, 50%)",
                            "loc": 104527
                        },
                        {
                            "name": "layers",
                            "color": "hsl(98, 70%, 50%)",
                            "loc": 85406
                        }
                    ]
                },
                {
                    "name": "ppie",
                    "color": "hsl(64, 70%, 50%)",
                    "children": [
                        {
                            "name": "chart",
                            "color": "hsl(171, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pie",
                                    "color": "hsl(160, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "outline",
                                            "color": "hsl(146, 70%, 50%)",
                                            "loc": 160990
                                        },
                                        {
                                            "name": "slices",
                                            "color": "hsl(44, 70%, 50%)",
                                            "loc": 42565
                                        },
                                        {
                                            "name": "bbox",
                                            "color": "hsl(231, 70%, 50%)",
                                            "loc": 192592
                                        }
                                    ]
                                },
                                {
                                    "name": "donut",
                                    "color": "hsl(79, 70%, 50%)",
                                    "loc": 133044
                                },
                                {
                                    "name": "gauge",
                                    "color": "hsl(237, 70%, 50%)",
                                    "loc": 69897
                                }
                            ]
                        },
                        {
                            "name": "legends",
                            "color": "hsl(175, 70%, 50%)",
                            "loc": 157146
                        }
                    ]
                }
            ]
        },
        {
            "name": "colors",
            "color": "hsl(209, 70%, 50%)",
            "children": [
                {
                    "name": "rgb",
                    "color": "hsl(213, 70%, 50%)",
                    "loc": 13313
                },
                {
                    "name": "hsl",
                    "color": "hsl(286, 70%, 50%)",
                    "loc": 5222
                }
            ]
        },
        {
            "name": "utils",
            "color": "hsl(24, 70%, 50%)",
            "children": [
                {
                    "name": "randomize",
                    "color": "hsl(199, 70%, 50%)",
                    "loc": 47558
                },
                {
                    "name": "resetClock",
                    "color": "hsl(39, 70%, 50%)",
                    "loc": 94893
                },
                {
                    "name": "noop",
                    "color": "hsl(295, 70%, 50%)",
                    "loc": 157216
                },
                {
                    "name": "tick",
                    "color": "hsl(116, 70%, 50%)",
                    "loc": 197156
                },
                {
                    "name": "forceGC",
                    "color": "hsl(84, 70%, 50%)",
                    "loc": 95914
                },
                {
                    "name": "stackTrace",
                    "color": "hsl(356, 70%, 50%)",
                    "loc": 98330
                },
                {
                    "name": "dbg",
                    "color": "hsl(296, 70%, 50%)",
                    "loc": 45244
                }
            ]
        },
        {
            "name": "generators",
            "color": "hsl(250, 70%, 50%)",
            "children": [
                {
                    "name": "address",
                    "color": "hsl(189, 70%, 50%)",
                    "loc": 187580
                },
                {
                    "name": "city",
                    "color": "hsl(332, 70%, 50%)",
                    "loc": 29331
                },
                {
                    "name": "animal",
                    "color": "hsl(131, 70%, 50%)",
                    "loc": 175626
                },
                {
                    "name": "movie",
                    "color": "hsl(40, 70%, 50%)",
                    "loc": 136000
                },
                {
                    "name": "user",
                    "color": "hsl(314, 70%, 50%)",
                    "loc": 186154
                }
            ]
        },
        {
            "name": "set",
            "color": "hsl(100, 70%, 50%)",
            "children": [
                {
                    "name": "clone",
                    "color": "hsl(199, 70%, 50%)",
                    "loc": 179272
                },
                {
                    "name": "intersect",
                    "color": "hsl(278, 70%, 50%)",
                    "loc": 163948
                },
                {
                    "name": "merge",
                    "color": "hsl(332, 70%, 50%)",
                    "loc": 156129
                },
                {
                    "name": "reverse",
                    "color": "hsl(235, 70%, 50%)",
                    "loc": 137182
                },
                {
                    "name": "toArray",
                    "color": "hsl(276, 70%, 50%)",
                    "loc": 72738
                },
                {
                    "name": "toObject",
                    "color": "hsl(93, 70%, 50%)",
                    "loc": 10347
                },
                {
                    "name": "fromCSV",
                    "color": "hsl(35, 70%, 50%)",
                    "loc": 130336
                },
                {
                    "name": "slice",
                    "color": "hsl(116, 70%, 50%)",
                    "loc": 194832
                },
                {
                    "name": "append",
                    "color": "hsl(196, 70%, 50%)",
                    "loc": 45114
                },
                {
                    "name": "prepend",
                    "color": "hsl(130, 70%, 50%)",
                    "loc": 180469
                },
                {
                    "name": "shuffle",
                    "color": "hsl(339, 70%, 50%)",
                    "loc": 48875
                },
                {
                    "name": "pick",
                    "color": "hsl(165, 70%, 50%)",
                    "loc": 14965
                },
                {
                    "name": "plouc",
                    "color": "hsl(357, 70%, 50%)",
                    "loc": 20943
                }
            ]
        },
        {
            "name": "text",
            "color": "hsl(234, 70%, 50%)",
            "children": [
                {
                    "name": "trim",
                    "color": "hsl(264, 70%, 50%)",
                    "loc": 40365
                },
                {
                    "name": "slugify",
                    "color": "hsl(339, 70%, 50%)",
                    "loc": 193602
                },
                {
                    "name": "snakeCase",
                    "color": "hsl(240, 70%, 50%)",
                    "loc": 124456
                },
                {
                    "name": "camelCase",
                    "color": "hsl(161, 70%, 50%)",
                    "loc": 140681
                },
                {
                    "name": "repeat",
                    "color": "hsl(63, 70%, 50%)",
                    "loc": 64260
                },
                {
                    "name": "padLeft",
                    "color": "hsl(268, 70%, 50%)",
                    "loc": 112133
                },
                {
                    "name": "padRight",
                    "color": "hsl(30, 70%, 50%)",
                    "loc": 14119
                },
                {
                    "name": "sanitize",
                    "color": "hsl(242, 70%, 50%)",
                    "loc": 34579
                },
                {
                    "name": "ploucify",
                    "color": "hsl(241, 70%, 50%)",
                    "loc": 163305
                }
            ]
        },
        {
            "name": "misc",
            "color": "hsl(338, 70%, 50%)",
            "children": [
                {
                    "name": "greetings",
                    "color": "hsl(264, 70%, 50%)",
                    "children": [
                        {
                            "name": "hey",
                            "color": "hsl(51, 70%, 50%)",
                            "loc": 70024
                        },
                        {
                            "name": "HOWDY",
                            "color": "hsl(28, 70%, 50%)",
                            "loc": 125146
                        },
                        {
                            "name": "aloha",
                            "color": "hsl(136, 70%, 50%)",
                            "loc": 111474
                        },
                        {
                            "name": "AHOY",
                            "color": "hsl(187, 70%, 50%)",
                            "loc": 147328
                        }
                    ]
                },
                {
                    "name": "other",
                    "color": "hsl(150, 70%, 50%)",
                    "loc": 144113
                },
                {
                    "name": "path",
                    "color": "hsl(179, 70%, 50%)",
                    "children": [
                        {
                            "name": "pathA",
                            "color": "hsl(4, 70%, 50%)",
                            "loc": 29647
                        },
                        {
                            "name": "pathB",
                            "color": "hsl(60, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pathB1",
                                    "color": "hsl(16, 70%, 50%)",
                                    "loc": 38079
                                },
                                {
                                    "name": "pathB2",
                                    "color": "hsl(207, 70%, 50%)",
                                    "loc": 10565
                                },
                                {
                                    "name": "pathB3",
                                    "color": "hsl(62, 70%, 50%)",
                                    "loc": 173327
                                },
                                {
                                    "name": "pathB4",
                                    "color": "hsl(223, 70%, 50%)",
                                    "loc": 186598
                                }
                            ]
                        },
                        {
                            "name": "pathC",
                            "color": "hsl(21, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pathC1",
                                    "color": "hsl(88, 70%, 50%)",
                                    "loc": 180083
                                },
                                {
                                    "name": "pathC2",
                                    "color": "hsl(47, 70%, 50%)",
                                    "loc": 143349
                                },
                                {
                                    "name": "pathC3",
                                    "color": "hsl(285, 70%, 50%)",
                                    "loc": 135301
                                },
                                {
                                    "name": "pathC4",
                                    "color": "hsl(78, 70%, 50%)",
                                    "loc": 9556
                                },
                                {
                                    "name": "pathC5",
                                    "color": "hsl(180, 70%, 50%)",
                                    "loc": 53591
                                },
                                {
                                    "name": "pathC6",
                                    "color": "hsl(351, 70%, 50%)",
                                    "loc": 31047
                                },
                                {
                                    "name": "pathC7",
                                    "color": "hsl(151, 70%, 50%)",
                                    "loc": 147529
                                },
                                {
                                    "name": "pathC8",
                                    "color": "hsl(251, 70%, 50%)",
                                    "loc": 178733
                                },
                                {
                                    "name": "pathC9",
                                    "color": "hsl(277, 70%, 50%)",
                                    "loc": 123869
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

const option = {
    dataset: [
        {
            dimensions: ['name', 'age', 'profession', 'score', 'date'],
            source: [
                ['Hannah Krause', 41, 'Engineer', 314, '2011-02-12'],
                ['Zhao Qian', 20, 'Teacher', 351, '2011-03-01'],
                ['Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
                ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
                ['Karle Neumann', 25, 'Engineer', 253, '2011-04-02'],
                ['Adrian Groß', 19, 'Teacher', '-', '2011-01-16'],
                ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
                ['Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
                ['Han Meimei', 67, 'Engineer', 366, '2011-03-12']
            ]
        },
        {
            transform: {
                type: 'sort',
                config: { dimension: 'score', order: 'desc' }
            }
        }
    ],
    xAxis: {
        type: 'category',
        axisLabel: { interval: 0, rotate: 30 }
    },
    yAxis: {},
    series: {
        type: 'bar',
        encode: { x: 'name', y: 'score' },
        datasetIndex: 1
    }
};



const txOption = {
    tooltip: {},
    legend: [
        {
            data: graph.categories.map(function (a) {
                return a.name;
            })
        }
    ],
    series: [
        {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'none',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
                show: true,
                position: 'right',
                formatter: '{b}'
            },
            labelLayout: {
                hideOverlap: true
            },
            scaleLimit: {
                min: 0.4,
                max: 2
            },
            lineStyle: {
                color: 'source',
                curveness: 0.3
            }
        }
    ]
};

export default class Home extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Row>
                        <Col span={6}>
                            <Statistic title="区块数量" value={8} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="交易数量" value={8} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="节点数量" value={2} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="链码数量" value={1} />
                        </Col>
                    </Row>
                </Card>

                <Row>
                    <Col span={12}>
                        <div style={{marginTop: "30px"}}>
                            <Card title="网络架构">
                                <div style={{ height: "500px" }}>
                                    <CirclePacking network={network} />
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div style={{marginTop: "30px"}}>
                            <Card title="交易拓扑">
                                <div>
                                    <ReactEcharts option={txOption} style={{ height: "500px" }} />
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>


            </div>
        );
    }
}
