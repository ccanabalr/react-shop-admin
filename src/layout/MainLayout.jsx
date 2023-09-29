import Header from "@components/Header";
import Nav from "@common/Nav";


export default function MainLayaout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main>
          <div className="max-w7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
