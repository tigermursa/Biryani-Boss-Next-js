import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center text-black text-sm">
          <div className="mb-4 sm:mb-0 sm:mr-12 text-xl font-semibold">
            <p className="mb-2">123 Bruai Street, City</p>
            <p className="mb-2">example@email.com</p>
            <p>(123) 456-7890</p>
          </div>
          <div className="text-xl font-semibold">
            <p className="mb-2">XYZ Corporation</p>
            <p className="mb-2">Privacy Policy</p>
            <p className="mb-2">Customer Support</p>
            <p>Our Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
