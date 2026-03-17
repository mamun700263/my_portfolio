import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 flex flex-col items-center space-y-4">
      
      <div className="flex space-x-4">
        <Link href="mailto:mamun700263@gmail.com">Email</Link>
        <Link href="https://github.com/mamun700263" target="_blank">GitHub</Link>
        <Link href="https://www.linkedin.com/in/md-abdullah-all-mamun/" target="_blank">LinkedIn</Link>
      </div>
      <p>© 2026 Md Abdullah All Mamun. All rights reserved.</p>
    </footer>
  );
}