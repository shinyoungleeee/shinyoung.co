export const metadata = {
  title: 'Lee Family Cocktail Menu',
}

const cocktails = [
  {
    name: 'negroni',
    ingredients: ['gin', 'sweet vermouth', 'Campari'],
  },
  {
    name: 'basil smash',
    ingredients: ['gin', 'basil', 'lemon juice', 'simple syrup'],
  },
  {
    name: 'gin & tonic',
    ingredients: ['gin', 'tonic syrup', 'soda'],
  },
  {
    name: 'hot toddy',
    ingredients: ['bourbon', 'honey', 'boiling water', 'lemon twist'],
  },
  {
    name: 'manhattan',
    ingredients: ['bourbon', 'sweet vermouth', 'bitters', 'cocktail cherry'],
  },
  {
    name: 'martini',
    ingredients: ['gin', 'dry vermouth', 'lemon twist'],
  },
  {
    name: 'old fashioned',
    ingredients: ['bourbon', 'sugar', 'bitters', 'orange twist'],
  },
  {
    name: 'whiskey sour',
    ingredients: ['bourbon', 'lemon juice', 'simple syrup', 'egg white'],
  },
]

export default function CocktailsMenuPage() {
  return (
    <div className="container text-center font-serif">
      <div className="max-w-prose md:mx-auto">
        <h1 className="mb-10 mt-10 scroll-m-20 border-b pb-6 text-4xl tracking-tight lg:text-5xl">
          Lee Family Cocktail Menu
        </h1>
        <section className="bg-muted px-6 pb-12 pt-10">
          {cocktails.map(({ name, ingredients }) => (
            <div className="pb-6" key={name}>
              <h6>{name}</h6>
              <p className="text-sm italic">{ingredients.join(', ')}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
