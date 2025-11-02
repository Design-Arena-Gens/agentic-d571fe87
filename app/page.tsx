'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'

interface NewsItem {
  id: string
  title: string
  titlePunjabi: string
  description: string
  descriptionPunjabi: string
  image: string
  category: string
  timestamp: string
}

export default function Home() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/news')
      if (!response.ok) throw new Error('Failed to fetch news')
      const data = await response.json()
      setNews(data.news)
    } catch (err) {
      setError('ਖਬਰਾਂ ਲੋਡ ਕਰਨ ਵਿੱਚ ਸਮੱਸਿਆ ਆਈ')
    } finally {
      setLoading(false)
    }
  }

  const categories = ['all', 'politics', 'business', 'sports', 'technology', 'entertainment']

  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter(item => item.category === selectedCategory)

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-white to-green-600 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-gray-900 punjabi-text">
            🇮🇳 ਭਾਰਤ ਦੀਆਂ ਖਬਰਾਂ
          </h1>
          <p className="text-center text-gray-700 mt-2">
            {format(new Date(), 'EEEE, MMMM d, yyyy')}
          </p>
        </div>
      </header>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              }`}
            >
              {cat === 'all' ? 'ਸਾਰੀਆਂ' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.titlePunjabi}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 punjabi-text">
                    {item.titlePunjabi}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3 punjabi-text">
                    {item.descriptionPunjabi}
                  </p>
                  <div className="border-t pt-3 mt-3">
                    <p className="text-gray-500 text-xs italic">
                      English: {item.title}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-500">
                      {new Date(item.timestamp).toLocaleTimeString('en-IN')}
                    </span>
                    <button className="text-orange-600 hover:text-orange-800 font-semibold text-sm">
                      ਪੂਰੀ ਖਬਰ →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && filteredNews.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            <p className="text-xl punjabi-text">ਇਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਕੋਈ ਖਬਰ ਨਹੀਂ</p>
          </div>
        )}
      </div>

      {/* Refresh Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={fetchNews}
          disabled={loading}
          className="bg-orange-600 hover:bg-orange-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
        >
          <svg
            className={`w-6 h-6 ${loading ? 'animate-spin' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
    </main>
  )
}
