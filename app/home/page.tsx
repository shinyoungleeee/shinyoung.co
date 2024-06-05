import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-4 mt-8 max-w-xl bg-white text-black antialiased lg:mx-auto dark:bg-black dark:text-white">
      <div className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
        <Nav />

        <section>
          <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Shinyoung Lee&rsquo;s (WIP) Portfolio
          </h1>
          <p className="mb-4">
            Hello! I just started building this portfolio website. I plan to
            make updates regularly. Check back again soon!
          </p>
          <div className="my-8">
            <div>
              <Link className="mb-4 flex flex-col space-y-1" href="#">
                <div className="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
                  <p className="w-[125px] tabular-nums text-neutral-600 dark:text-neutral-400">
                    April 9, 2024
                  </p>
                  <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  </p>
                </div>
              </Link>
              <Link className="mb-4 flex flex-col space-y-1" href="#">
                <div className="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
                  <p className="w-[125px] tabular-nums text-neutral-600 dark:text-neutral-400">
                    April 10, 2024
                  </p>
                  <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  </p>
                </div>
              </Link>
              <Link className="mb-4 flex flex-col space-y-1" href="#">
                <div className="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
                  <p className="w-[125px] tabular-nums text-neutral-600 dark:text-neutral-400">
                    April 11, 2024
                  </p>
                  <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
