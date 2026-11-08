import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import {
  AccountsPage,
  ArticlePage,
  CompanyPage,
  ContactPage,
  DemosPage,
  IndustriesPage,
  IndustryPage,
  LegalPage,
  PartnersPage,
  ProductPage,
  ProductsPage,
  ResourcesPage,
  SearchPage,
  ServicesPage,
  SolutionPage,
  SolutionsPage,
} from './pages/SitePages'

export default function App() {
  return (
    <BrowserRouter basename="/palosecure">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<ProductPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="solutions/:slug" element={<SolutionPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="industries/:slug" element={<IndustryPage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="resources/:slug" element={<ArticlePage />} />
          <Route path="demos" element={<DemosPage />} />
          <Route path="accounts" element={<AccountsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="privacy" element={<LegalPage kind="privacy" />} />
          <Route path="terms" element={<LegalPage kind="terms" />} />
          <Route path="company/:slug" element={<CompanyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
