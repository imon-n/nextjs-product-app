import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div className="pt-20"> {/* Add padding equal to navbar height */}
      <Navbar />

      <section className="h-96 flex items-center justify-center bg-blue-100">
        <h2 className="text-4xl font-bold">Welcome to Fake Product App</h2>
      </section>

      <section className="p-8 grid grid-cols-3 gap-4">
        <div className="p-4 border">Highlight 1</div>
        <div className="p-4 border">Highlight 2</div>
        <div className="p-4 border">Highlight 3</div>
      </section>

      <footer className="p-4 bg-gray-200 text-center">
        &copy; 2025 Fake Product App
      </footer>
    </div>
  );
}
