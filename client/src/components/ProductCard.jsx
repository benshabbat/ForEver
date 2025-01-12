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

        {product.additionalInfo && (
          <div className="additional-info">
            <h3 className="benefits-title">מידע נוסף:</h3>
            
            <div className="info-section">
              <h4 className="info-subtitle">המלצות שימוש:</h4>
              <p>{product.additionalInfo["המלצות שימוש"]}</p>
            </div>

            <div className="info-section">
              <h4 className="info-subtitle">זמן שימוש מומלץ:</h4>
              <p>{product.additionalInfo["זמן שימוש מומלץ"]}</p>
            </div>

            <div className="info-section">
              <h4 className="info-subtitle">יתרונות נוספים:</h4>
              <ul className="benefits-list">
                {product.additionalInfo["יתרונות נוספים"].map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="info-section">
              <h4 className="info-subtitle">מחקרים תומכים:</h4>
              <p>{product.additionalInfo["מחקרים תומכים"]}</p>
            </div>
          </div>
        )}

        
        <a 
          href={product.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          קרא עוד
        </a>
        {/* <a 
          href="https://flpil.co.il/wcssc-cart/3a7fbb8d5fefc48eee1259bda03f56e6/?agent=77217" 
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          הוספה לסל
        </a> */}
      </div>
    </article>
  );
}