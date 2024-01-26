import MouseDot from "@/components/MouseDot";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../styles/style.css";
import "tailwindcss/tailwind.css"; // Import the Tailwind CSS file

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <MouseDot />
    </>
  );
}
