import Link from "next/link";

const RelatedLinks = () => {
  const links = [
    {
      name: "Mission",
      route: "/mission",
    },
    {
      name: "History",
      route: "/history",
    },
    {
      name: "Vice Chancellor",
      route: "/vc",
    },
    {
      name: "Founder",
      route: "/founder",
    },
    {
      name: "Registrar",
      route: "/registrar",
    },
    {
      name: "Publications",
      route: "/publication",
    },
  ];

  return (
    <div className="py-10">
      <div className="text-2xl pb-4">Related Links</div>
      {links.map((link, index) => (
        <div key={index} className="block p-2 text-blue-700">
          <Link href={link.route}>
            <div className="hover:text-blue-500">{link.name}</div>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RelatedLinks;
