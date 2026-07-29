interface BrandProps {
  inverse?: boolean;
}

export function Brand({ inverse = false }: BrandProps) {
  return (
    <a className={`brand${inverse ? " brand--inverse" : ""}`} href="/" aria-label="Cloakyard home">
      <img className="brand-mark" src="/cloakyard-mark.svg" alt="" width="40" height="40" />
      <span className="brand-word" translate="no">
        Cloak<span>yard</span>
      </span>
    </a>
  );
}
