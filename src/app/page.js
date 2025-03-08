'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import data from './data'
import styles from './page.module.css'

const contains = (text, find, type) => {
  if (type === 1) {
    return text.split('://')[1].toLowerCase().indexOf(find) >= 0
  } else {
    return text.toLowerCase().indexOf(find) >= 0
  }
}

const filterTags = () => {
  const set = new Set()
  data.forEach(item => {
    item.tags.forEach(tag => {
      set.add(tag)
    })
  })
  return Array.from(set)
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  )
}

function HomeContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('q') || '')
  const filteredTags = filterTags()

  const filteredList = useMemo(() => {
    const searchVal = search.toLowerCase().trim()

    if (searchVal === '') return data.slice(0, 20)

    let result = data
    const sArr = searchVal.split(' ')
    sArr.forEach(s => {
      if (s) {
        result = result.filter(item => {
          return contains(item.name, s) ||
            contains(item.desc, s) ||
            contains(item.url, s, 1) ||
            contains(item.tags.join('|'), s)
        })
      }
    })

    return result
  }, [search])

  const onTagClick = (tag) => {
    setSearch(tag)
    const params = new URLSearchParams()
    params.set('q', tag)
    router.push(`?${params.toString()}`)
  }

  const handleSearch = (value) => {
    setSearch(value)
    const params = new URLSearchParams()
    if (value) params.set('q', value)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>网址收藏导航</h1>

      <div className={styles.searchBox}>
        <input
          className={styles.search}
          type="search"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="输入关键词（支持使用空格分隔多个关键词）"
        />
        <span className={styles.searchIcon}>🔍</span>
      </div>

      <ul className={styles.tags}>
        {filteredTags.map(tag => (
          <li
            key={tag}
            className={styles.tag}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className={styles.dataTips}>
        <span>搜索结果条数：</span>
        <span>{filteredList.length}</span>
      </div>

      <ul className={styles.data}>
        {filteredList.map(item => (
          <li key={item.id} className={styles.item}>
            <div className={styles.l1}>
              <div><span className={styles.name}>{item.name}</span></div>
              <div className={styles.visitBtn}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                  <span className={styles.icoUrl}>访问</span>
                </a>
              </div>
            </div>
            <div className={styles.l2}>
              <span className={styles.desc}>{item.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
} 