import { getHello } from '@/lib/api'

export const metadata = {
  title: 'Lee Family Cocktail Menu',
}

export default async function CocktailsManagePage() {
  const { message } = await getHello()

  return (
    <div className="container text-center font-serif">
      <div className="max-w-prose md:mx-auto">
        <h1 className="mb-10 mt-10 scroll-m-20 border-b pb-6 text-4xl tracking-tight lg:text-5xl">
          Manage page
        </h1>
        <p>Message: {message}</p>
      </div>
    </div>
  )
}
