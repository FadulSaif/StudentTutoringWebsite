"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props} storageKey="x-tutor-theme" enableSystem={true} defaultTheme="light">
      {children}
    </NextThemesProvider>
  )
}
