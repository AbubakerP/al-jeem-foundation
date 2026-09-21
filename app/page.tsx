import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#faf9f6] text-[#18251d]">

      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-24">
       <div className="relative z-10 mx-auto max-w-6xl text-center">
          {/* Subtle background detail */}
<div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#18251d]/5" />
<div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#18251d]/5" />
          
          <div className="mb-10 flex justify-center">
  <Image
    src="/al-jeem-foundation-logo.png"
    alt="Al Jeem Foundation"
    width={220}
    height={100}
    priority
    className="h-auto w-[180px] sm:w-[220px]"
  />
</div>

          <h1 className="mx-auto max-w-4xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Serving Humanity.
            <br />
            Strengthening Communities.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#59645d]">
            Al Jeem Foundation is committed to uplifting communities and
            supporting those in need through meaningful humanitarian and
            social initiatives.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8b7355]">
              About Us
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Compassion
              <br />
              in Action.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#59645d]">
            <p>
              Al Jeem Foundation was established with a commitment to making
              a meaningful difference in the lives of individuals, families
              and communities.
            </p>

            <p>
              Through compassionate and responsible initiatives, the
              Foundation seeks to provide assistance where it is needed most
              while promoting dignity, care and community support.
            </p>

            <p>
              Our work is guided by the belief that even a simple act of
              kindness can have a lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8b7355]">
              Our Purpose
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Making a meaningful difference.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#dfe3df] bg-[#dfe3df] md:grid-cols-3">
            <div className="bg-[#faf9f6] p-10 lg:p-12">
              <span className="text-sm text-[#8b7355]">01</span>
              <h3 className="mt-12 text-2xl font-semibold">Support</h3>
              <p className="mt-4 leading-7 text-[#667068]">
                Providing assistance to individuals and families experiencing
                hardship.
              </p>
            </div>

            <div className="bg-[#faf9f6] p-10 lg:p-12">
              <span className="text-sm text-[#8b7355]">02</span>
              <h3 className="mt-12 text-2xl font-semibold">Uplift</h3>
              <p className="mt-4 leading-7 text-[#667068]">
                Creating initiatives that contribute towards stronger and
                more resilient communities.
              </p>
            </div>

            <div className="bg-[#faf9f6] p-10 lg:p-12">
              <span className="text-sm text-[#8b7355]">03</span>
              <h3 className="mt-12 text-2xl font-semibold">Serve</h3>
              <p className="mt-4 leading-7 text-[#667068]">
                Serving people and communities with compassion, dignity and
                respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#18251d] px-6 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c8b18b]">
            What We Do
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Creating positive impact through meaningful initiatives.
          </h2>

          <div className="mt-16 grid gap-10 border-t border-white/20 pt-12 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Community Outreach</h3>
              <p className="mt-4 max-w-lg leading-7 text-white/65">
                Supporting communities through initiatives focused on
                immediate and practical needs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Food & Essential Relief
              </h3>
              <p className="mt-4 max-w-lg leading-7 text-white/65">
                Assisting vulnerable individuals and families with essential
                support during times of need.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Education & Development
              </h3>
              <p className="mt-4 max-w-lg leading-7 text-white/65">
                Supporting initiatives that create opportunities for learning,
                growth and development.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Humanitarian Assistance
              </h3>
              <p className="mt-4 max-w-lg leading-7 text-white/65">
                Providing compassionate assistance to people facing hardship
                and challenging circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8b7355]">
            Our Values
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Guided by Compassion.
          </h2>

          <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-5 text-lg text-[#59645d]">
            <span>Compassion</span>
            <span>•</span>
            <span>Dignity</span>
            <span>•</span>
            <span>Integrity</span>
            <span>•</span>
            <span>Service</span>
            <span>•</span>
            <span>Community</span>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="flex min-h-[70vh] items-center bg-[#eee9df] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#8b7355]">
            Al Jeem Foundation
          </p>

          <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Building Hope.
            <br />
            Creating Impact.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#59645d]">
            We believe stronger communities are built when people come
            together to care, support and uplift one another.
          </p>
        </div>
      </section>

    </main>
  );
}