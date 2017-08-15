<template>
  <div class="page">
    <div class="content">
      <mt-header title="全部" class="top">
        <router-link to="/" slot="left">
          <mt-button class="icon-more"></mt-button>
        </router-link>
        <mt-button class="icon-login" slot="right"></mt-button>
      </mt-header>
      <scroller :on-infinite="getNewsList" class="scroller-wrap">
      <div class="post-list fui-padding-15" v-for="item in topics" :key="item.id">
        <router-link :to="{name:'topic',params:{id:item.id}}">
          <div class="title" flex="dir:top">
            <div flex-box="0" class="fui-text-left fui-margin-bottom-10 nowarp">
              <i class="action-top">{{item.tab|getTitleStr}}</i>
              {{item.title}}
            </div>
            <div flex-box="1" class="summary">
              <div flex="cross:center">
                <img :src="item.author.avatar_url" alt="">
                <div class="info">
                <p class="fui-text-left">
                <span class="name">{{item.author.loginname}}</span>
                <span class="count"><i>{{item.reply_count}}</i>/{{item.visit_count}}</span>
                </p>
                <p class="fui-text-left">
                <time class="time">5月前</time>
                <time class="fromnow">18分钟前</time>
                </p>
                </div>
              </div>
            </div>
          </div>
      </router-link>
    </div>
  </scroller>
  </div>
</div>
</template>
<script>
  import $ from 'webpack-zepto'
  export default {
    data () {
      return {
        scroll: true,
        topics: [],
        searchKey: {
          page: 1,
          limit: 10,
          tab: 'all',
          mdrender: true
        }
      }
    },
    methods: {
      getNewsList (done) {
        this.searchKey.page ++
        let params = $.param(this.searchKey)
        $.get('https://cnodejs.org/api/v1/topics?' + params, (rev) => {
          let topics = rev.data || []
          this.topics = this.topics.concat(topics)
          console.log('=====查询信息====' + this.topics.length)
          if (topics.length < this.limit) {
            setTimeout(() => {
              done && done()
            }, 1000)
            return
          }
          setTimeout(() => {
            done && done()
          }, 1000)
        })
      }
    },
    created () {
      // this.getNewsList()
    }
  }
</script>
<style lang="less">
.content {
  .top {
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, .25);
    color: #333;
    z-index: 99
  }
  .scroller-wrap {
    padding-top: 44px;
    ._v-content {
    padding-bottom: 25px;
  }
  }
  .post-list {
    border-bottom: 1px solid #ddd;
    .title {
      font-weight: bold;
      .nowarp {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .action-top {
        background: #e74c3c;
        color: #fff;
        padding: 5px;
        font-size: .5rem;
        border-radius: 5px;
      }
      .summary {
        span {
            font-size: 13px;
            font-weight: 400;
        }
        img {
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
            border: 1px solid #f3f3f3;
        }
        .info {
            display: block;
            width: 100%;
            flex: 1;
          p {
            padding: 2px 0;
            display: flex;
            color: #34495e;
            height: 18px;
            line-height: 18px;
            .name, .time {
              display: block;
              width: 100%;
              flex: 1;
            }
            time {
              font-size: 12px;
              font-weight: 400;
            }
            i {
              color: #42b983;
            }
          }
        }
      }
    }
  }
}
</style>
