import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Provider from "@components/Provider";
import "./globals.css";
import GoogleAnalytics from "@components/config/GoogleAnalytics";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Tablify",
  description:
    "Access and integrate tabular data from external APIs effortlessly with our user-friendly tool. Simply enter the API URL, and our DataTable component will fetch and display the data in a structured table. Empower your applications with seamless data visualization, making it easy to work with and analyze information from diverse sources.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {process.env.GA_TRACKING_ID && (
        <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      )}
      <body className={poppins.className}>
        <Provider>
          {children}
          <Analytics />
        </Provider>
      </body>
    </html>
  );
}
