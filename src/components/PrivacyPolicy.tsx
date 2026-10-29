import { PrivacyPage } from "../../docs/air/privacy";
export function PrivacyPolicy() {
  return (
    <PrivacyPage
      product="Cloakyard"
      date="2026-10-29"
      lead="A directory of local-first tools. This website has no accounts, uploads or product analytics."
      sections={[
        {
          id: "website",
          title: "What this website does",
          body: (
            <p>
              Cloakyard is a static directory of open-source tools. It does not ask you to create an
              account, upload documents or provide personal information. It has no advertising,
              analytics scripts or tracking cookies.
            </p>
          ),
        },
        {
          id: "requests",
          title: "Requests that serve the website",
          body: (
            <p>
              Your browser downloads the website’s code and artwork. The hosting provider may
              process ordinary request information, such as IP addresses, requested paths and
              browser headers, to deliver and protect the site. Cloakyard does not add a separate
              analytics pipeline.
            </p>
          ),
        },
        {
          id: "apps",
          title: "Each app has its own policy",
          body: (
            <p>
              Product links open separate applications and websites. Their privacy policies describe
              their own local storage, optional asset downloads and network activity. Read the
              policy in the app you choose; a local-first tool may still make network requests for
              features you initiate.
            </p>
          ),
        },
        {
          id: "source",
          title: "Source and questions",
          body: (
            <p>
              You can inspect the{" "}
              <a href="https://github.com/cloakyard/cloakyard" target="_blank" rel="noreferrer">
                website source
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/cloakyard/cloakyard/issues"
                target="_blank"
                rel="noreferrer"
              >
                ask a question
              </a>
              . External websites handle visits under their own policies. Avoid posting personal
              information in a public issue.
            </p>
          ),
        },
      ]}
    />
  );
}
