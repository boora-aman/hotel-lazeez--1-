import Link from "next/link"

export default function NotFound() {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-serif text-4xl font-bold text-primary mb-4">Page not found</h1>
      <p className="text-slate-600 mb-8">The page you are looking for does not exist.</p>
      <Link href="/rooms" className="rounded-full bg-primary px-6 py-3 font-semibold text-white">
        See AC rooms in Barwala
      </Link>
    </section>
  )
}
