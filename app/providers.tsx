"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const queryClient = new QueryClient();

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        enableSystem
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
