import ExternalLink from "./external-link";

export default function Nav() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <ExternalLink href="https://www.linkedin.com/in/shinyoung-lee/">
            LinkedIn
          </ExternalLink>
        </li>

        <li>
          <ExternalLink href="https://github.com/shinyoungleeee">
            GitHub
          </ExternalLink>
        </li>

        <li>
          <ExternalLink href="https://github.com/shinyoungleeee/shinyoung.co">
            view source
          </ExternalLink>
        </li>
      </ul>

      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © Shinyoung Lee 2024 MIT Licensed
      </p>
    </footer>
  );
}
