export default function Page() {
  const faqs = [
    {
      q: "What expenses can I track?",
      a: "Camera gear, software subscriptions, home office, editing tools, props, travel, and any business expense IRS-recognized for content creators."
    },
    {
      q: "How does AI categorization work?",
      a: "Upload a receipt photo or connect your bank. Our AI reads the merchant, amount, and context to auto-assign the correct IRS Schedule C category."
    },
    {
      q: "Can I export for my accountant?",
      a: "Yes. Generate a tax-ready PDF or CSV report at any time, pre-sorted by IRS category, ready to hand off to your CPA or file yourself."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          For YouTubers &amp; Streamers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Leaving Money on the Table at Tax Time
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          CreatorWrite automatically tracks and categorizes every tax-deductible business expense — camera gear, software, home office, and more — so you keep more of what you earn.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking for $7/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        {/* Feature pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["AI Receipt OCR", "Bank Sync", "IRS Categories", "Tax-Ready Reports", "Mobile-First"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$7</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to maximize deductions</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited expense tracking",
              "AI-powered receipt scanning",
              "Automatic bank import",
              "IRS Schedule C categories",
              "Exportable tax reports (PDF/CSV)",
              "Mobile + desktop access"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started — $7/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-8 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} CreatorWrite. All rights reserved.
      </footer>
    </main>
  );
}
