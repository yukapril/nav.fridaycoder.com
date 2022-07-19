<template>
  <div class="home-page">
    <h1 class="title">网址收藏</h1>
    <div class="block">
      <input class="search" type="search" v-model="state.search" placeholder="搜索">
    </div>
    <ul class="block tags">
      <li class="tag" v-for="tag in filteredTags" :key="tag" @click="onTagClick(tag)">{{ tag }}</li>
    </ul>
    <ul class="block data">
      <li class="item" v-for="item in filteredList" :key="item.id">
        <div class="l1">
          <div><span class="name">{{ item.name }}</span></div>
          <div><a :href="item.url" target="_blank"><span class="ico-url"/></a></div>
        </div>
        <div class="l2">
          <span class="desc">{{ item.desc }}</span>
        </div>
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
        return data.slice(0, 20)
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
  --white: #fff;
  --border: #eee;
  --border-blue: #0070f3;
  --item-main-color: #444;
  --item-sub-color: #888;

  padding: 1rem;

  .title {
    padding: 1rem 0;
    text-align: center;
    font-size: 2rem;
    color: #333;
  }

  .block {
  }

  .search {
    padding: 1.2rem 2rem;
    width: 100%;
    height: 2rem;
    line-height: 1;
    background-color: var(--white);
    border-radius: 1rem;
    border: 2px solid var(--border);
    font-size: 1.5rem;
    transition: all 0.3s ease-out;

    &:focus, &:hover {
      outline: none;
      border-color: var(--border-blue);
    }
  }

  .tags {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    margin-top: 1rem;

    .tag {
      margin: 0 .6rem .6rem 0;
      padding: .3rem .8rem;
      background-color: var(--white);
      border-radius: 1rem;
      border: 2px solid var(--border);
      font-size: .8rem;
      cursor: pointer;
      transition: all 0.3s ease-out;

      &:hover {
        border-color: var(--border-blue);
      }
    }
  }

  .data {
    list-style: none;

    .item {
      margin: 1rem 0;
      padding: 1.5rem;
      background-color: var(--white);
      border-radius: 1rem;
      border: 2px solid var(--border);
      font-size: .8rem;
      transition: all 0.3s ease-out;

      &:hover {
        border-color: var(--border-blue);
      }

      .l1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .l2 {
        margin-top: .6rem;
      }

      .name {
        font-size: 1.5rem;
        color: var(--item-main-color);
      }

      .desc {
        font-size: .8rem;
        color: var(--item-sub-color);
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        text-decoration: none;
      }

      .ico-url {
        display: block;
        width: 1.2rem;
        height: 1.2rem;
        background-image: url(../assets/url.svg);
        background-size: 100%;
      }
    }
  }
}
</style>
