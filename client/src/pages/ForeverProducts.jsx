import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../products";

const ForeverProducts = () => {
  return (
    <main className="container" dir="rtl">
      <section className="intro-section fade-in">
        <h1 className="page-title">
          מוצרי Forever Living - איכות טבעית לחיים בריאים
        </h1>
        <p className="intro-text">
          ברוכים הבאים לחנות המוצרים שלנו! אנו מציעים מגוון רחב של מוצרי בריאות
          וטיפוח טבעיים, המבוססים על צמח האלוורה האיכותי ביותר.
        </p>
      </section>

      <section className="products-section">
        <h2 className="section-title">המוצרים המובילים שלנו</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="section-title">למה לבחור במוצרי Forever?</h2>
        <div className="benefits-grid">
          <div>
            <h3 className="benefits-title">איכות ללא פשרות</h3>
            <ul className="benefits-list">
              <li>מוצרים טבעיים 100%</li>
              <li>ייצור בתנאים מבוקרים</li>
              <li>בדיקות איכות קפדניות</li>
              <li>אחריות שביעות רצון מלאה</li>
            </ul>
          </div>
          <div>
            <h3 className="benefits-title">היתרונות שלנו</h3>
            <ul className="benefits-list">
              <li>משלוח מהיר לכל הארץ</li>
              <li>ייעוץ אישי מקצועי</li>
              <li>מחירים הוגנים</li>
              <li>מוצרים בפיקוח משרד הבריאות</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">יצירת קשר</h2>
        <p className="intro-text">
        מתלבטים? רוצים המלצה אישית? אני כאן בשבילכם! התייעצות בוואטסאפ או בטלפון מירי 058-408-5081
                </p>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">👩</div>
            <h3 className="contact-name">מירי</h3>
            <p>יועצת מוצרי Forever</p>
            <a href="tel:0584085081" className="contact-phone">
              058-408-5081
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">👨</div>
            <h3 className="contact-name">דוד</h3>
            <p>יועץ מוצרי Forever</p>
            <a href="tel:0502284238" className="contact-phone">
              050-228-4238
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForeverProducts;
