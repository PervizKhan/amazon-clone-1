import "./globals.css";
import AuthProvider from "../context/AuthProvider";
import { ReduxProvider } from "../components/ReduxProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
