import type { TableData } from "@/type/TableData"
const data: TableData = {
    fetchFun(self, data) {
        self.showText = "基础表格演示"
        return self.api?.test1GetList(data)//self.api?.test1GetList是在src/api目录下的同名文件，会自动引入
    },
    fliter: [
        {
            key: "test_input",
            name: "测试",
            emptyLabel: "测试xxx",
            type: "input"
        },
        {
            key: "test_select1",
            name: "测试1",
            type: "select",
            items: [
                {
                    key: "",
                    name: "全部"
                },
                {
                    key: "1",
                    name: "测试1"
                },
                {
                    key: "2",
                    name: "测试2"
                },
            ],
            value: ""
        },
        {
            key: "test_select2",
            name: "测试2",
            type: "select",
            getItems() {
                return [
                    {
                        key: "",
                        name: "全部"
                    },
                    {
                        key: "1",
                        name: "测试1"
                    },
                    {
                        key: "2",
                        name: "测试2"
                    },
                ]
            },
            value: ""
        },
        {
            name: '时间',
            key: "time",
            startKey: 'start_time',
            endKey: 'end_time',
            type: "datetimerange",
            getValue(self) {
                console.log(self.methods)
                return self.methods?.utils?.defaultDate() //self.methods?.utils为src/utils/index中的所有函数
            },
        },
        {
            type: "onlyFun",
            onlyFun: {
                title: "查看api",
                fun(self) {
                    console.log(self.api)
                },
            }
        }
    ],
    tableColumns: [
        { key: "id", name: "ID", width: "200px", showJson: "*" },
        {
            key: "title", name: "标题", width: "200px", editor: {
                type: "dialogForm",
                form: {
                    type: "text",
                    key: "title",
                    primary: "id",
                    title: "编辑测试",
                    data: [
                        {
                            key: "title",
                            name: "标题",
                            type: "input"
                        }
                    ],
                    subFun(self, data) {
                        return self.api?.apiTest(data)// self.api?.apiTest是固定有的，在TableLayout里写入的，用于测试api，将传入内容打印到控制台
                    },
                }
            }
        },
        {
            key: "content", name: "正文", editor: {
                type: "input",
                subFun(self, data) {
                    return self.api?.apiTest(data)
                },
            }
        },
        {
            key: "status", name: "状态", width: "200px", editor: {
                type: "switch",
                openValue: "1",
                closeValue: "2",
                subFun(self, data) {
                    return self.api?.apiTest(data)// self.api?.apiTest是固定有的，在TableLayout里写入的，用于测试api，将传入内容打印到控制台
                },
            }
        },
        {
            key: "config", name: "配置", width: "400px", editor: {
                type: "json",
                subFun(self, data) {
                    return self.api?.apiTest(data)// self.api?.apiTest是固定有的，在TableLayout里写入的，用于测试api，将传入内容打印到控制台
                },
            }
        },
        { key: "fliter", name: "过滤", width: "400px", showJson: "fliter" },
        {
            key: "table_tools", name: "操作", buttons: [
                {
                    type: "dialogForm",
                    form: {
                        type: "warning",
                        primary: "id",
                        title: "编辑测试",
                        data: [
                            {
                                key: "title",
                                name: "标题",
                                type: "input"
                            },
                            {
                                key: "content",
                                name: "正文",
                                type: "input"
                            },
                            {
                                key: "num",
                                name: "只能输入数字",
                                type: "input",
                                must: true,
                                validator(self, data) {
                                    const value = data.num
                                    if (!self.methods?.utils?.isNumber(value)) {
                                        return "不是数字"
                                    }
                                    return ""
                                },
                                getValue(self, row) {
                                    return row.id
                                },
                            },
                            {
                                key: "status",
                                name: "状态",
                                type: "switch",
                                openValue: "1",
                                closeValue: "2",
                            }
                        ],
                        subFun(self, data) {
                            return self.api?.apiTest(data)// self.api?.apiTest是固定有的，在TableLayout里写入的，用于测试api，将传入内容打印到控制台
                        },
                    }
                },
                {
                    type: "popoverConfirm",
                    confirm: {
                        primary: "id",
                        title: "删除",
                        confirmContent: "删除测试",
                        subFun(self, data) {
                            return self.api?.apiTest(data)// self.api?.apiTest是固定有的，在TableLayout里写入的，用于测试api，将传入内容打印到控制台
                        },
                    }
                }
            ]
        }
    ]
}

export default data