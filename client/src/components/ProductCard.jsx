// ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <article className="product-card fade-in">
      <div className="product-image-wrapper">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
      </div>
      <div className="product-content">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        
        <div className="product-benefits">
          <h3 className="benefits-title">יתרונות המוצר:</h3>
          <ul className="benefits-list">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        {product.specs && (
          <div className="product-specs">
            <h3 className="benefits-title">מפרט טכני:</h3>
            <ul className="benefits-list">
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <a 
          href="https://flpil.co.il/?agent=77217" 
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          קרא עוד
        </a>
      </div>
    </article>
  );
}