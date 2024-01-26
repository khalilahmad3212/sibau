import { useRouter } from "next/router";

const CustomPage = (props) => {
  const router = useRouter();
  const { query } = router;

  return <>CustomPage : {JSON.stringify(query.pageName)} page</>;
};

export async function getServerSideProps(context) {
  const { query } = context;

  const serverProps = { message: 1 };
  return {
    props: {
      serverProps,
    },
  };
}

export default CustomPage;
