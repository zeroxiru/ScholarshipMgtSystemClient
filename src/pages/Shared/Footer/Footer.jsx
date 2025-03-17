import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#131313] text-white py-10 px-5 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">Scholarship Management</h2>
          <p className="mt-4 text-gray-400">
            A platform to explore, apply, and manage scholarships with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/all-scholarships" className="text-gray-400 hover:text-white">All Scholarships</Link>
            </li>
            <li>
              <Link to="/dashboard/my-applications/:email" className="text-gray-400 hover:text-white">My Applications</Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="text-gray-400 hover:text-white">Profile</Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-400 hover:text-white">Login</Link>
            </li>
            <li>
              <Link to="/signUp" className="text-gray-400 hover:text-white">Sign Up</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: support@scholarship.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Address: Education Hub, City Center</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Scholarship Management. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
