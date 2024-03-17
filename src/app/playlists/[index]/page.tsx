import Layout from "@/components/Layout/Layout";

let namePages: { favorite: string; hits: string; genre: string } = {
  favorite: "Избранное",
  hits: "100 танцевальных хитов",
  genre: "Инди-заряд",
};
let nameTitlePage: string;

export default function Tracks({ params }: { params: { index: string } }) {
  if (params.index === Object.keys(namePages)[0]) {
    nameTitlePage = namePages.favorite;
  } else if (params.index === Object.keys(namePages)[1]) {
    nameTitlePage = namePages.hits;
  } else if (params.index === Object.keys(namePages)[2]) {
    nameTitlePage = namePages.genre;
  }

  return (
    <Layout>
      <h1>{nameTitlePage}</h1>
    </Layout>
  );
}
