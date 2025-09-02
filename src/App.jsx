import Header from './components/Header'
import { Hero } from './components/Hero'

export default function App() {

  const body = document.querySelector('body');
  body.style.overflow = 'hidden';

  return (
    <>
      <Header />
      <Hero />
    </>
  )
}