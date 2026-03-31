import ProductCard from "./ProductCard";

const ToolsSection = ({ data, handleAddToCart, cart }) => {
  return (
    <div className="container mx-auto">
      {/* all cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
