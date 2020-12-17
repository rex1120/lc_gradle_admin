<template>
    <div class="Home">
        <div class="home_body">
            <el-carousel class="banner_cls">
                <el-carousel-item >
                    <img :src="require('@/assets/image/1b93d802946a775e87ca85d8578b7995_gaitubao_520x176.jpg')" style="height:100%;width:100%;" alt="图片丢失了" />
                </el-carousel-item>
                <el-carousel-item >
                    <img :src="require('@/assets/image/56dc85166ec3ac31802f5cf0931ef162_gaitubao_520x176.jpg')" style="height:100%;width:100%;" alt="图片丢失了" />
                </el-carousel-item>
                <el-carousel-item >
                    <img :src="require('@/assets/image/a9187cf4b3f0498795e3d59e9d12273e_gaitubao_520x176.jpg')" style="height:100%;width:100%;" alt="图片丢失了" />
                </el-carousel-item>
            </el-carousel>
            <p v-html="context"></p>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Home",
        props: {},
        components: {},
        data() {
            return {
                context:"<div class=\"blog-content-box\">\n" +
                    "    <div class=\"article-header-box\">\n" +
                    "        <div class=\"article-header\">\n" +
                    "            <div class=\"article-title-box\">\n" +
                    "                <h1 class=\"title-article\" id=\"articleContentId\">Element UI 修改样式不生效（例如修改树形控件节点高度）</h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"article-info-box\">\n" +
                    "                <div class=\"article-bar-top\">\n" +
                    "                    <img class=\"article-type-img\" src=\"https://csdnimg.cn/release/blogv2/dist/pc/img/original.png\" alt=\"\">\n" +
                    "                    <div class=\"bar-content\">\n" +
                    "                    <a class=\"follow-nickName\" href=\"https://me.csdn.net/Jacy_Lee_LDF\" target=\"_blank\" rel=\"noopener\">Jacy_Lee_LDF</a>\n" +
                    "                    <span class=\"time\">2020-08-07 20:15:43</span>\n" +
                    "                    <img class=\"article-read-img article-heard-img\" src=\"https://csdnimg.cn/release/blogv2/dist/pc/img/articleReadEyes.png\" alt=\"\">\n" +
                    "                    <span class=\"read-count\">100</span>\n" +
                    "                    <a id=\"blog_detail_zk_collection\" class=\"un-collection\" data-report-click=\"{&quot;mod&quot;:&quot;popu_823&quot;,&quot;spm&quot;:&quot;1001.2101.3001.4232&quot;,&quot;ab&quot;:&quot;new&quot;}\">\n" +
                    "                        <img class=\"article-collect-img article-heard-img un-collect-status\" style=\"display:inline-block\" src=\"https://csdnimg.cn/release/blogv2/dist/pc/img/tobarCollect.png\" alt=\"\">\n" +
                    "                        <img class=\"article-collect-img article-heard-img collect-status\" style=\"display:none\" src=\"https://csdnimg.cn/release/blogv2/dist/pc/img/tobarCollectionActive.png\" alt=\"\">\n" +
                    "                        <span class=\"name\">收藏</span>\n" +
                    "                        <span class=\"get-collection\">\n" +
                    "                        </span>\n" +
                    "                    </a>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "                <div class=\"blog-tags-box\">\n" +
                    "                    <div class=\"tags-box artic-tag-box\">\n" +
                    "                            <span class=\"label\">分类专栏：</span>\n" +
                    "                                <a class=\"tag-link\" href=\"https://blog.csdn.net/jacy_lee_ldf/category_10277535.html\" target=\"_blank\" rel=\"noopener\">ElemenUI</a>\n" +
                    "                            <span class=\"label\">文章标签：</span>\n" +
                    "                                <a data-report-click=\"{&quot;mod&quot;:&quot;popu_626&quot;,&quot;spm&quot;:&quot;1001.2101.3001.4223&quot;,&quot;strategy&quot;:&quot;vue.js&quot;,&quot;ab&quot;:&quot;new&quot;}\" class=\"tag-link\" href=\"https://www.csdn.net/gather_28/MtTaAg1sMzU2My1ibG9n.html\" target=\"_blank\" rel=\"noopener\">vue.js</a>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "                <div class=\"up-time\"><span>最后发布:2020-08-07 20:15:43</span><span>首次发布:2020-08-07 20:15:43</span></div>\n" +
                    "                <div class=\"slide-content-box\">\n" +
                    "                    <div class=\"article-copyright\">\n" +
                    "                        <div class=\"creativecommons\">\n" +
                    "                            版权声明：本文为博主原创文章，遵循<a href=\"http://creativecommons.org/licenses/by-sa/4.0/\" target=\"_blank\" rel=\"noopener\"> CC 4.0 BY-SA </a>版权协议，转载请附上原文出处链接和本声明。\n" +
                    "                        </div>\n" +
                    "                        <div class=\"article-source-link\">\n" +
                    "                            本文链接：<a href=\"http://blog.csdn.net/Jacy_Lee_LDF/article/details/107869610\" target=\"_blank\">http://blog.csdn.net/Jacy_Lee_LDF/article/details/107869610</a>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "                <div class=\"operating\">\n" +
                    "                    <a class=\"href-article-edit slide-toggle\">版权</a>\n" +
                    "                </div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "    <article class=\"baidu_pl\">\n" +
                    "        <div id=\"article_content\" class=\"article_content clearfix\">\n" +
                    "        <link rel=\"stylesheet\" href=\"https://csdnimg.cn/release/blogv2/dist/mdeditor/css/editerView/ck_htmledit_views-0dfae4df86.css\">\n" +
                    "                <div id=\"content_views\" class=\"htmledit_views\">\n" +
                    "                    <p>很多时候 Element UI 组件自带的样式不是我想要的，通过检查元素获取到组件的 class 名称，在style里面去重写，比如树形控件的节点高度，结果发现不起作用，这个问题困扰了我好几天，真的好几天，连百度相关词条都有，硬是找不到解决办法，今天也不知道哪根筋搭对了，我把 样式标签&nbsp; &lt;style scoped&gt;&lt;/style&gt; 里面的 scoped 去掉，样式就生效了。</p> \n" +
                    "<pre><code class=\"language-css hljs\"><ol class=\"hljs-ln\"><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"1\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\">&lt;<span class=\"hljs-selector-tag\">style</span> <span class=\"hljs-selector-tag\">scoped</span>&gt; &lt;/<span class=\"hljs-selector-tag\">style</span>&gt;</div></div></li><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"2\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\">==&gt;</div></div></li><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"3\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\">&lt;<span class=\"hljs-selector-tag\">style</span>&gt; &lt;/<span class=\"hljs-selector-tag\">style</span>&gt;</div></div></li></ol></code><div class=\"hljs-button {2}\" data-title=\"复制\" data-report-click=\"{&quot;spm&quot;:&quot;1001.2101.3001.4259&quot;}\" onclick=\"hljs.copyCode(event)\"></div></pre> \n" +
                    "<p><strong>关于style标签上使用scoped ：</strong></p> \n" +
                    "<p><strong>在vue组件中，为了使样式私有化（模块化），不对全局造成污染，可以在style标签上添加scoped属性以表示它的只属于当下的模块，这是一个非常好的举措，但是要慎用！因为在我们需要修改公共组件（三方库或者项目定制的组件）的样式的时候，scoped往往会造成更多的困难，需要增加额外的复杂度，就比如重写样式不生效这种问题。</strong></p> \n" +
                    "<p>最终问题解决，之前没深究，直接用了scoped，踩了坑，以后不会了，但是该用的时候还是要用的。</p> \n" +
                    "<p>&nbsp;</p> \n" +
                    "<p>2020.08.09 更新：</p> \n" +
                    "<p>百度发现了更好的方式，上面的知识可以歇菜了！</p> \n" +
                    "<p>vue引用了第三方组件，需要在组件中局部修改第三方组件的样式，而又不想去除scoped属性造成组件之间的样式污染。</p> \n" +
                    "<p>可以通过 &gt;&gt;&gt;，穿透scoped。</p> \n" +
                    "<pre><code class=\"language-css hljs\"><ol class=\"hljs-ln\"><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"1\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\">&lt;<span class=\"hljs-selector-tag\">style</span> <span class=\"hljs-selector-tag\">scoped</span>&gt;</div></div></li><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"2\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\">    外层 &gt;&gt;&gt; 第三方组件类名{</div></div></li><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"3\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\">        样式</div></div></li><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"4\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\">    }</div></div></li><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"5\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\">&lt;/<span class=\"hljs-selector-tag\">style</span>&gt;</div></div></li></ol></code><div class=\"hljs-button {2}\" data-title=\"复制\" data-report-click=\"{&quot;spm&quot;:&quot;1001.2101.3001.4259&quot;}\" onclick=\"hljs.copyCode(event)\"></div></pre> \n" +
                    "<p>有些Sass 、Less之类的预处理器无法正确解析&nbsp;<code>&gt;&gt;&gt;</code>。可以使用&nbsp;<code>/deep/</code>操作符( &gt;&gt;&gt; 的别名)</p> \n" +
                    "<pre><code class=\"hljs xml\"><ol class=\"hljs-ln\"><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"1\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">style</span> <span class=\"hljs-attr\">lang</span>=<span class=\"hljs-string\">\"sass\"</span> <span class=\"hljs-attr\">scoped</span>&gt;</span></div></div></li><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"2\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\">/deep/  第三方组件类名 {</div></div></li><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"3\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\">      样式</div></div></li><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"4\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\">  }</div></div></li><li><div class=\"hljs-ln-numbers\"><div class=\"hljs-ln-line hljs-ln-n\" data-line-number=\"5\"></div></div><div class=\"hljs-ln-code\"><div class=\"hljs-ln-line\"><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">style</span>&gt;</span></div></div></li></ol></code><div class=\"hljs-button {2}\" data-title=\"复制\" data-report-click=\"{&quot;spm&quot;:&quot;1001.2101.3001.4259&quot;}\" onclick=\"hljs.copyCode(event)\"></div></pre> \n" +
                    "<p>原文：</p> \n" +
                    "<p><a href=\"https://blog.csdn.net/idomyway/article/details/94659598\">https://blog.csdn.net/idomyway/article/details/94659598</a></p> \n" +
                    "<p>问题解决，感谢博主大佬！</p>\n" +
                    "                </div><div><div></div></div>\n" +
                    "        </div>\n" +
                    "    </article>\n" +
                    "</div>" };
        },
        mounted() {
        },
        methods: {
            setImgSize: function () {
                this.bannerHeight = 740 / 2560 * this.screenWidth;
                if(this.bannerHeight > 740) this.bannerHeight = 740;
                if(this.bannerHeight < 360) this.bannerHeight = 360;
            }


        },
    }
</script>
<style lang="less" scoped>
    .Home {
        .home_body {
            height: 800px; //注意，给个高度才有效果
            .banner_cls{
                padding: 0px 10px 0px 0px;
            }
        }

        .back {
            border-radius: 20px;
        }
    }
</style>
