import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "Grand Pizza Slice",
  description: "Best pizza in Akhnoor — Grand Pizza Slice",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-root">
          <header className="site-header">
            <div className="container header-inner">
              <div className="logo">Grand Pizza Slice</div>
              <nav className="main-nav">
                <a href="#home">Home</a>
                <a href="#menu">Menu</a>
                <a href="#about">About</a>
                <a href="#franchise">Franchise</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </header>

          <main className="site-main">
            {children}
          </main>

          <footer className="site-footer">
            <div className="container">
              © {new Date().getFullYear()} Grand Pizza Slice — +91 9103399555
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
