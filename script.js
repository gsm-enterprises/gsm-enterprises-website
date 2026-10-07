const products = [
  {
    name: 'Assam Tea CTC BOP',
    category: 'Tea',
    image: 'BOP.jpeg',
    price: '₹200 - ₹1000 / kg',
    description: 'Premium Assam tea with rich flavour and strong market demand.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Assam Tea CTC BOP.'
  },
  {
    name: 'Assam Tea CTC BOPSM',
    category: 'Tea',
    image: 'BOPSM.jpeg',
    price: '₹200 - ₹1000 / kg',
    description: 'Balanced Assam tea suited for regular bulk buyers and retail supply.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Assam Tea CTC BOPSM.'
  },
  {
    name: 'Assam Tea CTC BOPL',
    category: 'Tea',
    image: 'BOPL.jpeg',
    price: '₹200 - ₹1000 / kg',
    description: 'Large leaf Assam tea selected for premium quality and export demand.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Assam Tea CTC BOPL.'
  },
  {
    name: 'Assam Tea CTC BP',
    category: 'Tea',
    image: 'BP.jpeg',
    price: '₹200 - ₹1000 / kg',
    description: 'A desirable Assam blend for buyers seeking dependable bulk supply.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Assam Tea CTC BP.'
  },
  {
    name: 'Assam Tea CTC OF PF',
    category: 'Tea',
    image: 'OF  PF.jpeg',
    price: '₹200 - ₹1000 / kg',
    description: 'Strong Assam tea quality for wholesale and regular trade supply.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Assam Tea CTC BOPF.'
  },
  {
    name: 'Assam Tea CTC DUST',
    category: 'Tea',
    image: 'DUST.jpeg',
    price: '₹200 - ₹1000 / kg',
    description: 'Cost-effective Assam tea option for high-volume commercial requirements.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Assam Tea CTC DUST.'
  },
  {
    name: 'Assam Tea CTC PD',
    category: 'Tea',
    image: 'PD.jpeg',
    price: '₹200 - ₹1000 / kg',
    description: 'Quality Assam CTC tea suitable for wholesale and commercial supply.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Assam Tea CTC PD.'
  },
  {
    name: 'Mens Casual Shirts',
    category: 'Garments',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    price: 'Price on request',
    description: 'Comfortable cotton shirts in assorted sizes for retail and wholesale.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Mens Casual Shirts.'
  },
  {
    name: 'T-Shirts & Casual Wear',
    category: 'Garments',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    price: 'Price on request',
    description: 'Everyday t-shirts and casual wear available in bulk assortments.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about T-Shirts & Casual Wear.'
  },
  {
    name: 'Ladies Ethnic Wear',
    category: 'Garments',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    price: 'Price on request',
    description: 'Kurtis and ethnic wear in popular designs for trade buyers.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Ladies Ethnic Wear.'
  },
  {
    name: 'Premium Mens Watches',
    category: 'Premium Watches',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    price: 'Price on request',
    description: 'Premium analog watches with refined finish for gifting and resale.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Premium Mens Watches.'
  },
  {
    name: 'Chronograph Watches',
    category: 'Premium Watches',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
    price: 'Price on request',
    description: 'Stylish chronograph watches with strong retail appeal.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Chronograph Watches.'
  },
  {
    name: 'Ladies Fashion Watches',
    category: 'Premium Watches',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80',
    price: 'Price on request',
    description: 'Elegant ladies watches suited for boutiques and wholesale lots.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Ladies Fashion Watches.'
  },
  {
    name: 'Imported Sports Shoes',
    category: 'Imported Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    price: 'Price on request',
    description: 'Imported sports and running shoes for retailers and distributors.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Imported Sports Shoes.'
  },
  {
    name: 'Imported Casual Sneakers',
    category: 'Imported Shoes',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    price: 'Price on request',
    description: 'Trendy imported sneakers in assorted sizes and bulk quantities.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Imported Casual Sneakers.'
  },
  {
    name: 'Imported Formal Shoes',
    category: 'Imported Shoes',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
    price: 'Price on request',
    description: 'Quality imported formal footwear for wholesale supply.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Imported Formal Shoes.'
  },
  {
    name: 'Fashion Accessories',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    price: 'Price on request',
    description: 'Bags, belts and accessories to complement fashion and footwear ranges.',
    whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Fashion Accessories.'
  }
];

const categories = [
  { name: 'Garments', icon: '👕', blurb: 'Shirts, t-shirts and ethnic wear in bulk.' },
  { name: 'Premium Watches', icon: '⌚', blurb: 'Premium and fashion watches for resale.' },
  { name: 'Imported Shoes', icon: '👟', blurb: 'Imported sports, casual and formal footwear.' },
  { name: 'Tea', icon: '🍵', blurb: 'Assam CTC tea grades for wholesale and export.' },
  { name: 'Accessories', icon: '👜', blurb: 'Bags, belts and other trading essentials.' }
];

const productGrid = document.getElementById('productGrid');

function renderProductCard(product) {
  return `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-body">
            <span class="product-badge">${product.category}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-meta">
              <span class="product-price">${product.price}</span>
              <a
                href="https://wa.me/919864068136?text=${encodeURIComponent(product.whatsappText)}"
                class="product-enquire"
                target="_blank"
                rel="noreferrer"
              >
                Enquire
              </a>
            </div>
          </div>
        </article>
      `;
}

function renderProducts() {
  if (!productGrid) return;

  productGrid.innerHTML = categories
    .map((category) => {
      const items = products.filter((product) => product.category === category.name);
      if (!items.length) return '';
      const id = 'category-' + category.name.toLowerCase().replace(/\s+/g, '-');
      return `
        <section class="category-section" id="${id}">
          <div class="category-head">
            <span class="category-icon" aria-hidden="true">${category.icon}</span>
            <div>
              <h3>${category.name.toUpperCase()}</h3>
              <p>${category.blurb}</p>
            </div>
            <span class="category-count">${items.length} items</span>
          </div>
          <div class="product-grid">${items.map(renderProductCard).join('')}</div>
        </section>
      `;
    })
    .join('');
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const bulkForm = document.getElementById('bulkForm');
if (bulkForm) {
  bulkForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(bulkForm);
    const name = formData.get('name');
    const company = formData.get('company');
    const product = formData.get('product');
    const whatsappText = encodeURIComponent(
      `Hello GSM ENTERPRISES, I am ${name} from ${company}. I want to enquire about ${product}.`
    );
    window.open(`https://wa.me/919864068136?text=${whatsappText}`, '_blank');
  });
}

renderProducts();
