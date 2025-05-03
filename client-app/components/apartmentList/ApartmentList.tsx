"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/components/apartmentList/ApartmentList.module.css";
import ApartmentCard from "@/components/apartmentList/ApartmentCard";
import ProgressBar from "@/components/ProgressBar";
import API_BASE_URL from "@/config/api";

type Apartment = {
  id: string;
  name: string;
  location: string;
  description: string;
  price: number;
  imageUrl: string;
};

function ApartmentList(props: { refreshKey: number; searchKey: string }) {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetch(`${API_BASE_URL}/apartments?name=${props.searchKey}`)
        .then((res) => res.json())
        .then((data) => {
          setApartments(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch apartments:", err);
          setLoading(false);
        });
    }, 1000);

    return () => clearTimeout(timer);
  }, [props.refreshKey, props.searchKey]);

  if (loading)
    return (
      <div className={styles.circularProgress}>
        <ProgressBar />
      </div>
    );

  if (apartments.length == 0)
    return (
      <div className={styles.noApartmentFound}>
        <h2>Sorry, no apartments found.</h2>
      </div>
    );

  return (
    <div className={styles.apartmentContainer}>
      {apartments.map((apartment) => (
        <Link key={apartment.id} href={`/apartment/${apartment.id}`}>
          <ApartmentCard
            key={apartment.id}
            compoundName={apartment.name}
            location={apartment.location}
            description={apartment.description}
            price={apartment.price.toLocaleString()}
            imageUrl={apartment.imageUrl}
          />
        </Link>
      ))}
    </div>
  );
}

export default ApartmentList;
