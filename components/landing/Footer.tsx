import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur-sm relative overflow-hidden mt-10">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
                
                {/* Brand Column */}
                <div className="col-span-2 lg:col-span-2">
                    <Link href="/" className="inline-block font-bold text-2xl mb-4 text-foreground">
                        Flex<span className="text-primary">Systems</span>
                    </Link>
                    <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
                        The ultimate modular platform for modern SaaS applications. Build faster, scale securely, and manage easily.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors dark:hover:text-white">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#0A66C2] transition-colors">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="mailto:support@flexsystems.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>
                </div>

                {/* Links Columns */}
                <div>
                    <h3 className="font-semibold text-foreground mb-4">Product</h3>
                    <ul className="space-y-3">
                        <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">Features</Link></li>
                        <li><Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</Link></li>
                        <li><Link href="#integrations" className="text-muted-foreground hover:text-primary transition-colors text-sm">Integrations</Link></li>
                        <li><Link href="/changelog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Changelog</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-foreground mb-4">Company</h3>
                    <ul className="space-y-3">
                        <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
                        <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</Link></li>
                        <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
                        <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                    <ul className="space-y-3">
                        <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
                        <li><Link href="/security" className="text-muted-foreground hover:text-primary transition-colors text-sm">Security</Link></li>
                    </ul>
                </div>

            </div>

            <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                    &copy; 2026 Flex Systems. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm text-muted-foreground">All systems operational</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
