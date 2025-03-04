export const metadata = {
  title: "Accessibility Statement | Access Web Limited",
  description: "Our commitment to web accessibility and WCAG AAA compliance.",
}

export default function AccessibilityPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Accessibility Statement</h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Access Web Limited is committed to ensuring digital accessibility for people with disabilities.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Our Commitment</h2>
          <p>
            We are continually improving the user experience for everyone, and applying the relevant accessibility
            standards.
          </p>
          <p>
            We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, which will help make
            the web more accessible to people with disabilities including blindness and low vision, deafness and hearing
            loss, learning disabilities, cognitive limitations, limited movement, speech disabilities, photosensitivity,
            and combinations of these.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Measures Taken</h2>
          <p>We have taken the following measures to ensure accessibility:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Include accessibility as part of our mission statement.</li>
            <li>Integrate accessibility into our procurement practices.</li>
            <li>Appoint an accessibility officer and/or ombudsperson for the website.</li>
            <li>Provide accessibility training for our staff.</li>
            <li>Include people with disabilities in our user experience testing.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Conformance Status</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve
            accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and
            Level AAA.
          </p>
          <p>
            Access Web Limited's website is fully conformant with WCAG 2.1 level AA. Fully conformant means that the
            content fully conforms to the accessibility standard without any exceptions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of Access Web Limited's website. Please let us know if you
            encounter accessibility barriers:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Phone: 07478 885 247</li>
            <li>E-mail: info@access-web.co.uk</li>
            <li>Postal address: 11 Gorseway, Fleet, England, GU52 7NA</li>
          </ul>
          <p>We try to respond to feedback within 2 business days.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Technical Specifications</h2>
          <p>
            Accessibility of Access Web Limited's website relies on the following technologies to work with the
            particular combination of web browser and any assistive technologies or plugins installed on your computer:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <p>These technologies are relied upon for conformance with the accessibility standards used.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Assessment Approach</h2>
          <p>Access Web Limited assessed the accessibility of this website by the following approaches:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Self-evaluation</li>
            <li>External evaluation</li>
            <li>User testing with assistive technologies</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Date</h2>
          <p>This statement was created on March 1, 2024.</p>
        </section>
      </div>
    </div>
  )
}

