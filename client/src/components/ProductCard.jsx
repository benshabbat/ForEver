

export default function ProductCard({ product }) {

    return (
      <div className="card w-full max-w-md mx-auto my-4">
        <div className="card-header">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
          />
          <h2 className="card-title">{product.name}</h2>
        </div>
        <div className="card-content">
          <p className="card-description">
            {product.description}
          </p>
          <div className="space-y-2">
            <h4 className="benefits-title">יתרונות המוצר:</h4>
            <ul className="benefits-list">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <a href="https://flpil.co.il/?agent=77217" target="_blank"
              className="read-more-btn"
            >
             קרא עוד
            </a>
          </div>
        </div>
      </div>
    );
}
