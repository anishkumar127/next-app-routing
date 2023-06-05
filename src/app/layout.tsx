import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-red-500`}>
        <ul className="flex p-0 list-none">
          <li className="m-10">Home</li>
          <li className="m-10">User</li>
        </ul>
        {children}
        <hr />
        <h1>this is footer</h1>
      </body>
    </html>
  );
}
