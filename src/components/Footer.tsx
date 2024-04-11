import Link from "next/link";

const Footer = () => {
  return (
    <div className='flex justify-center py-3 text-slate-500'>
      <p>
        Made with 👨🏻‍💻 by{" "}
        <Link className='underline' href={"https://niklas.sh"}>
          niklas.sh
        </Link>
      </p>
    </div>
  );
};

export default Footer;
