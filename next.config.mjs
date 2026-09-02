/** @type {import('next').NextConfig} */

// Le site est entièrement statique : aucune API, aucun formulaire, aucune
// saisie utilisateur. Ces en-têtes servent donc surtout de défense en
// profondeur — limiter les dégâts si une dépendance était compromise — et
// à bloquer le clickjacking.
const securityHeaders = [
  // Empêche l'intégration du site dans une iframe (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Interdit au navigateur de deviner un type MIME différent de celui annoncé.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Ne transmet l'URL complète qu'en navigation interne.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Coupe l'accès aux capteurs : le site n'en a aucun usage.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Force HTTPS pendant 2 ans, sous-domaines compris.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // 'unsafe-inline' reste nécessaire : Next injecte des scripts inline
      // pour l'hydratation. S'en passer imposerait un nonce, donc un
      // middleware, donc un rendu dynamique — surcoût injustifié ici.
      "script-src 'self' 'unsafe-inline'",
      // Les composants ScrollProgress et Reveal posent des styles inline.
      "style-src 'self' 'unsafe-inline'",
      // La police Inter est auto-hébergée par next/font : aucun domaine tiers.
      "font-src 'self'",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig = {
  poweredByHeader: false, // ne pas annoncer « X-Powered-By: Next.js »
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
