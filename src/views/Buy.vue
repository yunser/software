<template>
    <my-page title="源码收购" :page="page">
        <div class="common-container container">
            <ui-article>
                <h2>介绍</h2>
                <p>云设长期收购各种小应用的源码，价格从几百块到上千块。具体要求如下：</p>
                <ul>
                    <li>Web 应用，纯前端实现，不依赖任何接口。</li>
                    <!-- <li>开箱即用的小应用，解决某一个需求，没有多余的功能。</li> -->
                    <li>代码规范良好，使用 React 或 Vue 等主流框架。</li>
                    <li>功能不与云设已有的应用重复，除非体验更佳。</li>
                </ul>
                <p>如果你有闲置的代码符合要求，可以考虑出售给我们。</p>
                <p>有意者加站长 QQ（1418503647，备注出售源码）或邮箱（1418503647@qq.com）咨询。</p>

                <h2>交易流程</h2>
                <ul>
                    <li>出售者编译好源码，发布到线上或发给我们进行测试验收。</li>
                    <li>测试通过后，我们给出售者一半的定金。</li>
                    <li>出售者打包源码发给我们。</li>
                    <li>我们支付剩下的金额。</li>
                </ul>
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                version: '',
                page: {
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'search',
                        //     href: 'https://search.yunser.com?utm_source=calculator',
                        //     target: '_blank',
                        //     title: '搜索'
                        // },
                        // {
                        //     type: 'icon',
                        //     icon: 'apps',
                        //     href: 'https://app.yunser.com?utm_source=about',
                        //     target: '_blank',
                        //     title: '应用'
                        // }
                    ]
                }
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
.container {
    max-width: 480px;
}
</style>
