import ContentLoader from "react-content-loader";

const ShimmerMiniCarts = () => {
  return (
    <ContentLoader
      speed={2}
      width={100}
      height={130}
      viewBox="0 0 400 130"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {/* Profile Picture */}
      <rect x="0" y="5" rx="5" ry="5" width="50" height="50" />

      {/* Name & Text */}
      <rect x="75" y="15" rx="5" ry="5" width="200" height="10" />
      <rect x="75" y="35" rx="5" ry="5" width="250" height="10" />
    </ContentLoader>
  );
};

export default ShimmerMiniCarts;
