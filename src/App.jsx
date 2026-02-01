import React, { useState, useEffect } from 'react';

// Custom Icons (inline SVG)
const ChevronRight = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const Search = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const ArrowRight = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Menu = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const X = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Router simulation
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
  
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  return React.Children.map(children, child => {
    if (child.props.path === currentPath) {
      return child;
    }
    return null;
  });
};

const Route = ({ path, children }) => children;

const Link = ({ to, children, className = '', onClick }) => (
  <a 
    href={`#${to}`} 
    className={className} 
    onClick={(e) => {
      window.scrollTo(0, 0);
      if (onClick) onClick(e);
    }}
  >
    {children}
  </a>
);

// Navigation Component
/*const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          <svg className="logo" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 15 Q 35 10, 45 25 T 55 40" stroke="currentColor" fill="none" strokeWidth="3"/>
            <text x="20" y="65" fontFamily="serif" fontSize="24" fill="currentColor">allowed Texts</text>
          </svg>
        </Link>
        
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/team">Team</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>*/

      {/* Mobile Menu Button - Fixed Position */}
      /*<button 
        className="mobile-menu-btn" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>*/

      {/* Mobile Menu Overlay */}
     /* <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" onClick={handleLinkClick}>About</Link>
          <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
          <Link to="/team" onClick={handleLinkClick}>Team</Link>
          <Link to="/career" onClick={handleLinkClick}>Career</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};*/

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          <svg className="logo" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 15 Q 35 10, 45 25 T 55 40" stroke="currentColor" fill="none" strokeWidth="3"/>
            <text x="20" y="65" fontFamily="serif" fontSize="24" fill="currentColor">allowed Texts</text>
          </svg>
        </Link>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/team">Team</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu Button - Fixed Position */}
      <button 
        className="mobile-menu-btn" 
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
        style={{ pointerEvents: 'auto', zIndex: 100000 }}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" onClick={handleLinkClick}>About</Link>
          <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
          <Link to="/team" onClick={handleLinkClick}>Team</Link>
          <Link to="/career" onClick={handleLinkClick}>Career</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};


// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <svg className="footer-logo" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 15 Q 35 10, 45 25 T 55 40" stroke="currentColor" fill="none" strokeWidth="3"/>
            <text x="20" y="65" fontFamily="serif" fontSize="24" fill="currentColor">allowed Texts</text>
          </svg>
        </div>
        
        <div className="footer-columns">
          <div className="footer-column">
            <h4>ABOUT US</h4>
            <a href="#">Lorem ipsum dolor sit amet</a>
            <a href="#">Lorem ipsum dolor</a>
            <a href="#">Lorem ipsum dolor</a>
          </div>
          
          <div className="footer-column">
            <h4>OUR TEAM</h4>
            <a href="#">Lorem ipsum dolor</a>
            <a href="#">Lorem ipsum dolor</a>
            <a href="#">Lorem ipsum dolor</a>
          </div>
          
          <div className="footer-column">
            <h4>WHO WE ARE</h4>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
          </div>
          
          <div className="footer-column">
            <h4>RESOURCES</h4>
            <a href="#">Lorem list</a>
            <a href="#">Lorem</a>
            <a href="#">Lorem list</a>
            <a href="#">Lorem list</a>
          </div>
        </div>
      </div>
      
      <div className="footer-contact">
        <div className="contact-info">
          <h4>CONTACT</h4>
          <a href="#">Contact form</a>
          <a href="mailto:allowed@test.com">allowed@test.com</a>
        </div>
        
        <div className="newsletter">
          <p>Sign up for our newsletter:</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email address" />
            <button type="submit">
              Submit <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Site content copyright © 2021 Allowded Text</p>
      </div>
    </div>
  </footer>
);

// Home Page
const HomePage = () => {
  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1620503374956-c942862f0372?w=800&h=600&fit=crop',
      title: 'Photography',
      description: 'Nulla a auctor mi, vestibulum arcu magna, ut magna magna eget semper elit. Curabitur felis nibh, ornare eu eleifend a bibendum.'
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Adventure',
      description: 'Ut pulvinar et quam augue, vestibulum. Donec a convallis odio, ut consequat orci. Integer urna pellen tesque dignissim ac arcu enim.'
    },
    {
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop',
      title: 'Arts & Creation',
      description: 'Et odio duis sed, Donec accumsan vehicula orci, auctor cursus mauris. Vivamus consectetur ipsum in magna.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-images">
          <img 
            src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop" 
            alt="Beach waves"
            className="hero-img hero-img-1"
          />
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop" 
            alt="Mountain landscape"
            className="hero-img hero-img-2"
          />
          <img 
            src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=800&fit=crop" 
            alt="Lake tree"
            className="hero-img hero-img-3"
          />
        </div>
        
        <div className="hero-card">
          <h1>Integer at neque ac metus fringilla dapibus et eu eros.</h1>
          <p>Aliquam egestas sapien turpis, eu iaculis velit tincidunt consetetur taret laquid quam.</p>
          <Link to="/about" className="btn-primary">
            Learn More <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <p className="cta-text">Proin pretium risus suscipit viverra mattis. Aliquam non nunc ligula. Integer at neque ac metus fringilla dapibus et eu eros.</p>
          <Link to="/contact" className="btn-primary">
            Get in Touch <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">ABOUT OUR SERVICES</h2>
          <p className="section-subtitle">Aliquam egestas sapien turpis, eu iaculis velit pulvinar vel. Cras at diam quis turpis.</p>

          <div className="service-item">
            <div className="service-content">
              <h3>Service Point One</h3>
              <p>Vestibulum ullamcorper sem lorem auctor lacinia. Sed sodiam vitae justo, quis consetetur eu ligula euismod. Id faucibus at amet commodo et ante Sed, consetetur ad est velit euismod. Hendrerit ante viverra luctus vel. Integer vivamus vitae turpis amet eros. Donec ornare semper eget.</p>
            </div>
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=800&fit=crop" alt="Purple starry sky" />
              <div className="case-study-card">
                <p className="case-study-label">CASE STUDY</p>
                <p className="case-study-text">Integer at neque ac metus fringilla dapibus et eu eros.</p>
                <ChevronRight className="case-study-arrow" size={32} />
              </div>
            </div>
          </div>

          <div className="service-item reverse">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=800&fit=crop" alt="People celebrating" />
              <div className="case-study-card">
                <p className="case-study-label">CASE STUDY</p>
                <p className="case-study-text">Integer at neque ac metus fringilla dapibus et eu eros.</p>
                <ChevronRight className="case-study-arrow" size={32} />
              </div>
            </div>
            <div className="service-content">
              <h3>Service Point Two</h3>
              <p>Ut pulvinar et quam augue. Donec a convallis odio, duis aliquet orci turpis at lobortis rutrum. Aenean in orci et diam auctor adipiscing non ut odio. Suspendisse ullamcorper nulla lacinia, vestibulum mauris at ante cursus id. Donec fringilla ultricies sapien arcu. Vivamus sit amet mauris velit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Another CTA */}
      <section className="cta-section">
        <div className="container">
          <p className="cta-text">Proin pretium risus suscipit viverra mattis. Aliquam non nunc ligula. Integer at neque ac metus fringilla dapibus et eu eros.</p>
          <Link to="/contact" className="btn-primary">
            Contact Us <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <p className="team-label">OUR TEAM</p>
          <div className="team-card">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop" alt="Team member" />
            <div className="team-content">
              <h3>Sally Aboura - Site Engineer</h3>
              <blockquote>
                "It is not so much for its beauty that the forest makes a claim upon men's heart, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-preview-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-label">BLOGS</p>
              <h2>Popular Blogs</h2>
            </div>
          </div>
          
          <p className="blog-intro">Ut rutrum ligula quis ultricies vestibulum. Suspendisse turna sit mattis eu, facilisis ac dui vel feugiat. Vestibulum ultrices libero vitae enim venenatis, tincidunt enim amet, ex condimentum magna netus non turpis. Aliquam sagittis risquin tristis, eu tempor ac odio tempus conseteur aliquam est.</p>

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={post.image} alt={post.title} />
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <h2>What Our Client Says?</h2>
          <p className="testimonial-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut porta diam.</p>
          
          <div className="testimonial-card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Ryan Cardinal" className="testimonial-avatar" />
            <h4>Ryan Cardinal (Owner of CGC)</h4>
            <div className="stars">★ ★ ★ ★ ★</div>
            <blockquote>
              "Donec sed nisl consequat, est ultricies. Cras sagittis dui vel dui maximus, laoreet auctor justo finibus. Et varius sem erat, ultricies euismod enim vestibulum ac. Duis sit amet neque sit amet neque."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <p className="cta-text">Proin pretium risus suscipit viverra mattis. Aliquam non nunc ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut porta diam.</p>
          <Link to="/contact" className="btn-primary">
            Contact Us <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

// About Page
const AboutPage = () => (
  <div className="about-page">
    <section className="about-hero">
      <div className="about-hero-images">
        <img src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop" alt="Beach" />
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop" alt="Mountains" />
        <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=800&fit=crop" alt="Lake" />
      </div>
      
      <div className="about-hero-card">
        <h1>Integer at neque ac metus fringilla dapibus et eu eros.</h1>
        <p>Aliquam egestas sapien turpis, eu iaculis velit tincidunt consetetur taret laquid quam.</p>
        <button className="btn-primary">
          Learn More <ChevronRight size={20} />
        </button>
      </div>
    </section>

    <section className="about-content">
      <div className="container">
        <div className="about-intro">
          <p className="cta-text">Proin pretium risus suscipit viverra mattis. Aliquam non nunc ligula. Integer at neque ac metus fringilla dapibus et eu eros.</p>
          <button className="btn-primary">Get in Touch <ChevronRight size={20} /></button>
        </div>

        <div className="about-section-text">
          <h2 className="section-label">ABOUT US</h2>
          <p className="large-text">Integer at neque ac metus finibus dapibus et eu eros. Vivamus vitae finibus dolor. Suspendisse finibus ante in sapien fermentum.</p>
        </div>

        <div className="about-feature">
          <div className="about-feature-text">
            <p>Vestibulum ultrices nec justo lacinia. Non nisi maximus vestibulum turpis et sit. Sed aliquam efficitur justo, quis orare mauris placerat id, sed aliquet lacinia justo nec orci euismod. Aliquam mauris conset quis orci Fusce bibendum. Donec tempus consequat augue.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=400&fit=crop" alt="Mountain lake" />
        </div>

        <div className="about-feature reverse">
          <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop" alt="Mountain road" />
          <div className="about-feature-text">
            <p className="feature-label">I CARE ABOUT US</p>
            <p>Vestibulum ultrices nec justo lacinia. Non nisi maximus vestibulum turpis et sit. Sed aliquam efficitur justo, quis orare mauris placerat id.</p>
            <button className="btn-primary">Learn More <ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="about-feature">
          <div className="about-feature-text">
            <p className="feature-label">THINGS TO REMEMBER</p>
            <h3>10 Things That We In BLOGS But Are All Not To Get Started</h3>
            <p>Lorem ipsum dolor sit amet consequat of tellus ut pulvinar et vitae magna rhoncus et urna. Cras pharetra euismod mi vehicula et semper. Donec euismod vel nunc id ullamcorper. Pellentesque purus fringilla ullamcorper vitae nisi ut tellus porttitor nibh id pharetra pulvinar adipiscing vitae viverra.</p>
            <button className="btn-primary">Learn More <ChevronRight size={20} /></button>
          </div>
          <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop" alt="Canyon landscape" />
        </div>
      </div>
    </section>
  </div>
);

// Blog Listing Page
const BlogListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['NEWS', 'TRAVEL', 'BLOGS', 'FACTS', 'GLOBAL'];
  
  const blogPosts = [
    {
      date: 'JUNE 11, 2021',
      title: 'Interesting Facts I Bet You Never Knew About BLOGS',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=400&fit=crop'
    },
    {
      date: 'JUNE 11, 2021',
      title: 'verything You Wanted to Know About BLOGS and Were Too Embarrassed to Ask',
      image: 'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?w=600&h=400&fit=crop'
    },
    {
      date: 'JUNE 11, 2021',
      title: 'What Can You Do To Save Your BLOGS From Destruction By Social Media?',
      image: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=600&h=400&fit=crop'
    },
    {
      date: 'JUNE 11, 2021',
      title: 'White Paper: Call to NASA for Low-Cost Innovation, New Talent Pipeline in Missions',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    },
    {
      date: 'JUNE 11, 2021',
      title: 'Becoming Friends with a Mars Rover',
      image: 'https://images.unsplash.com/photo-1475776408506-9a5371e7a068?w=600&h=400&fit=crop'
    },
    {
      date: 'JUNE 11, 2021',
      title: 'Some Assembly Required: Documentation in Mars Rover Design',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="blog-listing-page">
      {/* Featured Post */}
      <section className="featured-post">
        <div className="featured-post-images">
          <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=600&fit=crop" alt="Bicycle" className="featured-img-main" />
        </div>
        
        <div className="featured-post-card">
          <h1>Vivamus vitae finibus dolor. Suspendisse finibus ante in sapien fermentum.</h1>
          <p className="featured-date">NOVEMBER 11, 2021</p>
          <p>Morbi pellentesque justo non magna dapibus efficitur in quis magna. Vivamus consectetur placerat iaculis. Aenean in orci et diam auctor adipiscing non ut diam. Suspendisse ut urna iaculis, tristique justo at, consequat mi gravida. Nam commodo turpis eget ligula placerat, quis molestie mauris vulputate.</p>
          <button className="btn-primary">Read more <ChevronRight size={20} /></button>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <h2 className="section-label">MORE BLOG NOTES</h2>
          
          <div className="blog-filters">
            <div className="category-filters">
              <span>Category:</span>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="search-sort">
              <div className="search-box">
                <Search size={18} />
              </div>
              <select className="sort-select">
                <option>LATEST</option>
                <option>OLDEST</option>
                <option>POPULAR</option>
              </select>
            </div>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <Link to="/blog/1" key={index} className="blog-card-link">
                <div className="blog-card">
                  <img src={post.image} alt={post.title} />
                  <p className="blog-date">{post.date}</p>
                  <h3>{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="pagination">
            <button className="page-arrow">←</button>
            {[1, 2, 3, 4, 5, 6, 7].map(num => (
              <button
                key={num}
                className={`page-num ${currentPage === num ? 'active' : ''}`}
                onClick={() => setCurrentPage(num)}
              >
                {num}
              </button>
            ))}
            <button className="page-arrow">→</button>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <p className="cta-text">Proin pretium risus suscipit viverra mattis. Aliquam non nunc ligula. Integer at neque ac metus fringilla dapibus et eu eros.</p>
          <Link to="/contact" className="btn-primary">
            Contact Us <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Blog Single Page
const BlogSinglePage = () => {
  const relatedPosts = [
    {
      date: 'JUNE 11, 2021',
      title: 'Interesting Facts I Bet You Never Knew About BLOGS',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=400&fit=crop'
    },
    {
      date: 'JUNE 11, 2021',
      title: 'verything You Wanted to Know About BLOGS and Were Too Embarrassed to Ask',
      image: 'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?w=600&h=400&fit=crop'
    },
    {
      date: 'JUNE 11, 2021',
      title: 'What Can You Do To Save Your BLOGS From Destruction By Social Media?',
      image: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="blog-single-page">
      <section className="blog-hero">
        <div className="blog-hero-image">
          <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&h=600&fit=crop" alt="Featured" />
        </div>
        
        <div className="blog-hero-card">
          <h1>Interesting Facts I Bet You Never Knew About BLOGS</h1>
        </div>
      </section>

      <article className="blog-content">
        <div className="container article-container">
          <p className="article-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit gravida eleifend. Mauris fringilla urna at lectus dapibus laoreet. Proin id sem consequat ultrices porta ac a leo. Quisque sit blandit aliquam in. Vivamus cursus massa, egestas et auctor nisl, vehicula sed ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

          <p>Aenean placerat pulvinar augue, et convallis est feugiat et. Duis aliquet turna eleifetus. Aenean blandit massa ut lacus cursus. Sed aliquam quis cursus. Curabitur enim risus Maecenas Malesuada nibh lectus nulla, nec laoreet justo viverra at. Maecenas ac justo eget lorem tincidunt adipiscing vulputate.</p>

          <ul className="article-list">
            <li>Aenean placerat pulvinar augue, et convallis est feugiat et.</li>
            <li>Duis aliquet lacus libortus.</li>
            <li>Sed aliquam quis mauris eget lacinia cursus.</li>
            <li>Sed aliquam quis nibh non odio commodo, nec efficitur magna tempus.</li>
            <li>Curabitur eget nisl magna. Maecenas mollis lacus nulla, nec sapien efficitur elit ut. Maecenas ac justo eget tempus in ipsum.</li>
          </ul>

          <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=800&fit=crop" alt="Desert road" className="article-image" />

          <p className="image-caption">Vestibulum ultrices malesuada elit vitae commodo. Donec nibh ipsum Duis sem nisl, tempus quis eros at, suscipit consectetur nibh. Maecenas mattis molestie tellus mauris laoreet id.</p>

          <h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h2>

          <p>Aenean placerat pulvinar augue, et convallis est feugiat et. Duis aliquet turna eleifetus. Aenean blandit massa ut lacus cursus. Sed aliquam quis cursus. Maecenas ac justo eget lorem</p>
        </div>
      </article>

      <section className="related-posts">
        <div className="container">
          <h2 className="section-label">RELATED BLOGS</h2>
          
          <div className="blog-grid">
            {relatedPosts.map((post, index) => (
              <div key={index} className="blog-card">
                <img src={post.image} alt={post.title} />
                <p className="blog-date">{post.date}</p>
                <h3>{post.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page
const ContactPage = () => (
  <div className="contact-page">
    <section className="contact-hero">
      <div className="contact-hero-image">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop" alt="Phone with map" />
      </div>
      
      <div className="contact-hero-card">
        <h1>Contact us</h1>
        <p>Ut posuere ullamcorper euismod. Donec a justo pulvinar diam dictum lobortis vulputate non nisl. Vestibulum pellentesque eget lorem ultrices lobortis.</p>
      </div>
    </section>

    <section className="contact-form-section">
      <div className="container">
        <h2>Let's talk about</h2>
        
        <form className="contact-form">
          <div className="form-group">
            <select className="form-select">
              <option>Project inquiries</option>
              <option>General inquiry</option>
              <option>Partnership</option>
              <option>Career</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>First name</label>
              <input type="text" placeholder="Jane" />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="jane@domain.com" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="How can we help?" rows="4"></textarea>
          </div>

          <p className="form-notice">
            This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
          </p>

          <button type="submit" className="btn-primary">
            Submit <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </section>
  </div>
);

// Team Page
const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop',
      bio: 'With over 15 years of experience in the industry, Sarah leads our team with vision and passion.'
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
      bio: 'Michael brings creative excellence to every project, ensuring our work stands out.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop',
      bio: 'Emily transforms ideas into reality with elegant code and technical expertise.'
    },
    {
      name: 'David Kim',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop',
      bio: 'David crafts compelling narratives that connect our brand with audiences worldwide.'
    },
    {
      name: 'Jessica Williams',
      role: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop',
      bio: 'Jessica creates intuitive experiences that delight users and drive engagement.'
    },
    {
      name: 'Alex Thompson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop',
      bio: 'Alex ensures every project runs smoothly from conception to completion.'
    }
  ];

  return (
    <div className="team-page">
      <section className="page-hero">
        <div className="container">
          <h1>Meet Our Team</h1>
          <p className="hero-subtitle">Talented individuals working together to create amazing experiences</p>
        </div>
      </section>

      <section className="team-grid-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="team-member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-member-info">
                  <h3>{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                  <p className="team-member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <p className="cta-text">Interested in joining our team? We're always looking for talented individuals.</p>
          <Link to="/career" className="btn-primary">
            View Open Positions <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Career Page
const CareerPage = () => {
  const openPositions = [
    {
      title: 'Senior Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are looking for an experienced frontend developer to join our team and help build amazing user experiences.'
    },
    {
      title: 'Product Designer',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Join our design team to create intuitive and beautiful products that users love.'
    },
    {
      title: 'Content Writer',
      location: 'Remote',
      type: 'Contract',
      description: 'Help us craft compelling stories and content that resonates with our audience.'
    },
    {
      title: 'Marketing Specialist',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Drive our marketing initiatives and help grow our brand presence across multiple channels.'
    },
    {
      title: 'Backend Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build scalable and reliable backend systems that power our applications.'
    },
    {
      title: 'Customer Success Manager',
      location: 'Boston, MA',
      type: 'Full-time',
      description: 'Ensure our customers have an exceptional experience with our products and services.'
    }
  ];

  return (
    <div className="career-page">
      <section className="page-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p className="hero-subtitle">Build your career with us and make an impact</p>
        </div>
      </section>

      <section className="career-benefits">
        <div className="container">
          <h2 className="section-label">WHY WORK WITH US</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Flexible Work</h3>
              <p>Work from anywhere with flexible hours that fit your lifestyle.</p>
            </div>
            <div className="benefit-card">
              <h3>Growth Opportunities</h3>
              <p>Continuous learning and development programs to advance your career.</p>
            </div>
            <div className="benefit-card">
              <h3>Great Culture</h3>
              <p>Collaborative environment where your ideas and contributions matter.</p>
            </div>
            <div className="benefit-card">
              <h3>Competitive Pay</h3>
              <p>Industry-leading compensation and comprehensive benefits package.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="open-positions">
        <div className="container">
          <h2 className="section-label">OPEN POSITIONS</h2>
          <div className="positions-list">
            {openPositions.map((position, index) => (
              <div key={index} className="position-card">
                <div className="position-header">
                  <div>
                    <h3>{position.title}</h3>
                    <div className="position-meta">
                      <span className="position-location">{position.location}</span>
                      <span className="position-type">{position.type}</span>
                    </div>
                  </div>
                  <button className="btn-apply">Apply Now</button>
                </div>
                <p className="position-description">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <p className="cta-text">Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.</p>
          <Link to="/contact" className="btn-primary">
            Get in Touch <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Main App
function App() {
  return (
    <div className="app">
      <Navigation />
      
      <Router>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/blog">
          <BlogListingPage />
        </Route>
        <Route path="/blog/1">
          <BlogSinglePage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/career">
          <CareerPage />
        </Route>
      </Router>
      
      <Footer />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --teal: #2D6569;
          --navy: #3B5676;
          --cream: #F5F7F0;
          --white: #FFFFFF;
          --text-dark: #2C2C2C;
          --text-light: #666666;
        }

        body {
          font-family: 'Crimson Text', 'Georgia', serif;
          color: var(--text-dark);
          line-height: 1.6;
          background: var(--cream);
        }

        .app {
          min-height: 100vh;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: var(--cream);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .nav * {
          pointer-events: auto;
        }

        .nav.scrolled {
          background: rgba(245, 247, 240, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          isolation: isolate;
        }

        .logo {
          width: 180px;
          height: 60px;
          color: var(--teal);
        }

        .logo-link {
          text-decoration: none;
          position: relative;
          z-index: 10001;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .nav-links a {
          color: var(--text-dark);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: var(--teal);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--teal);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: var(--cream);
          border: 2px solid transparent;
          cursor: pointer;
          padding: 0.75rem;
          color: var(--text-dark);
          position: fixed;
          right: 1.5rem;
          top: 1.2rem;
          z-index: 99999;
          -webkit-tap-highlight-color: transparent;
          min-width: 44px;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          touch-action: manipulation;
          user-select: none;
          border-radius: 4px;
        }

        .nav.scrolled .mobile-menu-btn {
          background: rgba(245, 247, 240, 0.95);
        }

        .mobile-menu-btn:active {
          background: var(--teal);
          color: white;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex !important;
          }
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--cream);
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 10000;
          padding-top: 100px;
          overflow-y: auto;
        }

        .mobile-menu.active {
          transform: translateX(0);
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 0;
        }

        .mobile-menu-links a {
          color: var(--text-dark);
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          padding: 1.2rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .mobile-menu-links a:hover {
          color: var(--teal);
          padding-left: 1rem;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Buttons */
        .btn-primary {
          background: var(--navy);
          color: white;
          border: none;
          padding: 0.9rem 1.8rem;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          font-family: inherit;
          text-decoration: none;
        }

        .btn-primary:hover {
          background: var(--teal);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(45, 101, 105, 0.3);
        }

        /* Hero Section */
        .hero {
          margin-top: 100px;
          padding: 4rem 2rem;
          position: relative;
          min-height: 600px;
        }

        .hero-images {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          grid-template-rows: auto auto;
          gap: 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }

        .hero-img-1 {
          grid-row: 1 / 3;
          height: 500px;
          animation-delay: 0.1s;
        }

        .hero-img-2 {
          height: 350px;
          animation-delay: 0.2s;
        }

        .hero-img-3 {
          height: 350px;
          animation-delay: 0.3s;
        }

        .hero-card {
          background: var(--navy);
          color: white;
          padding: 3rem;
          max-width: 550px;
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: fadeInUp 0.8s ease 0.4s forwards;
          opacity: 0;
        }

        .hero-card h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          font-weight: 400;
        }

        .hero-card p {
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        /* CTA Section */
        .cta-section {
          padding: 4rem 2rem;
          text-align: center;
        }

        .cta-text {
          font-size: 1.25rem;
          max-width: 800px;
          margin: 0 auto 2rem;
          color: var(--text-dark);
        }

        /* Services Section */
        .services-section {
          padding: 5rem 2rem;
        }

        .section-title {
          font-size: 0.9rem;
          letter-spacing: 2px;
          color: var(--text-light);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .section-subtitle {
          font-size: 1.5rem;
          max-width: 600px;
          margin-bottom: 4rem;
          font-weight: 400;
        }

        .service-item {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          margin-bottom: 6rem;
          align-items: center;
        }

        .service-item.reverse {
          grid-template-columns: 1.2fr 1fr;
        }

        .service-item.reverse .service-content {
          order: 2;
        }

        .service-item.reverse .service-image {
          order: 1;
        }

        .service-content h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-weight: 400;
        }

        .service-content p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-light);
        }

        .service-image {
          position: relative;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 450px;
          object-fit: cover;
        }

        .case-study-card {
          position: absolute;
          bottom: -2rem;
          right: -2rem;
          background: white;
          padding: 2rem;
          max-width: 300px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          z-index: 10;
        }

        @media (min-width: 1025px) and (max-width: 1400px) {
          .case-study-card {
            bottom: -1.5rem;
            right: -1.5rem;
            max-width: 280px;
            padding: 1.8rem;
          }

          .case-study-text {
            font-size: 1rem;
          }
        }

        @media (min-width: 1401px) {
          .case-study-card {
            bottom: -2.5rem;
            right: -2.5rem;
            max-width: 320px;
          }
        }

        .case-study-label {
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          color: var(--text-light);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .case-study-text {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .case-study-arrow {
          color: var(--navy);
        }

        /* Team Section */
        .team-section {
          padding: 5rem 2rem;
          background: white;
        }

        .team-label {
          font-size: 0.9rem;
          letter-spacing: 2px;
          color: var(--text-light);
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .team-card {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 3rem;
          background: var(--cream);
          padding: 3rem;
          align-items: center;
        }

        .team-card img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          object-position: center 20%;
        }

        .team-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .team-content blockquote {
          font-size: 1.15rem;
          line-height: 1.8;
          font-style: italic;
          color: var(--text-light);
        }

        /* Blog Preview Section */
        .blog-preview-section {
          padding: 5rem 2rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
        }

        .section-label {
          font-size: 0.9rem;
          letter-spacing: 2px;
          color: var(--text-light);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .section-header h2 {
          font-size: 2rem;
          font-weight: 400;
        }

        .blog-intro {
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 3rem;
          max-width: 900px;
          color: var(--text-light);
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        .blog-card {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
          transition: transform 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-8px);
        }

        .blog-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          margin-bottom: 1.5rem;
        }

        .blog-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 500;
          line-height: 1.4;
        }

        .blog-card p {
          font-size: 1rem;
          color: var(--text-light);
          line-height: 1.6;
        }

        /* Testimonial Section */
        .testimonial-section {
          padding: 5rem 2rem;
          background: white;
          text-align: center;
        }

        .testimonial-section h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 400;
        }

        .testimonial-subtitle {
          font-size: 1.1rem;
          color: var(--text-light);
          margin-bottom: 3rem;
        }

        .testimonial-card {
          max-width: 700px;
          margin: 0 auto;
        }

        .testimonial-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 1.5rem;
        }

        .testimonial-card h4 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .stars {
          color: gold;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .testimonial-card blockquote {
          font-size: 1.15rem;
          line-height: 1.8;
          font-style: italic;
          color: var(--text-light);
        }

        /* Footer */
        .footer {
          background: var(--navy);
          color: white;
          padding: 4rem 2rem 2rem;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .footer-logo {
          width: 200px;
          height: 80px;
          color: white;
        }

        .footer-columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .footer-column h4 {
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .footer-column a {
          display: block;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          margin-bottom: 0.7rem;
          transition: color 0.3s ease;
        }

        .footer-column a:hover {
          color: white;
        }

        .footer-contact {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          padding-bottom: 2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-info h4 {
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .contact-info a {
          display: block;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          margin-bottom: 0.5rem;
        }

        .newsletter p {
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
        }

        .newsletter-form input {
          flex: 1;
          padding: 0.8rem 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: transparent;
          color: white;
          font-family: inherit;
        }

        .newsletter-form input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .newsletter-form button {
          padding: 0.8rem 1.5rem;
          background: white;
          color: var(--navy);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .newsletter-form button:hover {
          background: var(--cream);
        }

        .footer-bottom {
          text-align: center;
          opacity: 0.7;
          font-size: 0.9rem;
        }

        /* About Page */
        .about-hero {
          margin-top: 100px;
          padding: 4rem 2rem;
          position: relative;
          min-height: 600px;
        }

        .about-hero-images {
          display: grid;
          grid-template-columns: 0.8fr 1.5fr 0.7fr;
          gap: 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
          height: 500px;
        }

        .about-hero-images img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-hero-card {
          background: var(--navy);
          color: white;
          padding: 3rem;
          max-width: 550px;
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .about-hero-card h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          font-weight: 400;
        }

        .about-content {
          padding: 5rem 2rem;
        }

        .about-intro {
          text-align: center;
          margin-bottom: 5rem;
        }

        .about-section-text {
          margin-bottom: 4rem;
        }

        .large-text {
          font-size: 1.5rem;
          line-height: 1.6;
          font-weight: 400;
        }

        .about-feature {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 5rem;
          align-items: center;
        }

        .about-feature.reverse {
          direction: rtl;
        }

        .about-feature.reverse > * {
          direction: ltr;
        }

        .about-feature img {
          width: 100%;
          height: 350px;
          object-fit: cover;
        }

        .about-feature-text {
          padding: 2rem;
        }

        .feature-label {
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          color: var(--text-light);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .about-feature-text h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .about-feature-text p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }

        /* Blog Listing Page */
        .featured-post {
          margin-top: 100px;
          padding: 4rem 2rem;
          position: relative;
        }

        .featured-post-images {
          max-width: 1400px;
          margin: 0 auto;
        }

        .featured-img-main {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }

        .featured-post-card {
          background: var(--navy);
          color: white;
          padding: 3rem;
          max-width: 550px;
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .featured-post-card h1 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          font-weight: 400;
        }

        .featured-date {
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          margin-bottom: 1rem;
          opacity: 0.8;
        }

        .featured-post-card p {
          margin-bottom: 1.5rem;
          opacity: 0.9;
          line-height: 1.7;
        }

        .blog-grid-section {
          padding: 5rem 2rem;
        }

        .blog-filters {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid #E0E0E0;
        }

        .category-filters {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .category-filters span {
          font-weight: 600;
          color: var(--text-light);
        }

        .category-btn {
          background: none;
          border: none;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          cursor: pointer;
          color: var(--text-light);
          transition: color 0.3s ease;
          font-weight: 500;
        }

        .category-btn:hover,
        .category-btn.active {
          color: var(--navy);
        }

        .search-sort {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .search-box {
          padding: 0.5rem 1rem;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .sort-select {
          padding: 0.5rem 1rem;
          border: 1px solid #E0E0E0;
          background: white;
          font-family: inherit;
          cursor: pointer;
        }

        .blog-card-link {
          text-decoration: none;
          color: inherit;
        }

        .blog-date {
          font-size: 0.85rem;
          letter-spacing: 1px;
          color: var(--text-light);
          margin-bottom: 0.8rem;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-top: 4rem;
        }

        .page-arrow,
        .page-num {
          padding: 0.5rem 1rem;
          border: 1px solid #E0E0E0;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .page-num.active {
          background: var(--navy);
          color: white;
          border-color: var(--navy);
        }

        .page-arrow:hover,
        .page-num:hover {
          background: var(--navy);
          color: white;
          border-color: var(--navy);
        }

        /* Blog Single Page */
        .blog-hero {
          margin-top: 100px;
          padding: 4rem 2rem;
          position: relative;
        }

        .blog-hero-image {
          max-width: 1400px;
          margin: 0 auto;
        }

        .blog-hero-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        .blog-hero-card {
          background: var(--navy);
          color: white;
          padding: 3rem;
          max-width: 700px;
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .blog-hero-card h1 {
          font-size: 2.2rem;
          line-height: 1.3;
          font-weight: 400;
        }

        .blog-content {
          padding: 5rem 2rem;
        }

        .article-container {
          max-width: 800px;
        }

        .article-intro {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: var(--text-dark);
        }

        .blog-content p {
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: var(--text-light);
        }

        .blog-content h2 {
          font-size: 1.6rem;
          margin: 3rem 0 1.5rem;
          font-weight: 400;
        }

        .article-list {
          margin: 2rem 0 3rem 2rem;
        }

        .article-list li {
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1rem;
          color: var(--text-light);
        }

        .article-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          margin: 3rem 0 1rem;
        }

        .image-caption {
          font-size: 0.95rem;
          font-style: italic;
          color: var(--text-light);
          margin-bottom: 3rem;
        }

        .related-posts {
          padding: 5rem 2rem;
          background: var(--cream);
        }

        /* Contact Page */
        .contact-hero {
          margin-top: 100px;
          padding: 4rem 2rem;
          position: relative;
        }

        .contact-hero-image {
          max-width: 1400px;
          margin: 0 auto;
        }

        .contact-hero-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }

        .contact-hero-card {
          background: var(--navy);
          color: white;
          padding: 3rem;
          max-width: 550px;
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .contact-hero-card h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 400;
        }

        .contact-form-section {
          padding: 5rem 2rem;
        }

        .contact-form-section h2 {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          font-weight: 400;
        }

        .contact-form {
          max-width: 700px;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea,
        .form-select {
          width: 100%;
          padding: 0.9rem 1.2rem;
          border: 1px solid #E0E0E0;
          background: white;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: var(--navy);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-notice {
          font-size: 0.9rem;
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }

        .form-notice a {
          color: var(--navy);
          text-decoration: underline;
        }

        /* Placeholder Page */
        .placeholder-page {
          margin-top: 120px;
          padding: 5rem 2rem;
          text-align: center;
          min-height: 60vh;
        }

        .placeholder-page h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 400;
        }

        /* Team Page */
        .team-page,
        .career-page {
          min-height: 100vh;
        }

        .page-hero {
          margin-top: 100px;
          padding: 5rem 2rem;
          text-align: center;
          background: white;
        }

        .page-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 400;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: var(--text-light);
          max-width: 700px;
          margin: 0 auto;
        }

        .team-grid-section {
          padding: 5rem 2rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .team-member-card {
          background: white;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .team-member-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .team-member-image {
          width: 100%;
          height: 350px;
          overflow: hidden;
        }

        .team-member-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          transition: transform 0.3s ease;
        }

        .team-member-card:hover .team-member-image img {
          transform: scale(1.05);
        }

        .team-member-info {
          padding: 2rem;
        }

        .team-member-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .team-member-role {
          color: var(--navy);
          font-size: 1rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .team-member-bio {
          color: var(--text-light);
          line-height: 1.6;
        }

        /* Career Page */
        .career-benefits {
          padding: 5rem 2rem;
          background: white;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .benefit-card {
          padding: 2rem;
          background: var(--cream);
          transition: transform 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
        }

        .benefit-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--navy);
          font-weight: 500;
        }

        .benefit-card p {
          color: var(--text-light);
          line-height: 1.6;
        }

        .open-positions {
          padding: 5rem 2rem;
        }

        .positions-list {
          margin-top: 3rem;
        }

        .position-card {
          background: white;
          padding: 2.5rem;
          margin-bottom: 2rem;
          border-left: 4px solid var(--navy);
          transition: all 0.3s ease;
        }

        .position-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transform: translateX(5px);
        }

        .position-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 2rem;
        }

        .position-header h3 {
          font-size: 1.6rem;
          margin-bottom: 0.8rem;
          font-weight: 500;
        }

        .position-meta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .position-location,
        .position-type {
          font-size: 0.9rem;
          color: var(--text-light);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .position-location::before {
          content: "📍";
        }

        .position-type::before {
          content: "🕐";
        }

        .btn-apply {
          background: var(--navy);
          color: white;
          border: none;
          padding: 0.8rem 1.8rem;
          font-size: 0.95rem;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .btn-apply:hover {
          background: var(--teal);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(45, 101, 105, 0.3);
        }

        .position-description {
          color: var(--text-light);
          line-height: 1.7;
          font-size: 1.05rem;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .container {
            padding: 0 1.5rem;
          }

          .service-item,
          .service-item.reverse {
            gap: 2rem;
          }

          .case-study-card {
            right: 1rem;
            bottom: 1rem;
            top: auto;
            max-width: 250px;
            padding: 1.5rem;
          }
        }

        @media (max-width: 1024px) {
          .nav-container {
            padding: 1.5rem 2rem;
          }

          .nav-links {
            gap: 1.5rem;
          }

          .nav-links a {
            font-size: 0.95rem;
          }

          .hero {
            padding: 3rem 1.5rem;
            min-height: 500px;
          }

          .hero-images {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          .hero-img-1 {
            grid-row: 1;
            height: 300px;
          }

          .hero-img-2,
          .hero-img-3 {
            height: 250px;
          }

          .hero-card {
            max-width: 500px;
            padding: 2.5rem;
            bottom: 1rem;
          }

          .hero-card h1 {
            font-size: 1.75rem;
          }

          .service-item,
          .service-item.reverse {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .service-item.reverse .service-content {
            order: 1;
          }

          .service-item.reverse .service-image {
            order: 2;
          }

          .service-image img {
            height: 350px;
          }

          .case-study-card {
            position: relative;
            right: 0;
            bottom: 0;
            top: 0;
            margin-top: 1.5rem;
            max-width: 100%;
          }

          .team-card {
            grid-template-columns: 1fr;
          }

          .team-card img {
            height: 400px;
            object-position: center 25%;
          }

          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }

          .team-member-image {
            height: 320px;
          }

          .team-member-image img {
            object-position: center 25%;
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .position-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-apply {
            width: 100%;
          }

          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .blog-card img {
            height: 220px;
          }

          .about-hero-images {
            grid-template-columns: 1fr 1fr;
            height: 350px;
            gap: 1rem;
          }

          .about-hero-images img:last-child {
            display: none;
          }

          /* Blog Listing Page Tablet */
          .featured-post {
            padding: 3rem 1.5rem;
          }

          .featured-img-main {
            height: 400px;
          }

          .featured-post-card {
            max-width: 500px;
            padding: 2.5rem;
          }

          .featured-post-card h1 {
            font-size: 1.6rem;
          }

          .blog-grid-section {
            padding: 4rem 2rem;
          }

          .blog-filters {
            flex-wrap: wrap;
            gap: 1.5rem;
          }

          .category-filters {
            width: 100%;
          }

          .search-sort {
            width: 100%;
            justify-content: flex-start;
          }

          .blog-grid .blog-card img {
            height: 240px;
          }

          .pagination {
            margin-top: 3rem;
          }

          .about-hero-card {
            max-width: 500px;
            padding: 2.5rem;
          }

          .about-feature,
          .about-feature.reverse {
            grid-template-columns: 1fr;
            gap: 2rem;
            direction: ltr;
          }

          .about-feature img {
            height: 300px;
          }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .footer-columns {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem 3rem;
          }

          .footer-contact {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .featured-post {
            padding: 3rem 1.5rem;
          }

          .featured-post-card {
            max-width: 500px;
            padding: 2.5rem;
          }

          .blog-hero-card {
            max-width: 600px;
            padding: 2.5rem;
          }

          .blog-hero-card h1 {
            font-size: 1.9rem;
          }

          .contact-hero-card {
            max-width: 500px;
            padding: 2.5rem;
          }

          .contact-hero-card h1 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 1.2rem 1.5rem;
          }

          .logo {
            width: 150px;
            height: 50px;
          }

          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .hero {
            margin-top: 80px;
            padding: 2rem 1rem;
            min-height: auto;
          }

          .hero-images {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .hero-img-1,
          .hero-img-2,
          .hero-img-3 {
            height: 250px;
            grid-row: auto;
          }

          .hero-card {
            position: static;
            transform: none;
            margin: 2rem auto 0;
            padding: 2rem;
            max-width: 100%;
          }

          .hero-card h1 {
            font-size: 1.5rem;
          }

          .cta-section {
            padding: 3rem 1rem;
          }

          .cta-text {
            font-size: 1.1rem;
          }

          .services-section {
            padding: 3rem 1rem;
          }

          .section-subtitle {
            font-size: 1.3rem;
          }

          .service-item {
            margin-bottom: 4rem;
          }

          .service-content h3 {
            font-size: 1.5rem;
          }

          .service-content p {
            font-size: 1rem;
          }

          .service-image img {
            height: 300px;
          }

          .team-section {
            padding: 3rem 1rem;
          }

          .team-card {
            padding: 2rem;
          }

          .team-card img {
            height: 350px;
            object-position: center 30%;
          }

          .blog-preview-section {
            padding: 3rem 1rem;
          }

          .blog-intro {
            font-size: 1rem;
          }

          .blog-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .testimonial-section {
            padding: 3rem 1rem;
          }

          .testimonial-section h2 {
            font-size: 2rem;
          }

          .testimonial-avatar {
            width: 100px;
            height: 100px;
            object-fit: cover;
            object-position: center 30%;
          }

          .testimonial-card blockquote {
            font-size: 1.05rem;
          }

          .footer {
            padding: 3rem 1rem 2rem;
          }

          .footer-top {
            gap: 2rem;
          }

          .footer-logo {
            width: 150px;
            height: 60px;
          }

          .footer-columns {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-contact {
            gap: 2rem;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-form button {
            width: 100%;
            justify-content: center;
          }

          /* About Page */
          .about-hero {
            margin-top: 80px;
            padding: 2rem 1rem;
            min-height: auto;
          }

          .about-hero-images {
            grid-template-columns: 1fr;
            height: auto;
            gap: 1rem;
          }

          .about-hero-images img {
            height: 250px;
          }

          .about-hero-images img:nth-child(3) {
            display: block;
          }

          .about-hero-card {
            position: static;
            transform: none;
            margin: 2rem auto 0;
            padding: 2rem;
            max-width: 100%;
          }

          .about-hero-card h1 {
            font-size: 1.5rem;
          }

          .about-content {
            padding: 3rem 1rem;
          }

          .about-intro {
            margin-bottom: 3rem;
          }

          .about-section-text {
            margin-bottom: 3rem;
          }

          .large-text {
            font-size: 1.3rem;
          }

          .about-feature {
            margin-bottom: 3rem;
          }

          .about-feature img {
            height: 250px;
          }

          .about-feature-text {
            padding: 1rem 0;
          }

          .about-feature-text h3 {
            font-size: 1.5rem;
          }

          /* Blog Listing */
          .featured-post {
            margin-top: 80px;
            padding: 2rem 1rem;
          }

          .featured-img-main {
            height: 300px;
          }

          .featured-post-card {
            position: static;
            transform: none;
            margin: 2rem auto 0;
            padding: 2rem;
            max-width: 100%;
          }

          .featured-post-card h1 {
            font-size: 1.5rem;
          }

          .blog-grid-section {
            padding: 3rem 1rem;
          }

          .blog-filters {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .category-filters {
            flex-wrap: wrap;
            gap: 0.8rem;
          }

          .search-sort {
            width: 100%;
            flex-direction: column;
            gap: 0.8rem;
          }

          .search-box,
          .sort-select {
            width: 100%;
          }

          .pagination {
            flex-wrap: wrap;
            gap: 0.3rem;
            margin-top: 3rem;
          }

          .page-arrow,
          .page-num {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
          }

          /* Blog Single */
          .blog-hero {
            margin-top: 80px;
            padding: 2rem 1rem;
          }

          .blog-hero-image img {
            height: 300px;
          }

          .blog-hero-card {
            position: static;
            transform: none;
            margin: 2rem auto 0;
            padding: 2rem;
            max-width: 100%;
          }

          .blog-hero-card h1 {
            font-size: 1.6rem;
          }

          .blog-content {
            padding: 3rem 1rem;
          }

          .article-intro {
            font-size: 1.1rem;
          }

          .blog-content p {
            font-size: 1rem;
          }

          .blog-content h2 {
            font-size: 1.4rem;
          }

          .article-image {
            height: 300px;
            margin: 2rem 0 1rem;
          }

          .related-posts {
            padding: 3rem 1rem;
          }

          /* Contact */
          .contact-hero {
            margin-top: 80px;
            padding: 2rem 1rem;
          }

          .contact-hero-image img {
            height: 300px;
          }

          .contact-hero-card {
            position: static;
            transform: none;
            margin: 2rem auto 0;
            padding: 2rem;
            max-width: 100%;
          }

          .contact-hero-card h1 {
            font-size: 1.8rem;
          }

          .contact-form-section {
            padding: 3rem 1rem;
          }

          .contact-form-section h2 {
            font-size: 1.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .form-group input,
          .form-group textarea,
          .form-select {
            font-size: 16px; /* Prevents zoom on iOS */
          }

          .placeholder-page {
            margin-top: 100px;
            padding: 3rem 1rem;
          }

          .placeholder-page h1 {
            font-size: 2rem;
          }

          /* Team and Career pages mobile */
          .page-hero {
            margin-top: 80px;
            padding: 3rem 1rem;
          }

          .page-hero h1 {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .team-grid-section {
            padding: 3rem 1rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .team-member-image {
            height: 300px;
          }

          .team-member-image img {
            object-position: center 30%;
          }

          .team-member-info {
            padding: 1.5rem;
          }

          .team-member-info h3 {
            font-size: 1.3rem;
          }

          .career-benefits {
            padding: 3rem 1rem;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .benefit-card {
            padding: 1.5rem;
          }

          .open-positions {
            padding: 3rem 1rem;
          }

          .position-card {
            padding: 1.5rem;
          }

          .position-header h3 {
            font-size: 1.3rem;
          }

          .position-meta {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 1rem;
          }

          .logo {
            width: 130px;
            height: 45px;
          }

          .hero-card,
          .about-hero-card,
          .featured-post-card,
          .blog-hero-card,
          .contact-hero-card {
            padding: 1.5rem;
          }

          .hero-card h1,
          .about-hero-card h1 {
            font-size: 1.3rem;
          }

          .btn-primary {
            padding: 0.8rem 1.5rem;
            font-size: 0.95rem;
          }

          .cta-text {
            font-size: 1rem;
          }

          .service-content h3 {
            font-size: 1.3rem;
          }

          .team-card {
            padding: 1.5rem;
          }

          .testimonial-section h2 {
            font-size: 1.6rem;
          }

          .footer-columns {
            grid-template-columns: 1fr;
          }

          .blog-card h3 {
            font-size: 1.1rem;
          }

          .featured-post-card h1 {
            font-size: 1.3rem;
          }

          .blog-hero-card h1 {
            font-size: 1.4rem;
          }

          .contact-hero-card h1 {
            font-size: 1.6rem;
          }

          .pagination {
            font-size: 0.85rem;
          }

          .page-arrow,
          .page-num {
            padding: 0.3rem 0.6rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
