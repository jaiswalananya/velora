export default function Container({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
      {children}
    </div>
  );
}