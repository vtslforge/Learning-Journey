

import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    // 1) Find all boxes we want to watch.
    const targets = document.querySelectorAll("[data-io]")

    // 2) Create the observer.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 3) If a box is visible, add a class to show it.
          if (entry.isIntersecting) {
            entry.target.classList.add("io-visible")
          }
        })
      },
      // Trigger when the element crosses the middle of the viewport.
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    )

    // 4) Start observing each box.
    targets.forEach((el) => observer.observe(el))

    return () => {
      // 5) Cleanup when component unmounts.
      targets.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto w-full max-w-md px-6 py-12">
        <h1 className="mb-2 text-xl font-semibold">IntersectionObserver (very simple)</h1>
        <p className="mb-8 text-sm text-slate-600">Scroll down to see boxes appear.</p>

        <div className="space-y-8">
          <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 1
          </div>
          <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 2
          </div>
          <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 3
          </div>
          <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>
                    <div data-io className="io-card rounded border border-slate-200 bg-slate-50 p-6 text-sm">
            Box 4
          </div>

        </div>
      </div>

      <style>{`
        .io-card {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 250ms ease, transform 250ms ease;
        }
        .io-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .io-card {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}

export default App
