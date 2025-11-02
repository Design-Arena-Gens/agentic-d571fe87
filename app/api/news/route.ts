import { NextResponse } from 'next/server'

// Mock news data generator
function generateNewsData() {
  const categories = ['politics', 'business', 'sports', 'technology', 'entertainment']

  const newsTemplates = [
    {
      category: 'politics',
      title: 'PM Modi announces new digital India initiative',
      titlePunjabi: 'ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਮੋਦੀ ਨੇ ਨਵੀਂ ਡਿਜੀਟਲ ਇੰਡੀਆ ਪਹਿਲਕਦਮੀ ਦੀ ਘੋਸ਼ਣਾ ਕੀਤੀ',
      description: 'New program aims to bring digital literacy to rural areas across India',
      descriptionPunjabi: 'ਨਵਾਂ ਪ੍ਰੋਗਰਾਮ ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਪਿੰਡ ਖੇਤਰਾਂ ਵਿੱਚ ਡਿਜੀਟਲ ਸਾਖਰਤਾ ਲਿਆਉਣ ਦਾ ਟੀਚਾ ਰੱਖਦਾ ਹੈ',
      image: 'https://picsum.photos/seed/politics1/400/300'
    },
    {
      category: 'business',
      title: 'Indian stock market reaches all-time high',
      titlePunjabi: 'ਭਾਰਤੀ ਸ਼ੇਅਰ ਬਾਜ਼ਾਰ ਸਭ ਤੋਂ ਉੱਚੇ ਪੱਧਰ ਤੇ ਪਹੁੰਚਿਆ',
      description: 'Sensex crosses 80,000 mark as economy shows strong growth',
      descriptionPunjabi: 'ਆਰਥਿਕਤਾ ਮਜ਼ਬੂਤ ਵਿਕਾਸ ਦਿਖਾਉਂਦੇ ਹੋਏ ਸੈਂਸੈਕਸ 80,000 ਦਾ ਨਿਸ਼ਾਨ ਪਾਰ ਕਰ ਗਿਆ',
      image: 'https://picsum.photos/seed/business1/400/300'
    },
    {
      category: 'sports',
      title: 'Indian cricket team wins historic series',
      titlePunjabi: 'ਭਾਰਤੀ ਕ੍ਰਿਕੇਟ ਟੀਮ ਨੇ ਇਤਿਹਾਸਕ ਲੜੀ ਜਿੱਤੀ',
      description: 'Team India defeats Australia 3-1 in thrilling test series',
      descriptionPunjabi: 'ਟੀਮ ਇੰਡੀਆ ਨੇ ਰੋਮਾਂਚਕ ਟੈਸਟ ਲੜੀ ਵਿੱਚ ਆਸਟਰੇਲੀਆ ਨੂੰ 3-1 ਨਾਲ ਹਰਾਇਆ',
      image: 'https://picsum.photos/seed/sports1/400/300'
    },
    {
      category: 'technology',
      title: 'ISRO successfully launches new satellite',
      titlePunjabi: 'ਇਸਰੋ ਨੇ ਸਫਲਤਾਪੂਰਵਕ ਨਵਾਂ ਸੈਟੇਲਾਈਟ ਲਾਂਚ ਕੀਤਾ',
      description: 'Communication satellite will improve internet connectivity in remote areas',
      descriptionPunjabi: 'ਸੰਚਾਰ ਸੈਟੇਲਾਈਟ ਦੂਰ-ਦੁਰਾਡੇ ਇਲਾਕਿਆਂ ਵਿੱਚ ਇੰਟਰਨੈੱਟ ਕਨੈਕਟੀਵਿਟੀ ਵਿੱਚ ਸੁਧਾਰ ਕਰੇਗਾ',
      image: 'https://picsum.photos/seed/tech1/400/300'
    },
    {
      category: 'entertainment',
      title: 'Bollywood movie breaks box office records',
      titlePunjabi: 'ਬਾਲੀਵੁੱਡ ਫਿਲਮ ਨੇ ਬਾਕਸ ਆਫਿਸ ਰਿਕਾਰਡ ਤੋੜੇ',
      description: 'New blockbuster earns 500 crores in first week',
      descriptionPunjabi: 'ਨਵੀਂ ਬਲਾਕਬਸਟਰ ਨੇ ਪਹਿਲੇ ਹਫਤੇ ਵਿੱਚ 500 ਕਰੋੜ ਕਮਾਏ',
      image: 'https://picsum.photos/seed/entertainment1/400/300'
    },
    {
      category: 'politics',
      title: 'Parliament passes major education reform bill',
      titlePunjabi: 'ਸੰਸਦ ਨੇ ਵੱਡਾ ਸਿੱਖਿਆ ਸੁਧਾਰ ਬਿੱਲ ਪਾਸ ਕੀਤਾ',
      description: 'New policy focuses on skill development and vocational training',
      descriptionPunjabi: 'ਨਵੀਂ ਨੀਤੀ ਹੁਨਰ ਵਿਕਾਸ ਅਤੇ ਕਿੱਤਾਮੁਖੀ ਸਿਖਲਾਈ ਤੇ ਕੇਂਦਰਿਤ ਹੈ',
      image: 'https://picsum.photos/seed/politics2/400/300'
    },
    {
      category: 'business',
      title: 'Major tech company opens new manufacturing plant in India',
      titlePunjabi: 'ਵੱਡੀ ਟੈਕ ਕੰਪਨੀ ਨੇ ਭਾਰਤ ਵਿੱਚ ਨਵਾਂ ਨਿਰਮਾਣ ਪਲਾਂਟ ਖੋਲ੍ਹਿਆ',
      description: 'Investment of 10,000 crores expected to create thousands of jobs',
      descriptionPunjabi: '10,000 ਕਰੋੜ ਦਾ ਨਿਵੇਸ਼ ਹਜ਼ਾਰਾਂ ਨੌਕਰੀਆਂ ਦੇ ਸਿਰਜਣ ਦੀ ਉਮੀਦ ਹੈ',
      image: 'https://picsum.photos/seed/business2/400/300'
    },
    {
      category: 'sports',
      title: 'Indian athlete wins gold at international championship',
      titlePunjabi: 'ਭਾਰਤੀ ਐਥਲੀਟ ਨੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਚੈਂਪੀਅਨਸ਼ਿਪ ਵਿੱਚ ਸੋਨਾ ਜਿੱਤਿਆ',
      description: 'Young sprinter sets new national record in 200m race',
      descriptionPunjabi: 'ਨੌਜਵਾਨ ਧਾਵਕ ਨੇ 200 ਮੀਟਰ ਦੀ ਦੌੜ ਵਿੱਚ ਨਵਾਂ ਰਾਸ਼ਟਰੀ ਰਿਕਾਰਡ ਬਣਾਇਆ',
      image: 'https://picsum.photos/seed/sports2/400/300'
    },
    {
      category: 'technology',
      title: 'India launches 5G services nationwide',
      titlePunjabi: 'ਭਾਰਤ ਨੇ ਦੇਸ਼ ਭਰ ਵਿੱਚ 5G ਸੇਵਾਵਾਂ ਸ਼ੁਰੂ ਕੀਤੀਆਂ',
      description: 'High-speed internet now available in major cities across the country',
      descriptionPunjabi: 'ਦੇਸ਼ ਭਰ ਦੇ ਵੱਡੇ ਸ਼ਹਿਰਾਂ ਵਿੱਚ ਹੁਣ ਤੇਜ਼ ਰਫਤਾਰ ਇੰਟਰਨੈੱਟ ਉਪਲਬਧ ਹੈ',
      image: 'https://picsum.photos/seed/tech2/400/300'
    },
    {
      category: 'entertainment',
      title: 'Famous singer announces India tour',
      titlePunjabi: 'ਮਸ਼ਹੂਰ ਗਾਇਕ ਨੇ ਭਾਰਤ ਦੌਰੇ ਦੀ ਘੋਸ਼ਣਾ ਕੀਤੀ',
      description: 'International star to perform in 10 cities starting next month',
      descriptionPunjabi: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਸਟਾਰ ਅਗਲੇ ਮਹੀਨੇ ਤੋਂ 10 ਸ਼ਹਿਰਾਂ ਵਿੱਚ ਪ੍ਰਦਰਸ਼ਨ ਕਰੇਗਾ',
      image: 'https://picsum.photos/seed/entertainment2/400/300'
    },
    {
      category: 'politics',
      title: 'New environmental protection laws approved',
      titlePunjabi: 'ਨਵੇਂ ਵਾਤਾਵਰਣ ਸੁਰੱਖਿਆ ਕਾਨੂੰਨ ਮਨਜ਼ੂਰ ਕੀਤੇ ਗਏ',
      description: 'Stricter regulations aim to reduce pollution and protect forests',
      descriptionPunjabi: 'ਸਖਤ ਨਿਯਮਾਂ ਦਾ ਉਦੇਸ਼ ਪ੍ਰਦੂਸ਼ਣ ਘਟਾਉਣਾ ਅਤੇ ਜੰਗਲਾਂ ਦੀ ਰੱਖਿਆ ਕਰਨਾ ਹੈ',
      image: 'https://picsum.photos/seed/politics3/400/300'
    },
    {
      category: 'business',
      title: 'Startup ecosystem thrives with record funding',
      titlePunjabi: 'ਸਟਾਰਟਅੱਪ ਈਕੋਸਿਸਟਮ ਰਿਕਾਰਡ ਫੰਡਿੰਗ ਨਾਲ ਪ੍ਰਫੁੱਲਤ',
      description: 'Indian startups raise $15 billion in venture capital this quarter',
      descriptionPunjabi: 'ਭਾਰਤੀ ਸਟਾਰਟਅੱਪਾਂ ਨੇ ਇਸ ਤਿਮਾਹੀ ਵਿੱਚ $15 ਬਿਲੀਅਨ ਵੈਂਚਰ ਕੈਪੀਟਲ ਇਕੱਠੀ ਕੀਤੀ',
      image: 'https://picsum.photos/seed/business3/400/300'
    }
  ]

  // Shuffle and return news items
  const shuffled = newsTemplates
    .sort(() => Math.random() - 0.5)
    .slice(0, 9)
    .map((item, index) => ({
      ...item,
      id: `news-${Date.now()}-${index}`,
      timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString()
    }))

  return shuffled
}

export async function GET() {
  try {
    const news = generateNewsData()

    return NextResponse.json({
      success: true,
      news,
      generatedAt: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to generate news' },
      { status: 500 }
    )
  }
}
