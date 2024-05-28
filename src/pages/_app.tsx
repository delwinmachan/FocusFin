import { AudioProvider } from "@/state/audio/AudioContext";
import { ThemeProvider } from "@/state/theme/ThemeContext";
import { TimerProvider } from "@/state/timer/TimerContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";

export const KumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-kumbh-sans",
});
export const RobotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto-slab",
});
export const SpaceMono = Space_Mono({
  weight: ["700"],
  variable: "--font-space-mono",
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${KumbhSans.variable} font-sans w-full h-full`}>
      <TimerProvider>
        <ThemeProvider>
          <AudioProvider>
            <Component {...pageProps} />
          </AudioProvider>
        </ThemeProvider>
      </TimerProvider>
    </main>
  );
}
