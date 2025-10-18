import { Router, Route, Link } from 'wouter'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'
import SmartHome from '@/pages/SmartHome'
import Tools from '@/pages/Tools'

export default function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" component={Home} />
        <Route path="/smart-home" component={SmartHome} />
        <Route path="/tools" component={Tools} />
        <Route path="/blog" component={Blog} />
      </Layout>
    </Router>
  )
}
