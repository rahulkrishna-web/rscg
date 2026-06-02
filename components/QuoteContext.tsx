"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface QuoteItem {
  id: string;
  name: string;
  image: string;
  category: string;
  size?: string;
  qty: number;
}

interface QuoteContextType {
  quoteItems: QuoteItem[];
  addToQuote: (item: Omit<QuoteItem, "qty">, qty?: number) => void;
  removeFromQuote: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearQuote: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("rscg_quote_list");
      if (stored) {
        setQuoteItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error loading quote list from localStorage", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("rscg_quote_list", JSON.stringify(quoteItems));
    }
  }, [quoteItems, isLoaded]);

  const addToQuote = (item: Omit<QuoteItem, "qty">, qty = 1) => {
    setQuoteItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.size === item.size);
      if (existing) {
        return prev.map((i) => 
          (i.id === item.id && i.size === item.size) ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { ...item, qty }];
    });
    setIsDrawerOpen(true); // Open the drawer automatically when adding an item
  };

  const removeFromQuote = (id: string) => {
    setQuoteItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromQuote(id);
      return;
    }
    setQuoteItems((prev) => 
      prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );
  };

  const clearQuote = () => {
    setQuoteItems([]);
  };

  return (
    <QuoteContext.Provider value={{
      quoteItems,
      addToQuote,
      removeFromQuote,
      updateQty,
      clearQuote,
      isDrawerOpen,
      setIsDrawerOpen
    }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}
