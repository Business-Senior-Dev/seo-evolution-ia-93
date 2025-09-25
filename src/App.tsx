import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { SuiteLayout } from "@/components/suite/SuiteLayout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Suite from "./pages/Suite";
import Portal from "./pages/Portal";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";
import AccountsList from "./pages/suite/AccountsList";
import AccountDetail from "./pages/suite/AccountDetail";
import Proyectos from "./pages/suite/Proyectos";
import Facturacion from "./pages/suite/Facturacion";
import RankToRent from "./pages/suite/RankToRent";
import Seo from "./pages/suite/Seo";
import Sem from "./pages/suite/Sem";
import Web from "./pages/suite/Web";
import Ecommerce from "./pages/suite/Ecommerce";
import FichaGoogle from "./pages/suite/FichaGoogle";
import Integraciones from "./pages/suite/Integraciones";
import Ajustes from "./pages/suite/Ajustes";
import PortalDashboard from "./pages/portal/PortalDashboard";
import PortalProjects from "./pages/portal/PortalProjects";
import PortalProjectDetail from "./pages/portal/PortalProjectDetail";
import PortalInvoices from "./pages/portal/PortalInvoices";
import PortalSupport from "./pages/portal/PortalSupport";
import { PortalLayout } from "@/components/portal/PortalLayout";
import SeoLocalIA from "./pages/servicios/SeoLocalIA";
import SeoWebIA from "./pages/servicios/SeoWebIA";
import SeoEcommerceIA from "./pages/servicios/SeoEcommerceIA";
import GestionResenasIA from "./pages/servicios/GestionResenasIA";
import LinkBuildingInteligente from "./pages/servicios/LinkBuildingInteligente";
import PublicidadSemIA from "./pages/servicios/PublicidadSemIA";
import CreacionWebReact from "./pages/servicios/CreacionWebReact";
import CreacionEcommerceShopify from "./pages/servicios/CreacionEcommerceShopify";
import MasServicios from "./pages/MasServicios";
import AgendaConsultoria from "./pages/AgendaConsultoria";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AnalizadorEncabezados from "./pages/AnalizadorEncabezados";
import AuditoriaLocalSEO from "./pages/AuditoriaLocalSEO";
import ZonasExclusivas from "./pages/ZonasExclusivas";
import TermsOfService from "./pages/legal/TermsOfService";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiesPolicy from "./pages/legal/CookiesPolicy";
import TermsOfUse from "./pages/legal/TermsOfUse";
import ProjectDetail from "./pages/ProjectDetail";
import SuiteProjectDetail from "./pages/suite/SuiteProjectDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
      <Route path="/portal" element={
        <ProtectedRoute allowedRoles={['client']}>
          <PortalLayout />
        </ProtectedRoute>
      }>
        <Route index element={<PortalDashboard />} />
        <Route path="projects" element={<PortalProjects />} />
        <Route path="projects/:id" element={<PortalProjectDetail />} />
        <Route path="invoices" element={<PortalInvoices />} />
        <Route path="support" element={<PortalSupport />} />
      </Route>
            <Route path="/suite" element={
              <ProtectedRoute allowedRoles={['owner', 'admin', 'manager', 'operator']}>
                <SuiteLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Suite />} />
              <Route path="accounts" element={<AccountsList />} />
              <Route path="accounts/:id" element={<AccountDetail />} />
              <Route path="seo" element={<Seo />} />
              <Route path="sem" element={<Sem />} />
              <Route path="web" element={<Web />} />
              <Route path="ecommerce" element={<Ecommerce />} />
              <Route path="ficha-google" element={<FichaGoogle />} />
              <Route path="rank-to-rent" element={<RankToRent />} />
              <Route path="proyectos" element={<Proyectos />} />
              <Route path="facturacion" element={<Facturacion />} />
              <Route path="integraciones" element={<Integraciones />} />
              <Route path="ajustes" element={<Ajustes />} />
              <Route path="projects/:id" element={<SuiteProjectDetail />} />
            </Route>
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/servicios/seo-local-ia" element={<SeoLocalIA />} />
            <Route path="/servicios/seo-web-ia" element={<SeoWebIA />} />
            <Route path="/servicios/seo-ecommerce-ia" element={<SeoEcommerceIA />} />
            <Route path="/servicios/gestion-resenas-ia" element={<GestionResenasIA />} />
            <Route path="/servicios/link-building-inteligente" element={<LinkBuildingInteligente />} />
            <Route path="/servicios/publicidad-sem-ia" element={<PublicidadSemIA />} />
            <Route path="/servicios/creacion-ecommerce-shopify" element={<CreacionEcommerceShopify />} />
            <Route path="/servicios/creacion-web-react" element={<CreacionWebReact />} />
            <Route path="/mas-servicios" element={<MasServicios />} />
            <Route path="/agenda-consultoria" element={<AgendaConsultoria />} />
            <Route path="/zonas-exclusivas" element={<ZonasExclusivas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/analizador-encabezados" element={<AnalizadorEncabezados />} />
            <Route path="/analizador-encabezados-seo" element={<AnalizadorEncabezados />} />
            <Route path="/auditoria-local-seo" element={<AuditoriaLocalSEO />} />
            <Route path="/legal/terminos-servicio" element={<TermsOfService />} />
            <Route path="/legal/privacidad" element={<PrivacyPolicy />} />
            <Route path="/legal/cookies" element={<CookiesPolicy />} />
            <Route path="/legal/condiciones-uso" element={<TermsOfUse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;