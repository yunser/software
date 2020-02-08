<template>
    <ui-page :title="title || page.title" :page="page" ref="page" :backable="backable">
        <div slot="drawer">
            <div class="header">
                <img class="logo" src="/static/img/about.svg">
            </div>
            <ui-list @itemClick="toggle()">
                <!-- <ui-list-item title="首页" to="/">
                    <ui-icon slot="left" value="home"/>
                </ui-list-item> -->
                <ui-list-item title="源码出售" to="/code">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="软件定制" to="/custom">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="源码收购" to="/buy">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <!-- <ui-list-item title="NiceTool" href="http://www.nicetool.net/" target="_blank">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item> -->
                <ui-list-item title="关于" href="https://project.yunser.com/products/23df83203f4711eaa12eb51bcce48c83" target="_blank">
                    <ui-icon slot="left" value="info"/>
                </ui-list-item>
            </ui-list>
            <ui-list @itemClick="toggle()">
            </ui-list>
        </div>
        <slot></slot>
    </ui-page>
</template>

<script>
    export default {
        data() {
            return {
                open: false,
                docked: true
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: 'default'
            },
            page: {
                type: Object,
                default: function () {
                    return {
                        title: '云设'
                    }
                }
            },
            backable: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            toggle() {
                console.log(this.$refs.page)
            }
        }
    }
</script>

<style lang="scss" scoped>
.ic {
    color: #009688;
}
.header {
    padding: 40px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.logo {
    display: block;
    width: 80px;
    margin: 0 auto;
}
</style>
