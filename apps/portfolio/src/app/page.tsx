import Link from 'next/link'

export const metadata = {
  title: "Shinyoung Lee's portfolio",
}

export default function Portfolio(): JSX.Element {
  return (
    <div className="container text-center font-serif">
      <div className="max-w-prose md:mx-auto">
        <h1 className="mb-10 mt-10 scroll-m-20 border-b pb-6 text-4xl tracking-tight lg:text-5xl">
          Shinyoung Lee's portfolio
        </h1>
        <p>
          Welcome to my porfolio! I hope to post some blog content here
          eventually, but for now, you can check out the project I'm currently
          building, the{' '}
          <Link
            className="text-primary font-medium underline underline-offset-4"
            href="https://cocktails.shinyoung.co"
          >
            Lee Family Cocktail Menu
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
