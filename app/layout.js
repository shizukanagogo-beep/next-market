import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const RootLayout = ({ Children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {Children}
        <Footer />
      </body>
    </html>
  );
};
