import styles from "@/app/page.module.css";
import NavBar from "@/components/header/NavBar";
import ApartmentDetails from "@/components/apartmentDetails/ApartmentDetails";

type HeaderParams = {
  params: {
    id: string;
  };
};

export default async function Home(props: HeaderParams) {
  const { id } = await props.params;

  return (
    <div className={styles.page}>
      <NavBar />
      <ApartmentDetails id={id} />
    </div>
  );
}
