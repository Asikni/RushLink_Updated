import "@/app/nav.scss";
export default function HomePage() {
  return (
    <div>
      <header className="header">
        <h1>Hello, Next.js with SCSS!</h1>
      </header>
      <div>
        <p>This is a sample page.</p>
        <button className="button">Click me</button>
      </div>
    </div>
  );
}
