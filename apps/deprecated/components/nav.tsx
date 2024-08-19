export default function Nav() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            <a
              className="relative m-1 flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
              href={`//${process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? 'shinyoung.co'}`}
            >
              home
            </a>
            <a
              className="relative m-1 flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
              href={`//cocktails.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`}
            >
              cocktail menu
            </a>
          </div>
        </nav>
      </div>
    </aside>
  )
}
