import { Work_Sans } from "next/font/google";

import "./globals.css";
import { Room } from "./Room";


export const metadata = {
  title: "Figma Clone",
  description:
    "developed by @dineshperam",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={`${workSans.className} bg-primary-grey-200`}>
      <Room>
        {children}
        </Room>
    </body>
  </html>
);

export default RootLayout;
