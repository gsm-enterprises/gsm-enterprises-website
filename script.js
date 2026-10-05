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
    name: 'Assam Tea CTC BOPF',
    category: 'Tea',
    image: 'OF PF.jpeg',
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
  }
];
{
  name: 'Assam Tea CTC PD',
  category: 'Tea',
  image: 'PD.jpeg',
  price: '₹200 - ₹1000 / kg',
  description: 'Quality Assam CTC tea suitable for wholesale and commercial supply.',
  whatsappText: 'Hello GSM ENTERPRISES, I want to enquire about Assam Tea CTC PD.'
},
const productGrid = document.getElementById('productGrid');

function renderProducts() {
  if (!productGrid) return;

  productGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80';" />
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
      `
    )
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
