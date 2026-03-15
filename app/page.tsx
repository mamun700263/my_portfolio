import AboutPage from "./about/page"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <main className="p-10 min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Hero></Hero>
    </main>
  )
}
