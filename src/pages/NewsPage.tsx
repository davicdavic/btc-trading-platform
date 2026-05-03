import { useState } from 'react';
import { Newspaper, ExternalLink, Clock, Search, Bookmark, BookmarkCheck, RefreshCw } from 'lucide-react';

// Mock news data (simulating NewsAPI response)
const mockNews = [
  {
    id: '1',
    title: 'Bitcoin Surges Past $68,000 as Institutional Adoption Accelerates',
    description: 'Major financial institutions continue to embrace Bitcoin, driving prices to new yearly highs amid growing demand for cryptocurrency exposure.',
    url: '#',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400',
    source: 'CryptoNews',
    publishedAt: '2026-04-29T14:30:00'
  },
  {
    id: '2',
    title: 'Ethereum ETF Sees Record Inflows Following Bitcoin Success',
    description: 'Following the approval of spot Bitcoin ETFs, institutional investors are now showing increased interest in Ethereum-based investment products.',
    url: '#',
    imageUrl: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400',
    source: 'BlockchainDaily',
    publishedAt: '2026-04-29T12:15:00'
  },
  {
    id: '3',
    title: 'DeFi Protocol Reaches $50 Billion in Total Value Locked',
    description: 'Decentralized finance continues its explosive growth as new protocols offer innovative solutions for yield farming and liquidity provision.',
    url: '#',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400',
    source: 'DeFi Weekly',
    publishedAt: '2026-04-29T10:45:00'
  },
  {
    id: '4',
    title: 'El Salvador Celebrates Three Years of Bitcoin as Legal Tender',
    description: 'The Central American nation marks a milestone as President highlights the economic benefits of cryptocurrency adoption.',
    url: '#',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400',
    source: 'Global Finance',
    publishedAt: '2026-04-28T18:00:00'
  },
  {
    id: '5',
    title: 'SEC Announces New Cryptocurrency Regulatory Framework',
    description: 'Regulators unveil comprehensive guidelines for digital asset classification and trading, providing clarity for market participants.',
    url: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    source: 'Regulatory Watch',
    publishedAt: '2026-04-28T15:30:00'
  },
  {
    id: '6',
    title: 'Major Bank Launches Bitcoin Trading for Retail Customers',
    description: 'One of the world\'s largest banks begins offering cryptocurrency services, marking a significant shift in traditional finance.',
    url: '#',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=400',
    source: 'Banking Weekly',
    publishedAt: '2026-04-28T09:00:00'
  },
  {
    id: '7',
    title: 'Bitcoin Mining Difficulty Reaches All-Time High',
    description: 'Network security continues to strengthen as miners deploy more computational power to secure the Bitcoin blockchain.',
    url: '#',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400',
    source: 'Mining Today',
    publishedAt: '2026-04-27T20:15:00'
  },
  {
    id: '8',
    title: 'NFT Market Shows Signs of Recovery with New Collections',
    description: 'Digital collectibles regain attention as major brands launch new NFT projects on Ethereum and Solana.',
    url: '#',
    imageUrl: 'https://images.unsplash.com/photo-1646463876221-9a37f4a4e5db?w=400',
    source: 'NFT Observer',
    publishedAt: '2026-04-27T16:45:00'
  },
];

const categories = ['All', 'Bitcoin', 'Ethereum', 'DeFi', 'Regulatory', 'Mining'];

export default function NewsPage() {
  const [news] = useState(mockNews);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // In production, fetch from NewsAPI
  // const fetchNews = async () => {
  //   try {
  //     const response = await axios.get(`https://newsapi.org/v2/everything`, {
  //       params: {
  //         q: 'bitcoin OR cryptocurrency',
  //         apiKey: newsApiKey,
  //         language: 'en',
  //         sortBy: 'publishedAt',
  //       }
  //     });
  //     setNews(response.data.articles);
  //   } catch (error) {
  //     console.error('Failed to fetch news:', error);
  //   }
  // };

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                           (selectedCategory === 'Bitcoin' && article.title.toLowerCase().includes('bitcoin')) ||
                           (selectedCategory === 'Ethereum' && article.title.toLowerCase().includes('ethereum')) ||
                           (selectedCategory === 'DeFi' && article.title.toLowerCase().includes('defi')) ||
                           (selectedCategory === 'Regulatory' && article.title.toLowerCase().includes('sec') || article.title.toLowerCase().includes('regulatory')) ||
                           (selectedCategory === 'Mining' && article.title.toLowerCase().includes('mining'));
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffHours < 48) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Newspaper className="text-btc-gold" />
            Crypto News
          </h1>
          <p className="text-btc-text-secondary mt-1">Stay updated with the latest cryptocurrency news</p>
        </div>

        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-btc-text-secondary" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search news..."
            className="w-full pl-11 pr-4 py-3 bg-btc-dark border border-btc-border rounded-xl text-white placeholder-btc-text-secondary focus:border-btc-gold"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-btc-gold text-btc-dark'
                : 'bg-btc-secondary border border-btc-border text-btc-text-secondary hover:text-white hover:border-btc-gold/50'
            }`}
          >
            {category}
          </button>
        ))}
        
        <button
          onClick={() => setIsLoading(true)}
          className="ml-auto p-2 bg-btc-secondary border border-btc-border rounded-lg text-btc-text-secondary hover:text-white hover:border-btc-gold/50 transition-colors"
        >
          <RefreshCw size={18} className={isLoading ? 'animate-spin' : ''} />
        </button>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((article) => (
          <article
            key={article.id}
            className="bg-btc-secondary border border-btc-border rounded-xl overflow-hidden hover:border-btc-gold/50 transition-all group"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x200/1E2329/848E9C?text=Crypto+News';
                }}
              />
              <button
                onClick={() => toggleBookmark(article.id)}
                className="absolute top-3 right-3 p-2 bg-btc-dark/80 rounded-full hover:bg-btc-dark transition-colors"
              >
                {bookmarks.includes(article.id) ? (
                  <BookmarkCheck size={18} className="text-btc-gold" />
                ) : (
                  <Bookmark size={18} className="text-white" />
                )}
              </button>
              <span className="absolute bottom-3 left-3 px-3 py-1 bg-btc-gold/90 text-btc-dark text-xs font-bold rounded-full">
                {article.source}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-btc-gold transition-colors">
                {article.title}
              </h3>
              <p className="text-btc-text-secondary text-sm mb-4 line-clamp-3">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-btc-text-secondary">
                  <Clock size={12} />
                  {formatDate(article.publishedAt)}
                </span>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-btc-gold hover:underline"
                >
                  Read More <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <Newspaper size={48} className="text-btc-text-secondary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No news found</h3>
          <p className="text-btc-text-secondary">Try adjusting your search or category filters</p>
        </div>
      )}

      {/* News API Info */}
      <div className="bg-btc-dark/50 rounded-xl p-4 text-sm">
        <p className="text-btc-text-secondary text-center">
          News powered by NewsAPI. Set VITE_NEWSAPI_KEY in your environment for live crypto news.
        </p>
      </div>
    </div>
  );
}
