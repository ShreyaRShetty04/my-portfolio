
import "./globals.css";

export const metadata = {
  title: "Shreya | Personal Portfolio",
  description: "Personal portfolio website of Shreya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
