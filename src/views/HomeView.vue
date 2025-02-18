<template>
  <div class="home-page">
    <h1 class="title">网址收藏导航</h1>

    <div class="search-box">
      <input class="search" type="search" v-model="search" placeholder="输入关键词（支持使用空格分隔多个关键词）">
      <span class="search-icon">🔍</span>
    </div>

    <ul class="tags">
      <li class="tag" v-for="tag in filteredTags" :key="tag" @click="onTagClick(tag)">{{ tag }}</li>
    </ul>

    <div class="data-tips">
      <span>搜索结果条数：</span>
      <span>{{ filteredList.length }}</span>
    </div>

    <ul class="data">
      <li class="item" v-for="item in filteredList" :key="item.id">
        <div class="l1">
          <div><span class="name">{{ item.name }}</span></div>
          <div class="visit-btn">
            <a :href="item.url" target="_blank" class="link-button">
              <span class="ico-url">访问</span>
            </a>
          </div>
        </div>
        <div class="l2">
          <span class="desc">{{ item.desc }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import DATA from '../data/data'
import { Data, DataItem } from '../types/data'

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
  setup() {
    const router = useRouter()
    const route = useRoute()
    const { q } = route.query

    const search = ref(typeof q === 'string' ? q : '')

    const filteredTags = filterTags(data)

    const filteredList = computed(() => {
      const searchVal = search.value.toLowerCase().trim()

      if (searchVal === '') return data.slice(0, 20)

      let result = data
      const sArr = searchVal.split(' ')
      sArr.forEach(s => {
        if (s) {
          result = result.filter((item: DataItem) => {
            return contains(item.name, s) ||
              contains(item.desc, s) ||
              contains(item.url, s, 1) ||
              contains(item.tags.join('|'), s)
          })
        }
      })

      return result
    })

    watchEffect(() => {
      const query = search.value ? { q: search.value } : {}
      router.replace({ path: route.path, query })
    })

    const onTagClick = (tag: string) => {
      search.value = tag
    }

    return {
      filteredTags,
      filteredList,
      search,
      onTagClick
    }
  }
})
</script>

<style lang="less" scoped>
.home-page {
  --primary: #2563eb;
  --primary-light: #3b82f6;
  --primary-dark: #1d4ed8;
  --white: #fff;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --border: #e5e7eb;
  --text-light: #64748b;

  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(to bottom, var(--gray-50), var(--white));

  .title {
    padding: 3rem 0;
    text-align: center;
    font-size: 3rem;
    font-weight: 800;
    color: var(--gray-800);
    letter-spacing: -0.025em;
    background: linear-gradient(45deg, var(--primary), var(--primary-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .search-box {
    max-width: 768px;
    margin: 0 auto;
    position: relative;

    .search {
      padding: 1.25rem 3rem 1.25rem 1.5rem;
      width: 100%;
      height: 4rem;
      line-height: 1.5;
      background-color: var(--white);
      border-radius: 1.5rem;
      border: 2px solid var(--gray-200);
      font-size: 1.25rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;

      &:focus,
      &:hover {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
        transform: translateY(-2px);
      }
    }

    .search-icon {
      position: absolute;
      right: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.25rem;
      color: var(--gray-600);
      pointer-events: none;
    }
  }

  .tags {
    max-width: 800px;
    margin: 2rem auto;
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
    list-style: none;

    .tag {
      margin: 0;
      padding: 0.5rem 1rem;
      background-color: var(--white);
      border-radius: 3rem;
      border: 1px solid var(--border);
      font-size: 1rem;
      color: var(--text-light);
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

      &:hover {
        border-color: var(--primary);
        background-color: var(--primary);
        color: var(--white);
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
      }
    }
  }

  .data {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 3rem;

    .item {
      padding: 1.75rem;
      background-color: var(--white);
      border-radius: 1.25rem;
      border: 1px solid var(--gray-200);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, var(--primary), var(--primary-light));
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);

        &::before {
          opacity: 1;
        }
      }

      .l1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        .name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gray-800);
        }

        .visit-btn {
          flex-shrink: 0;
        }

        .link-button {
          text-decoration: none;

          .ico-url {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            background-color: var(--primary);
            color: var(--white);
            font-size: 0.875rem;
            font-weight: 500;
            transition: all 0.3s ease;

            &:hover {
              background-color: var(--primary-dark);
              transform: translateY(-2px);
            }
          }
        }
      }

      .l2 {
        .desc {
          font-size: 1rem;
          color: var(--gray-600);
          line-height: 1.6;
        }
      }
    }
  }
}
</style>
