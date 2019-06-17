<template>
    <div class="container-fluid main">
        <header>黑马程序员-Vue项目</header>
        <div class="content">
            <router-view></router-view>
        </div>
        <footer class="row">
            <router-link to="/home" class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <span class="oi oi-home" title="home" aria-hidden="true"></span>
                <span class="">首页</span>
            </router-link>
            <router-link to="/message" class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <span class="oi oi-envelope-closed" title="message" aria-hidden="true"></span>
                <span class="">消息</span>
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

<style scoped>
    .main{
        height: 100%;
        width: 100%;
        padding: 0;
        background: #ddd;
    }
    header{
        width: 100%;
        background: #0AB4F7;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        color:white;
    }
    .content{
        height: 20px;
    }
    footer{
        margin: 0;
        padding: 0;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: white;
        height: 85px;
    }
    .oi{
        font-size:40px
    }
    footer a{
        display: flex;
        flex-direction: column;
        align-item: center;
        justify-content: center;
    }
    footer a span{
        text-align: center;
    }
    a{
        color: #aaa;
    }
    a:hover,
    a:active{
        text-decoration: none;
        color:lightskyblue;
    }
</style>