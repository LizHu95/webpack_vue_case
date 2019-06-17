<template>
    <div class="container-fluid main">
        <!--轮播图-->
        <div id="mycarousel" class="carousel slide" data-ride="carousel" data-interval="3000">
            <ol class="carousel-indicators">
                <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
                <li data-target="#mycarousel" data-slide-to="1"></li>
                <li data-target="#mycarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="../images/1.jpg" alt="First slide">
                </div>
                <div class="carousel-item ">
                    <img class="d-block w-100" src="../images/2.jpg" alt="Second slide">
                </div>
                <div class="carousel-item ">
                    <img class="d-block w-100" src="../images/3.jpg" alt="Third slide">
                </div>
            </div>
        </div>
        <!--/轮播图-->

        <!--导航-->
        <div class="row nav">
            <div class="col-sm-4">
                <a class="nav_item">
                    <img src="../images/menu1.png" alt="">
                    <span>新闻资讯</span>
                </a>
            </div>
            <div class="col-sm-4">
                <a class="nav_item">
                    <img src="../images/menu2.png" alt="">
                    <span>图片分享</span>
                </a>
            </div>
            <div class="col-sm-4">
                <a class="nav_item">
                    <img src="../images/menu3.png" alt="">
                    <span>商品购买</span>
                </a>
            </div>
            <div class="col-sm-4">
                <a class="nav_item">
                    <img src="../images/menu4.png" alt="">
                    <span>留言反馈</span>
                </a>
            </div>
            <div class="col-sm-4">
                <a href="#" class="nav_item">
                    <img src="../images/menu5.png" alt="">
                    <span>视频专区</span>
                </a>
            </div>
            <div class="col-sm-4">
                <a class="nav_item">
                    <img src="../images/menu6.png" alt="">
                    <span>联系我们</span>
                </a>
            </div>
        </div>
    </div>
    <!--/导航-->


</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped lang="scss">
    .main{
        padding: 0;
        margin: 0;
    }

    #carousel {
        width: 100%;
        padding: 0;
    }

    .carousel-inner {
        width: 100%;
    }
    .nav{
        margin-top: 40px;
        div{
            text-align:center;
            .nav_item{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 50px;
                padding: 20px 0;
                img{
                    width: 65%;
                }
            }
        }
    }
    a:visited{
        color:black
    }
    a:hover,a:active{
        opacity: 0.8;
        color:black;
        text-decoration: none;
    }

</style>