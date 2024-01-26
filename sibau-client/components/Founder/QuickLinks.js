import Link from "next/link";

const QuickLinks = () => {
  const links = [
    {
      name: "CMS Portal",
      url: "https://pscs.iba-suk.edu.pk/psp/HRCS9/?cmd=login&languageCd=ENG",
    },
    {
      name: "Learning Management System",
      url: "http://elearning.iba-suk.edu.pk/login/index.php",
    },
    {
      name: "Library Management System",
      url: "http://chamo.iba-suk.edu.pk:8000/search/query?theme=sibau",
    },
    {
      name: "Financial & Supply Chain Management System",
      url: "http://erppws.siba.edu.pk/psp/ps/?cmd=login&languageCd=ENG",
    },
    {
      name: "Human Capital Management System",
      url: "http://erppws.siba.edu.pk:85/psp/hcm/?cmd=login&languageCd=ENG",
    },
    {
      name: "HR Portal",
      url: "http://former.iba-suk.edu.pk/ibasuk/registrar/wpCLogin.aspx",
    },
  ];
  return (
    <div className="py-10">
      <div className="text-2xl pb-4">Quick Links</div>
      {links.map((link, index) => (
        <div key={index} className="block  p-2  text-blue-700">
          <Link href={link.url}>
            <div className="hover:text-blue-500">{link.name}</div>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
