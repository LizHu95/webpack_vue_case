<template>
    <div class="container-fluid main">
        <header>黑马程序员-Vue项目</header>
        <transition>
            <router-view></router-view>
        </transition>

        <footer class="row">
            <router-link to="/home" class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <span class="oi oi-home" title="home" aria-hidden="true"></span>
                <span class="">首页</span>
            </router-link>
            <router-link to="/message" class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <span class="oi oi-envelope-closed" title="message" aria-hidden="true"></span>
                <span class="">消息</span>
                <span class="badge">4</span>
            </router-link>
            <router-link to="/contacts" class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <span class="oi oi-person" title="contacts" aria-hidden="true"></span>
                <span class="">通讯录</span>
            </router-link>
            <router-link to="/setting" class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <span class="oi oi-target" title="setting" aria-hidden="true"></span>
                <span class="">设置</span>
            </router-link>
        </footer>
    </div>

</template>

<script>
    export default {
        name: "app",

    }
</script>

<style scoped lang="scss">
    .main {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
    }

    header {
        padding: 0;
        width: 100%;
        background: #0AB4F7;
        text-align: center;
        line-height: 120px;
        font-size: 40px;
        color: white;
    }

    footer {
        border-top: 1px solid #999;
        padding: 0;
        margin: 0;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: white;
        height: 180px;
        font-size: 30px;
        a {
            display: flex;
            flex-direction: column;
            align-item: center;
            justify-content: center;
            position: relative;
            span {
                text-align: center;
            }
            .badge {
                position: absolute;
                top: 15%;
                right: 25%;
                background: red;
                color: white;
                font-size: 30px;
            }
            .oi {
                font-size: 80px;
                line-height: 100px;
            }
        }
    }


    a {
        color: #aaa;
    }
    a:hover,
    .router-link-active {
        text-decoration: none;
        color: lightskyblue;
    }

    .v-enter,.v-leave-to {
        opacity: 0;
        transform: translateX(100%);
        position: absolute;
    }
    .v-leave-to{
        transform: translateX(-100%);
    }
    .v-enter-active,
    .v-leave-active {
        transition: all 0.3s ease;
    }


</style>