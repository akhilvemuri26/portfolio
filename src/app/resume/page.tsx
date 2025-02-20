import FloatingNav from "@/components/floating-nav"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background">
      <FloatingNav />
      <div className="container mx-auto max-w-4xl px-4 py-24">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
            Resume
          </h1>
          <p className="text-muted-foreground">
            To add your resume, place a PDF file named &quot;resume.pdf&quot; in the public folder of your Next.js
            project.
          </p>
          {/* The resume will be displayed here */}
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="w-full h-[800px] rounded-lg border dark:border-gray-800"
          >
            <p>
              It appears you don&apos;t have a PDF plugin for this browser. You can{" "}
              <a href="/resume.pdf" className="text-primary hover:underline">
                click here to download the PDF file
              </a>
              .
            </p>
          </object>
        </div>
      </div>
    </main>
  )
}

