export default function Footer() {
    return (
      <footer className="border-t py-6 dark:border-gray-800">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground dark:text-gray-400">
              © {new Date().getFullYear()} Akhil Vemuri. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  