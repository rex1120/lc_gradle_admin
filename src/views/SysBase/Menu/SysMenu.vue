<template>
    <div class="SysMenu">
        <div class="menu_tree">
            <el-tree
                    :data="data"
                    node-key="id"
                    default-expand-all
                    @node-drag-enter="handleDragEnter"
                    @node-drag-end="handleDragEnd"
                    @node-drop="handleDrop"
                    draggable
                    :allow-drop="allowDrop"
                    :allow-drag="allowDrag">
            </el-tree>
        </div>
        <div class="menu_form">
            <menu-form></menu-form>
        </div>
    </div>
</template>


<script>

    import MenuForm from './MenuForm'

    export default {
        name: "SysMenu",
        props: {},
        components: {
            MenuForm
        },
        data() {
            return {
                data: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2',
                        children: [{
                            id: 11,
                            label: '三级 3-2-1'
                        }, {
                            id: 12,
                            label: '三级 3-2-2'
                        }, {
                            id: 13,
                            label: '三级 3-2-3'
                        }]
                    }, {
                        id: 14,
                        label: '二级 3-2',
                        children: [{
                            id: 15,
                            label: '三级 3-2-1'
                        }, {
                            id: 16,
                            label: '三级 3-2-2'
                        }, {
                            id: 17,
                            label: '三级 3-2-3'
                        }]
                    },
                        {
                            id: 18,
                            label: '二级 3-2',
                            children: [{
                                id: 19,
                                label: '三级 3-2-1'
                            }, {
                                id: 20,
                                label: '三级 3-2-2'
                            }, {
                                id: 21,
                                label: '三级 3-2-3'
                            }]
                        },
                        {
                            id: 22,
                            label: '二级 3-2',
                            children: [{
                                id: 23,
                                label: '三级 3-2-1'
                            }, {
                                id: 24,
                                label: '三级 3-2-2'
                            }, {
                                id: 25,
                                label: '三级 3-2-3'
                            }]
                        },
                        {
                            id: 26,
                            label: '二级 3-2',
                            children: [{
                                id: 27,
                                label: '三级 3-2-1'
                            }, {
                                id: 28,
                                label: '三级 3-2-2'
                            }, {
                                id: 29,
                                label: '三级 3-2-3'
                            }]
                        },
                        {
                            id: 30,
                            label: '二级 3-2',
                            children: [{
                                id: 31,
                                label: '三级 3-2-1'
                            }, {
                                id: 32,
                                label: '三级 3-2-2'
                            }, {
                                id: 33,
                                label: '三级 3-2-3'
                            }]
                        },
                        {
                            id: 34,
                            label: '二级 3-2',
                            children: [{
                                id: 35,
                                label: '三级 3-2-1'
                            }, {
                                id: 36,
                                label: '三级 3-2-2'
                            }, {
                                id: 37,
                                label: '三级 3-2-3'
                            }]
                        },
                        {
                            id: 38,
                            label: '二级 3-2',
                            children: [{
                                id: 39,
                                label: '三级 3-2-1'
                            }, {
                                id: 40,
                                label: '三级 3-2-2'
                            }, {
                                id: 41,
                                label: '三级 3-2-3'
                            }]
                        },
                    ]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            //节点拖拽开始
            handleDragStart(node, ev) {
                console.log('drag start', node);
            },
            //拖拽进入其他节点时触发的事件
            handleDragEnter(draggingNode, dropNode, ev) {
                console.log('tree drag enter: ', dropNode.label);
            },
            //	拖拽离开某个节点时触发的事件
            handleDragLeave(draggingNode, dropNode, ev) {
                console.log('tree drag leave: ', dropNode.label);
            },
            //在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）
            handleDragOver(draggingNode, dropNode, ev) {
                console.log('tree drag over: ', dropNode.label);
            },
            //拖拽结束时（可能未成功）触发的事件
            handleDragEnd(draggingNode, dropNode, dropType, ev) {
                console.log('tree drag end: ', dropNode && dropNode.label, dropType);
            },
            //拖拽成功完成时触发的事件
            handleDrop(draggingNode, dropNode, dropType, ev) {
                console.log('tree drop: ', dropNode.label, dropType);
            },
            //拖拽时判定目标节点能否被放置。
            allowDrop(draggingNode, dropNode, type) {
                if (dropNode.data.label === '二级 3-1') {
                    return type !== 'inner';
                } else {
                    return true;
                }
            },
            //判断节点能否被拖拽
            allowDrag(draggingNode) {
                return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
            }
        }
    }
</script>
<style lang="less" scoped>
    .SysMenu {
        width: 100%;
        max-height: calc(100vh - 100px);
        border: 1px solid #ccc;

        .menu_tree {
            overflow: auto;
            max-height: calc(100vh - 100px);
            width: 22%;
            padding: 10px;
            float: left;
        }

        .menu_form {
            padding: 10px;
            width: 75%;
            overflow: auto;
            max-height: calc(100vh - 100px);
            float: left;
        }
    }
</style>

