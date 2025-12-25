import Link from "next/link";
import { Github, Linkedin, Mail, Code2, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "Setup Guide", href: "/setup" },
      { name: "Features", href: "/features" },
      { name: "How It Works", href: "/how-it-works" },
    ],
    resources: [
      { name: "Integrations", href: "/integrations" },
      { name: "Rules", href: "/rules" },
      { name: "Best Practices", href: "/best-practices" },
      { name: "Demo", href: "/demo" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                SonarQube Guide
              </span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              A comprehensive guide to setting up and using SonarQube for code
              quality analysis. Learn best practices, integrations, and advanced
              features.
            </p>
            <a
              href="https://gunasekaran-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              View Portfolio <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} SonarQube Guide. Created by{" "}
              <a
                href="https://gunasekaran-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Gunasekaran
              </a>
            </p>
            <p className="text-xs text-slate-500">
              SonarQube is a trademark of SonarSource SA.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
