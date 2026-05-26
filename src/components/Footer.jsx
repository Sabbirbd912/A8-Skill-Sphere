import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-24 bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="bg-gradient-to-tr from-violet-600 via-violet-500 to-orange-600 bg-clip-text text-transparent">
                SkillSphere
              </span>
            </h2>

            <p className="font-medium text-gray-600 leading-relaxed max-w-xs">
              Learn from industry experts and build real-world skills to grow
              your career.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Courses</h3>
            <ul className="space-y-3 font-medium text-gray-600">
              <li>
                <Link href="/all-courses" className="hover:text-orange-500">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/popular" className="hover:text-orange-500">
                  Popular Courses
                </Link>
              </li>
              <li>
                <Link href="/new-courses" className="hover:text-orange-500">
                  New Courses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3 font-medium text-gray-600">
              <li>
                <Link href="/about" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 font-medium text-gray-600">
              <li>Email: support@softpolli.com</li>
              <li>Phone: +880 1752-485143</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SoftPolli. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-orange-500">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-orange-500">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
