<template>
  <div class="home-page">
    <h1 class="title">网址收藏</h1>
    <div class="block">
      <input class="search" type="search" v-model="state.search" placeholder="搜索">
    </div>
    <div class="block">
      <ul class="list">
        <li class="item" v-for="item in filteredList" :key="item.id">
          <div class="l1">
            <span class="name">{{ item.name }}</span>
            <span class="desc">{{ item.desc }}</span>
          </div>
          <div class="l2">
            <a :href="item.url" target="_blank">{{ item.url }}</a></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import DATA from '../data/data'

const contains = (text: string, find: string, type?: number) => {
  if (type === 1) {
    return text.split('://')[1].toLowerCase().indexOf(find) >= 0
  } else {
    return text.toLowerCase().indexOf(find) >= 0
  }
}

export default defineComponent({
  setup () {
    const state = reactive({ search: '' })
    const filteredList = computed(() => {
      const find = state.search.toLowerCase()
      if (find) {
        return DATA.filter(item => {
          return contains(item.name, find) || contains(item.desc, find) || contains(item.url, find, 1)
        })
      } else {
        return DATA
      }
    })

    return {
      filteredList,
      state
    }
  }
})
</script>

<style lang="less" scoped>
.home-page {
  padding: 1rem;

  .title {
    padding: 1rem 0;
    text-align: center;
    font-size: 2rem;
  }

  .block {
  }

  .search {
    padding: 1.2rem 0.5rem;
    width: 100%;
    height: 2rem;
    line-height: 1;
    font-size: 1.5rem;
  }

  .list {
    list-style: decimal;

    .item {
      margin: 1.5rem 1rem;

      .l1 {
        .name {
          font-size: 1.5rem;
          color: #333;
        }

        .desc {
          padding-left: 1rem;
          font-size: 1rem;
          color: #666;
        }
      }

      .l2 {
        a {
          font-size: 1rem;
          color: #999;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
