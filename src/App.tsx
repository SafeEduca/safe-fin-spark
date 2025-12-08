import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SafeKids from "./pages/SafeKids";
import FinancasEmFoco from "./pages/FinancasEmFoco";
import RumoLiberdade from "./pages/RumoLiberdade";
import SafeCompany from "./pages/SafeCompany";
import Safety from "./pages/Safety";
import SafeStories from "./pages/SafeStories";
import Contato from "./pages/Contato";
import Galeria from "./pages/Galeria";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/safe-kids" element={<SafeKids />} />
          <Route path="/financas-em-foco" element={<FinancasEmFoco />} />
          <Route path="/rumo-liberdade" element={<RumoLiberdade />} />
          <Route path="/safe-company" element={<SafeCompany />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/safe-stories" element={<SafeStories />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/galeria" element={<Galeria />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
