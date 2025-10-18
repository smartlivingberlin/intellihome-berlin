import { Link } from 'wouter'
import React from 'react'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav style={{display:'flex', gap:12, padding:12, borderBottom:'1px solid #eee'}}>
        <strong>🏠 IntelliHome</strong>
        <Link href="/">Home</Link>
        <Link href="/smart-home">Smart Home</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <main style={{padding:16}}>{children}</main>
      <footer style={{padding:16, borderTop:'1px solid #eee', marginTop:24}}>
        <small>© {new Date().getFullYear()} IntelliHome Berlin</small>
      </footer>
    </div>
  )
}
