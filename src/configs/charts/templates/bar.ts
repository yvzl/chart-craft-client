import {IBarTemplate} from "@/types";

export const barTemplate: IBarTemplate = {
    option: {
        title: {
            show: true,
            text: "柱形图",
            textStyle: {
                color: "#068ccfff",
                fontStyle: "normal",
                fontWeight: 900,
                fontFamily: "sans-serif",
                fontSize: 16,
            },
            subtext: "",
            subtextStyle: {
                color: "#aaa",
                fontStyle: "normal",
                fontWeight: 500,
                fontFamily: "sans-serif",
                fontSize: 14
            },
            textAlign: "center",
            textVerticalAlign: "top",
            itemGap: 10,
            top: "0",
            bottom: "0",
            left: "50%",
            right: "50%",
        },
        xAxis: {
            type: "category",
            show: true,
            offset: 0,
            name: "",
            nameLocation: "end",
            nameTextStyle: {
                color: "#333",
                fontStyle: "normal",
                fontWeight: 100,
                fontFamily: "sans-serif",
                fontSize: 12,
                align: "center",
                verticalAlign: "middle"
            },
            nameGap: 15,
            nameRotate: 0,
            inverse: false,
            min: "dataMin",
            max: "dataMax",
            axisLine: {
                show: true,
                symbol: "none",
                lineStyle: {
                    color: "#333",
                    width: 1,
                    type: "solid",
                    opacity: 1
                }
            },
            axisTick: {
                show: true,
                alignWithLabel: false,
                interval: 0,
                inside: false,
                length: 5,
                lineStyle: {
                    color: "#333",
                    width: 1,
                    type: "solid",
                    opacity: 1
                }
            },
            axisLabel: {
                show: true,
                inside: false,
                interval: 0,
                rotate: 0,
                margin: 15,
                color: "#333",
                fontSize: 12,
                fontWeight: 400,
                fontFamily: "sans-serif",
                fontStyle: "normal",
                align: "center",
                verticalAlign: "middle",
            },
            splitLine: {
                show: false,
                interval: 0,
                lineStyle: {
                    color: "#333",
                    width: 1,
                    type: "solid",
                    opacity: 1,
                }
            },
            axisPointer: {
                show: true,
                type: "shadow",
                snap: false,
                label: {
                    show: false,
                    margin: 3,
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: 100,
                    fontFamily: "sans-serif",
                    fontSize: 12,
                    width: 50,
                    height: 10,
                },
                lineStyle: {
                    color: "#555",
                    width: 1,
                    type: "solid",
                    opacity: 1,
                },
                shadowStyle: {
                    opacity: 1
                },
                triggerEmphasis: true,
                triggerTooltip: true
            },
        },
        yAxis: {
            type: "value",
            show: true,
            offset: 0,
            name: "",
            nameLocation: "end",
            nameTextStyle: {
                color: "#333",
                fontStyle: "normal",
                fontWeight: 100,
                fontFamily: "sans-serif",
                fontSize: 12,
                align: "center",
                verticalAlign: "middle"
            },
            nameGap: 15,
            nameRotate: 0,
            inverse: false,
            min: "dataMin",
            max: "dataMax",
            axisLine: {
                show: true,
                symbol: "none",
                lineStyle: {
                    color: "#333",
                    width: 1,
                    type: "solid",
                    opacity: 1
                }
            },
            axisTick: {
                show: true,
                inside: false,
                length: 5,
                lineStyle: {
                    color: "#333",
                    width: 1,
                    type: "solid",
                    opacity: 1
                }
            },
            axisLabel: {
                show: true,
                inside: false,
                rotate: 0,
                margin: 10,
                color: "#333",
                fontSize: 12,
                fontWeight: 400,
                fontFamily: "sans-serif",
                fontStyle: "normal",
                align: "right",
                verticalAlign: "middle",
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "#333",
                    width: 1,
                    type: "solid",
                    opacity: 1,
                }
            },
            axisPointer: {
                show: true,
                type: "shadow",
                snap: false,
                label: {
                    show: false,
                    margin: 3,
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: 100,
                    fontFamily: "sans-serif",
                    fontSize: 12,
                    width: 50,
                    height: 10,
                },
                lineStyle: {
                    color: "#555",
                    width: 1,
                    type: "solid",
                    opacity: 1,
                },
                shadowStyle: {
                    opacity: 0.3
                },
                triggerEmphasis: true,
                triggerTooltip: true
            },
        },
        grid: {
            show: false,
            left: "10%",
            top: "60",
            right: "10%",
            bottom: "60",
            width: "auto",
            height: "auto"
        },
        legend: {
            show: true,
            type: "scroll",
            top: "95%",
            bottom: "0",
            left: "35%",
            right: "25%",
            orient: "horizontal",
            align: "left",
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            itemStyle: {
                opacity: 1
            },
            symbolRotate: 0,
            selectedMode: true,
            textStyle: {
                color: "#333",
                fontStyle: "normal",
                fontWeight: 400,
                fontFamily: "sans-serif",
                fontSize: 12
            },
            icon: "roundRect",
        },
        tooltip: {
            show: true,
            trigger: "axis",
            showContent: true,
            alwaysShowContent: false,
            triggerOn: "mousemove",
            enterable: false,
            confine: true,
            backgroundColor: "rgba(50,50,50,0.7)",
            borderColor: "#333",
            borderWidth: 0,
            textStyle: {
                color: "#fff",
                fontStyle: "normal",
                fontWeight: 100,
                fontFamily: "sans-serif",
                fontSize: 14,
            },
            transitionDuration: 0.4
        },
        series: {
            type: "bar",
            showBackground: false,
            backgroundStyle: {
                opacity: 1
            },
            label: {
                show: false,
                rotate: 0,
                fontStyle: "normal",
                fontWeight: 100,
                fontFamily: "sans-serif",
                fontSize: 12,
                distance: 5,
                align: "center",
                verticalAlign: "middle",
                position: "inside"
            },
            itemStyle: {
                borderRadius: 100,
                opacity: 1
            },
        }
    },
    xData: ["图书", "家居厨具", "家用电器", "手机数码", "服装箱包", "汽车用品", "电脑办公", "运动户外"],
    yData: ["东北", "华东", "华中", "华北", "华南", "西北", "西南"],
    seriesData: [
        [522, 1566, 329, 1528, 337, 229, 710],
        [1036, 3031, 593, 4176, 525, 611, 1221],
        [1042, 3372, 633, 4441, 711, 515, 1231],
        [744, 2607, 446, 3322, 795, 495, 986],
        [647, 1189, 267, 2081, 376, 444, 550],
        [537, 2081, 343, 2059, 378, 215, 753],
        [1113, 3031, 422, 3494, 598, 269, 857]
    ],
    colorData: ["#ff7f50", "#87cefa", "#da70d5", "#32cd33", "#6395ec", "#6395ec", "#ba56d4", "#cd5d5c"]
}