<template>
  <div class="page">
    <mt-header title="全部" class="top">
        <router-link to="/" slot="left">
          <mt-button class="icon-more"></mt-button>
        </router-link>
        <mt-button class="icon-login" slot="right"></mt-button>
    </mt-header>
    <h2 class="topic-title">
      {{topic.title}}
    </h2>
    <section class="author-info" flex="cross:center">
      <img :src="topic.author.avatar_url" alt="" class="avatar fui-margin-right-15">
      <div class="col">
        <span>{{topic.author.loginname}}</span>
        <time>发布于：3月前</time>
      </div>
      <div class="right">
        <span :class="topic.tab|getTitleStyle">{{topic.tab|getTitleStr}}</span>
        <span class="name">{{topic.visit_count}}次浏览</span>
      </div>
    </section>
    <section class='markdown-body topic-content fui-text-left' v-html="topic.content">
    </section>
  </div>
</template>
<script>
  import $ from 'webpack-zepto'
  export default {
    data () {
      return {
        topic: {},
        topicId: ''

      }
    },
    mounted () {
      this.topicId = this.$route.params.id
      $.get('https://cnodejs.org/api/v1/topic/' + this.topicId, (rev) => {
        console.log('详情：' + rev)
        this.topic = rev.data || {}
      })
    }
  }
</script>
<style lang="less">
  .page {
    .top {
      background-color: #fff;
      box-shadow: 0 0 4px rgba(0, 0, 0, .25);
      color: #333;
      z-index: 99
    }
    .topic-title {
      padding: 5px;
      margin: 15px;
      font-size: 18px;
      color: #2c3e50;
      line-height: 1.5;
      background-color: #f0f0f0;
      border-radius: 5px;
      text-align: left;
      font-weight: bold;
    }
    .author-info {
      color: #34495e;
      font-size: 12px;
      padding: 0 15px;
      span,time {
        display: block;
        padding: 2px 0;
      }
      .col {
        display: block;
        width: 100%;
        flex: 1;
        text-align: left;
      }
      .right {
        text-align: center;
        span:first-child {
          border-radius: 5px;
          color: #fff;
          display: block;
          height: 23px;
          line-height: 22px;
          text-align: center;
        }
        span.share-bg {
          background: #1abc9c;
        }
        span.ask-bg {
          background: #3498db;
        }
        span.good-bg {
          background: #e67e22;
        }
        span.jb-bg {
          background: #9b59b6;
        }
      }
      .avatar {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
</style>
