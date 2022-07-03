<template>
  <div class="home-page">
    <h1 class="title">网址收藏</h1>
    <div class="block">
      <input class="search" type="search" v-model="state.search" placeholder="搜索">
    </div>
    <ul class="block tags">
      <li class="tag" v-for="tag in filteredTags" :key="tag" @click="onTagClick(tag)">{{ tag }}</li>
    </ul>
    <ul class=" block datas">
      <li class="data" v-for="item in filteredList" :key="item.id">
        <div class="l1">
          <span class="name">{{ item.name }}</span>
          <span class="desc">{{ item.desc }}</span>
        </div>
        <div class="l2">
          <a :href="item.url" target="_blank">{{ item.url }}</a></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import DATA from '@/data/data'
import { Data, DataItem } from '@/types/data'

const data = DATA.sort(() => Math.random() - 0.5)

const contains = (text: string, find: string, type?: number) => {
  if (type === 1) {
    return text.split('://')[1].toLowerCase().indexOf(find) >= 0
  } else {
    return text.toLowerCase().indexOf(find) >= 0
  }
}

const filterTags = (data: Data): string[] => {
  const set: Set<string> = new Set()
  data.forEach(item => {
    item.tags.forEach(tag => {
      set.add(tag)
    })
  })
  return Array.from(set)
}

export default defineComponent({
  setup () {
    const state = reactive({ search: '' })

    const filteredTags = filterTags(data)

    const filteredList = computed(() => {
      const find = state.search.toLowerCase()
      if (find) {
        return data.filter((item: DataItem) => {
          return contains(item.name, find) ||
            contains(item.desc, find) ||
            contains(item.url, find, 1) ||
            contains(item.tags.join('|'), find)
        })
      } else {
        return data
      }
    })

    const onTagClick = (tag: string) => {
      state.search = tag
    }

    return {
      filteredTags,
      filteredList,
      state,
      onTagClick
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

  .tags {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    margin-top: .5rem;

    .tag {
      margin: 0 1rem 0 0;
      border-bottom: 1px solid #333;
      cursor: pointer;
    }
  }

  .datas {
    list-style: decimal;

    .data {
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
